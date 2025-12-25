/* ======================================================
   MAIN.JS – CLEAN VERSION
   No certification filtering here (handled in certs.js)
====================================================== */

(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let s = select(el, all);
    if (s) {
      all ? s.forEach(e => e.addEventListener(type, listener))
          : s.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /* Navbar active state */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /* Scrollto */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth"
    });
  };

  /* Back to top button */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /* Mobile nav toggle */
  on("click", ".mobile-nav-toggle", function () {
    select('body').classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /* Scrollto behavior */
  on("click", ".scrollto", function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      let body = select('body');
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  /* Scroll with hash on page load */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /* Typed text */
  const typed = select(".typed");
  if (typed) {
    let typedStrings = typed.getAttribute("data-typed-items").split(",");
    new Typed(".typed", {
      strings: typedStrings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }

  /* Skills bar animation */
  const skillsContent = select(".skills-content");
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: "80%",
      handler: () => {
        select(".progress .progress-bar", true).forEach(bar => {
          bar.style.width = bar.getAttribute("aria-valuenow") + "%";
        });
      }
    });
  }

  /* Swiper Sliders */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /* AOS Animation */
  window.addEventListener("load", () => {
    AOS.init({ 
      duration: 1000, 
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /* PureCounter */
  new PureCounter();

})();

/* Lightbox - Initialize after DOM loads */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: ".portfolio-lightbox" });
  }
});