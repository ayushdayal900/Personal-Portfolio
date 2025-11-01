/**
* Template Name: iPortfolio
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

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

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  };

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

  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  on('click', '.scrollto', function(e) {
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

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  const typed = select('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  let skillsContent = select('.skills-content');
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  /**
   * Portfolio isotope and filter (Certifications)
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      // Set default filter to IIT Madras
      portfolioIsotope.arrange({ filter: '.filter-iitm' });
      portfolioFilters.forEach(el => el.classList.remove('filter-active'));
      select('#portfolio-flters li[data-filter=".filter-iitm"]').classList.add('filter-active');

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');

        portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh();
        });
      }, true);
    }

    /**
     * Notes isotope and filter (Notes Section)
     */
    let notesContainer = select('#notes .portfolio-container');
    if (notesContainer) {
      let notesIsotope = new Isotope(notesContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let notesFilters = select('#notes-flters li', true);

      // Set default filter to IIT Madras notes
      notesIsotope.arrange({ filter: '.filter-n-iitm' });
      notesFilters.forEach(el => el.classList.remove('filter-active'));
      select('#notes-flters li[data-filter=".filter-n-iitm"]').classList.add('filter-active');

      on('click', '#notes-flters li', function(e) {
        e.preventDefault();
        notesFilters.forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');

        notesIsotope.arrange({ filter: this.getAttribute('data-filter') });
        notesIsotope.on('arrangeComplete', function() {
          AOS.refresh();
        });
      }, true);
    }
  });

  // Initialize GLightbox for both sections
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

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

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  new PureCounter();

})();



// Portfolio/Notes Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all filter buttons in the notes section
  const notesSection = document.querySelector('#notes');
  if (notesSection) {
    const filterButtons = notesSection.querySelectorAll('#portfolio-flters li');
    const portfolioItems = notesSection.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        
        // Add active class to clicked button
        this.classList.add('filter-active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide items based on filter
        portfolioItems.forEach(item => {
          if (filterValue === '*') {
            // Show all items
            item.style.display = 'block';
          } else {
            // Show only matching items
            if (item.classList.contains(filterValue.substring(1))) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }
});






// Portfolio/Notes Filter Functionality for both sections
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to setup filters for a section
  function setupFilters(sectionId, filtersId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const filterButtons = section.querySelectorAll(filtersId + ' li');
      const portfolioItems = section.querySelectorAll('.portfolio-item');

      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons in this section
          filterButtons.forEach(btn => btn.classList.remove('filter-active'));
          
          // Add active class to clicked button
          this.classList.add('filter-active');
          
          // Get filter value
          const filterValue = this.getAttribute('data-filter');
          
          // Show/hide items based on filter
          portfolioItems.forEach(item => {
            if (filterValue === '*') {
              // Show all items
              item.style.display = '';
              item.style.opacity = '1';
            } else {
              // Show only matching items
              if (item.classList.contains(filterValue.substring(1))) {
                item.style.display = '';
                item.style.opacity = '1';
              } else {
                item.style.display = 'none';
                item.style.opacity = '0';
              }
            }
          });
        });
      });
      
      // Trigger click on first filter to show initial state
      if (filterButtons.length > 0) {
        filterButtons[0].click();
      }
    }
  }
  
  // Setup filters for certifications section (uses #portfolio-flters)
  setupFilters('#portfolio', '#portfolio-flters');
  
  // Setup filters for notes section (uses #notes-flters)
  setupFilters('#notes', '#notes-flters');
});




// atomate

