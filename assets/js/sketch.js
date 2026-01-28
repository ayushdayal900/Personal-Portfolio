let spine = [];
let particles = [];

const MAX_SPINE = 50;
const CLOUD_PER_POINT = 1;
const LINK_DIST = 50;

let hueBase = 300;
let lastMoveTime = 0;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('z-index', '3');
  c.style('pointer-events', 'none');

  colorMode(HSB, 360, 100, 100, 255);
  strokeCap(ROUND);
}

function draw() {
  clear();

  // 🔹 Fade out tail when mouse stops
    let idleTime = millis() - lastMoveTime;

    // start fading after short idle
    if (idleTime > 40 && spine.length > 0) {
    let decayRate = map(idleTime, 40, 300, 1, 4, true);
    spine.splice(-decayRate);
    }


  particles = [];

  // build calm particle plume
  for (let i = 0; i < spine.length; i++) {
    let p = spine[i];

    let spread = map(i, 0, spine.length, 2, 38);
    let alpha = map(i, 0, spine.length, 220, 25);

    for (let k = 0; k < CLOUD_PER_POINT; k++) {
      let offset = spine[i].offsets[k];

      particles.push({
        x: p.x + offset.x * spread,
        y: p.y + offset.y * spread,
        alpha
      });
    }
  }

  // draw sparse network
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    noStroke();
    fill(hueBase, 70, 100, p.alpha);
    circle(p.x, p.y, 2);

    for (let j = i + 1; j < particles.length; j++) {
      let q = particles[j];
      let d = dist(p.x, p.y, q.x, q.y);

      if (d < LINK_DIST) {
        let a = map(d, 0, LINK_DIST, p.alpha, 0);
        stroke(hueBase, 60, 100, a * 0.35);
        strokeWeight(1);
        line(p.x, p.y, q.x, q.y);
      }
    }
  }

  // cursor head
  if (spine.length > 0) {
    noStroke();
    fill(0, 0, 100);
    circle(spine[0].x, spine[0].y, 7);
  }
}

function mouseMoved() {
    lastMoveTime = millis();

  let x = mouseX;
  let y = mouseY;

  if (spine.length > 0) {
    let last = spine[0];
    let d = dist(last.x, last.y, x, y);
    let steps = max(1, floor(d / 8));

    for (let i = 0; i < steps; i++) {
      spine.unshift(makeSpinePoint(
        lerp(last.x, x, i / steps),
        lerp(last.y, y, i / steps)
      ));
    }
  } else {
    spine.unshift(makeSpinePoint(x, y));
  }

  if (spine.length > MAX_SPINE) {
    spine.length = MAX_SPINE;
  }
}

function makeSpinePoint(x, y) {
  let offsets = [];
  for (let i = 0; i < CLOUD_PER_POINT; i++) {
    let angle = random(TWO_PI);
    offsets.push({ x: cos(angle), y: sin(angle) });
  }
  return { x, y, offsets };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
