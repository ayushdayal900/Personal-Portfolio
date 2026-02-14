
// Array to store mouse trail points (main backbone).
let spine = [];

// Array to store small dots generated around the trail.
let particles = [];

// Maximum number of trail points allowed.
const MAX_SPINE = 50;

// Number of particles created per trail point.
const CLOUD_PER_POINT = 1;

// Maximum distance to draw a line between particles.
const LINK_DIST = 50;

// Base color hue (purple/pink).
let hueBase = 300;

// Stores last time mouse moved (used to fade trail).
let lastMoveTime = 0;

// Runs once at the start.
function setup() {

  // Creates full-screen canvas.
  let c = createCanvas(windowWidth, windowHeight);

  // Places canvas at top-left.
  c.position(0, 0);

  // Sets the color system to HSB, allowing smooth control over 
  // hue, saturation, brightness, and transparency for glowing visual effects.
  colorMode(HSB, 360, 100, 100, 255);

  // Sets the ends of lines to be rounded,  giving smoother and more natural-looking strokes.
  strokeCap(ROUND);
}

// Runs every frame (animation loop).
function draw() {

  // Clears previous frame (transparent background).
  clear();

    // Calculates how long mouse has not moved.
      // Returns the number of milliseconds since the sketch started, used here to track time and detect mouse inactivity.
    let idleTime = millis() - lastMoveTime;

    // start fading after short idle time and mouse pointer is moved
    if (idleTime > 40 && spine.length > 0) {

        // Converts idle time into how fast trail disappears.

        //idleTime → the value being converted (how long the mouse is inactive)

        // 40 → minimum input value (start fading after 40 ms)

        // 300 → maximum input value (maximum idle time considered)

        // 1 → minimum output value (slow trail decay)

        // 4 → maximum output value (fast trail decay)

        // true → constrains the output so it stays between 1 and 4

      let decayRate = map(idleTime, 40, 300, 1, 4, true);

      // removes decayRate number of elements from the end of the spine array
      spine.splice(-decayRate);
    }

  // Clears old particles.
  particles = [];

  // i will create a for loop converts each mouse trail point into visual particles, 
  // making older points spread wider and fade out to create a smooth glowing trail effect.

  for (let i = 0; i < spine.length; i++) {

    // Current trail point.
    let p = spine[i];

    // Older points spread more outward.

    // i → current index of the trail point
    // 0 → newest trail point (start of the trail)
    // spine.length → oldest trail point (end of the trail)
    // 2 → minimum spread (particles stay close to the mouse)
    // 38 → maximum spread (older particles spread farther out)
    let spread = map(i, 0, spine.length, 2, 38);

    // Older points become more transparent.
    let alpha = map(i, 0, spine.length, 220, 25);

    // Loop to create particles.
    for (let k = 0; k < CLOUD_PER_POINT; k++) {

      // Direction offset for particle.
      let offset = spine[i].offsets[k];

      // Add particle to array.
      particles.push({
        x: p.x + offset.x * spread,
        y: p.y + offset.y * spread,
        alpha
      });
    }
  }

  // draw sparse network
  for (let i = 0; i < particles.length; i++) {

    // Current particle.
    let p = particles[i];o

    // Set particle color.
    fill(hueBase, 70, 100, p.alpha);

    // Draw small dot.
    circle(p.x, p.y, 2);

    // Check nearby particles.
    for (let j = i + 1; j < particles.length; j++) {

      // Second particle.
      let q = particles[j];

      // Distance between particles.
      let d = dist(p.x, p.y, q.x, q.y);
      
      // If close enough.
      if (d < LINK_DIST) {

        // Line fades with distance.
        let a = map(d, 0, LINK_DIST, p.alpha, 0);

        // Set line color.
        stroke(hueBase, 60, 100, a * 0.35);

        // drwing line
        strokeWeight(1);
        line(p.x, p.y, q.x, q.y);
      }
    }
  }

  // If trail exists.
  if (spine.length > 0) {
    noStroke();
    fill(0, 0, 100);
    circle(spine[0].x, spine[0].y, 7);
  }

}


// Runs whenever mouse moves.
function mouseMoved() {

  // Update last movement time.
  lastMoveTime = millis();

  // Current mouse position.
  let x = mouseX;
  let y = mouseY;

  // If trail exists.
  if (spine.length > 0) {

    // Most recent trail point.
    let last = spine[0];

    // Distance moved.
    let d = dist(last.x, last.y, x, y);

    // Number of points to add smoothly.
    let steps = max(1, floor(d / 8));

    // Add interpolated points.
    for (let i = 0; i < steps; i++) {

      // Add new trail point at front.
      spine.unshift(makeSpinePoint(

        // Smooth x and y movement.
        lerp(last.x, x, i / steps),
        lerp(last.y, y, i / steps)
      ));
    }
  } 
  // Add initial point.
  else {
    spine.unshift(makeSpinePoint(x, y));
  }

  // If trail too long.Trim down trail.
  if (spine.length > MAX_SPINE) {
    spine.length = MAX_SPINE;
  }
}


// Creates a trail point.
function makeSpinePoint(x, y) {

  // Stores particle directions.
  let offsets = [];

  // Create offsets.
  for (let i = 0; i < CLOUD_PER_POINT; i++) {
    let angle = random(TWO_PI);
    offsets.push({ x: cos(angle), y: sin(angle) });
  }
  // Unit direction vector.
  return { x, y, offsets };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
