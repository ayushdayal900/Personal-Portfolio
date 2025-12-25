/* ================================================
   DYNAMIC NOTES GENERATOR
   Compatible with Isotope
================================================= */

const notes = [
  /* ========== IITM Notes ========== */
  { pdf: "assets/pdf/notes/dbms.pdf", category: "filter-n-iitm", title: "IITM - DBMS Notes", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/iitm_mad1.pdf", category: "filter-n-iitm", title: "IITM - MAD1 Notes", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/iitm_mad2.pdf", category: "filter-n-iitm", title: "IITM - MAD2 Notes", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/maths.pdf", category: "filter-n-iitm", title: "IITM - Maths Notes", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/ml_basics.pdf", category: "filter-n-iitm", title: "IITM - ML Basics", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/mlt.pdf", category: "filter-n-iitm", title: "IITM - MLT Notes", img: "assets/icons/iitm.png" },
  { pdf: "assets/pdf/notes/stats.pdf", category: "filter-n-iitm", title: "IITM - Stats Notes", img: "assets/icons/iitm.png" },

  /* ========== Extra Notes ========== */
  { pdf: "assets/pdf/notes/french.pdf", category: "filter-n-extra", title: "French", img: "assets/icons/french.jpg" },
  { pdf: "assets/pdf/notes/MongoDB.pdf", category: "filter-n-extra", title: "MongoDB", img: "assets/icons/mongo.png" },
  { pdf: "assets/pdf/notes/google_aiml_internship.pdf", category: "filter-n-extra", title: "Google AIML Internship", img: "assets/icons/google.png" },
  { pdf: "assets/pdf/notes/java_imp_functions.pdf", category: "filter-n-extra", title: "Java Important Functions", img: "assets/icons/java.png" },
  { pdf: "assets/pdf/notes/Notations_1.pdf", category: "filter-n-extra", title: "Flute Alankars", img: "assets/icons/flute.jpg" }
];

/* ========== RENDER ITEMS ========== */
function loadNotes() {
  const container = document.getElementById("notes-container");
  if (!container) return;
  
  container.innerHTML = "";  

  notes.forEach(item => {
    container.innerHTML += `
      <div class="col-lg-4 col-md-6 notes-item ${item.category}">
        <div class="notes-card">
          <div class="notes-icon">
            <img src="${item.img}" alt="PDF Icon" class="pdf-icon" />
          </div>
          <div class="notes-content">
            <h4>${item.title}</h4>
            <div class="notes-actions">
              <a href="${item.pdf}" target="_blank" class="btn-view">
                <i class="bx bx-show"></i> View
              </a>
              <a href="${item.pdf}" download class="btn-download">
                <i class="bx bx-download"></i> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

/* ========== INIT AFTER DOM LOAD ========== */
document.addEventListener("DOMContentLoaded", () => {
  loadNotes();

  // Wait for items to render, then initialize Isotope
  setTimeout(() => {
    const notesContainer = document.querySelector('#notes .portfolio-container');
    if (notesContainer && typeof Isotope !== 'undefined') {
      const iso = new Isotope(notesContainer, {
        itemSelector: '.notes-item',
        layoutMode: 'fitRows'
      });

      // Set default filter to IITM Notes
      iso.arrange({ filter: '.filter-n-iitm' });

      // Setup filter buttons
      const filterButtons = document.querySelectorAll('#notes-flters li');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          // Remove active class from all
          filterButtons.forEach(b => b.classList.remove('filter-active'));
          // Add active to clicked
          this.classList.add('filter-active');
          
          // Get filter value
          const filterValue = this.getAttribute('data-filter');
          
          // Apply filter
          iso.arrange({ 
            filter: filterValue === '*' ? '*' : filterValue 
          });
        });
      });

      // Set initial active filter
      const initialFilter = document.querySelector('#notes-flters li[data-filter=".filter-n-iitm"]');
      if (initialFilter) {
        initialFilter.classList.add('filter-active');
      }
    }
  }, 150);
});
