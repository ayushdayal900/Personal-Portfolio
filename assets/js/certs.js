/* ================================================
   DYNAMIC CERTIFICATIONS GENERATOR
   Compatible with Isotope + GLightbox + AOS
================================================= */

const certifications = [
  /* ========== IIT Madras ========== */
  { img: "assets/img/portfolio/IITM/General/foundation.png", category: "filter-iitm", title: "IITM - Foundation" },
  { img: "assets/img/portfolio/IITM/General/Diploma_in_Programming.png", category: "filter-iitm", title: "IITM - Diploma In Programming" },
  { img: "assets/img/portfolio/IITM/General/appdev.png", category: "filter-iitm", title: "IITM - App Development" },

  { img: "assets/img/portfolio/IITM/workshops/Dynamic_programming.png", category: "filter-iitm", title: "Dynamic Programming" },
  { img: "assets/img/portfolio/IITM/workshops/Introduction_to_Deploy_ML_Apps_at_Lightning_Speed_using_GCP.png", category: "filter-iitm", title: "GCP ML Apps" },
  { img: "assets/img/portfolio/IITM/workshops/Git_Github.png", category: "filter-iitm", title: "Git & GitHub" },
  { img: "assets/img/portfolio/IITM/workshops/Transformers.png", category: "filter-iitm", title: "Transformers Workshop" },
  { img: "assets/img/portfolio/IITM/workshops/Data_Visualization_Matplotlib_and_Seaborn.png", category: "filter-iitm", title: "Data Visualization by Matplotlib and Seaborn Workshop" },
  { img: "assets/img/portfolio/IITM/workshops/mlt.png", category: "filter-iitm", title: "Machine Learning Techniques Workshop" },
  { img: "assets/img/portfolio/IITM/workshops/Maths_Foundation_of_ML.png", category: "filter-iitm", title: "Mathematical Foundation of Machine Learning Workshop" },
  { img: "assets/img/portfolio/IITM/workshops/Introduction_to_HuggingFace_and_HuggingFace_Spaces.png", category: "filter-iitm", title: "Introduction to HuggingFace and HuggingFace_Spaces" },
  { img: "assets/img/portfolio/IITM/workshops/Making_Interactive_Dashboards_with_Power_BI.png", category: "filter-iitm", title: "Making Interactive Dashboards with Power BI" },

  /* ========== Internships ========== */
  { img: "assets/img/portfolio/Internships/AICTE/aws/Ayush_Prashant_Dayal_aws_internship.png", category: "filter-internships", title: "AWS Internship" },
  { img: "assets/img/portfolio/Internships/AICTE/Python/Aicte - Python Full Stack.png", category: "filter-internships", title: "Python Full Stack" },
  { img: "assets/img/portfolio/Internships/AICTE/Google/Ayush Google AIML Internship Cert.png", category: "filter-internships", title: "Google AI/ML Internship" },
  { img: "assets/img/portfolio/Internships/Brainwave/Brainwave_internship_cert.png", category: "filter-internships", title: "Brainwave Internship" },
  { img: "assets/img/portfolio/Internships/AICTE/aws/aws-cloud-arch.png", category: "filter-internships", title: "AWS Cloud Architect" },
  { img: "assets/img/portfolio/Internships/AICTE/aws/aws-foundation.png", category: "filter-internships", title: "AWS Foundation" },

  /* ========== Microsoft ========== */
  { img: "assets/img/portfolio/ms/ai-900.png", category: "filter-ms", title: "Microsoft AI-900" },
  { img: "assets/img/portfolio/ms/az-900.png", category: "filter-ms", title: "Microsoft AZ-900" },
  { img: "assets/img/portfolio/ms/dp-900.png", category: "filter-ms", title: "Microsoft DP-900" },
  { img: "assets/img/portfolio/ms/sc-900.png", category: "filter-ms", title: "Microsoft SC-900" },

  /* ========== Oracle OCI ========== */
  { img: "assets/img/portfolio/oci/oci-ai.png", category: "filter-oci", title: "OCI AI" },
  { img: "assets/img/portfolio/oci/oci-ds.png", category: "filter-oci", title: "OCI Data Science" },
  { img: "assets/img/portfolio/oci/oci-foundation-associate.png", category: "filter-oci", title: "OCI Foundation Associate" },
  { img: "assets/img/portfolio/oci/oci-gen-ai-prof.png", category: "filter-oci", title: "Gen AI Professional" },
  { img: "assets/img/portfolio/oci/oci-ai_vector_search.png", category: "filter-oci", title: "Vector Search" },

  /* ========== Hackathons ========== */
  { img: "assets/img/portfolio/Hackathons/pict_inc.png", category: "filter-hackathon", title: "PICT Inc Hackathon" },
  { img: "assets/img/portfolio/Hackathons/gfg.png", category: "filter-hackathon", title: "GFG Hackathon" },

  /* ========== CCNA ========== */
  { img: "assets/img/portfolio/ccna/ccna_modeule_1.png", category: "filter-ccna", title: "CCNA Module 1" },
  { img: "assets/img/portfolio/ccna/ccna badge 2.png", category: "filter-ccna", title: "CCNA Badge" },
  { img: "assets/img/portfolio/ccna/ccna_cybersecurity.png", category: "filter-ccna", title: "CCNA Cybersecurity" },

  /* ========== Others ========== */
  { img: "assets/img/portfolio/other/Postman/postman_cert.png", category: "filter-mix", title: "Postman" },
  { img: "assets/img/portfolio/other/Leaps/basic_ML.png", category: "filter-mix", title: "Basic ML" },
  { img: "assets/img/portfolio/other/Hackerrank/SQL_Basics.jpeg", category: "filter-mix", title: "SQL Basics" },
  { img: "assets/img/portfolio/other/Hackerrank/SQL_Adv.jpeg", category: "filter-mix", title: "SQL Advanced" },
  { img: "assets/img/portfolio/other/udemy/Excel.png", category: "filter-mix", title: "Excel Udemy" },
  { img: "assets/img/portfolio/other/udemy/fdsJava.png", category: "filter-mix", title: "Java FDS" },
  { img: "assets/img/portfolio/other/udemy/Information_Security.png", category: "filter-mix", title: "Information Security" },
  { img: "assets/img/portfolio/other/udemy/java.png", category: "filter-mix", title: "Java Udemy" },
  { img: "assets/img/portfolio/other/udemy/ml_dl_in_py_and_r.png", category: "filter-mix", title: "ML/DL Python & R" },
  { img: "assets/img/portfolio/other/udemy/udemy-cpp.png", category: "filter-mix", title: "C++ Udemy" },
  { img: "assets/img/portfolio/other/extra/blood_donation.jpeg", category: "filter-mix", title: "Blood Donation" }
];

/* ========== RENDER ITEMS ========== */
function loadCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;
  
  container.innerHTML = "";  

  certifications.forEach(item => {
    container.innerHTML += `
<div class="col-lg-4 col-md-6 portfolio-item ${item.category}">
  <div class="portfolio-wrap"
       style="
         background:#ffffff;
         border-radius:12px;
         overflow:hidden;
         box-shadow:0 10px 30px rgba(0,0,0,0.08);
         transition:all 0.3s ease;
       "
       onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 18px 40px rgba(0,0,0,0.15)'"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.08)'">

    <!-- Title -->
    <div style="
         padding:12px;
         text-align:center;
         font-weight:600;
         font-size:15px;
         background:#f8f9fa;
         color:#012970;
         border-bottom:1px solid #eaeaea;
       ">
      ${item.title}
    </div>

    <!-- Image -->
    <img src="${item.img}"
         class="img-fluid"
         alt="${item.title}"
         style="padding:12px;" />

    <!-- Zoom Button (UNCHANGED) -->
    <div class="portfolio-links">
      <a href="${item.img}"
         data-gallery="portfolioGallery"
         class="portfolio-lightbox"
         title="${item.title}">
        <i class="bx bx-search-alt"></i>
      </a>
    </div>

  </div>
</div>
    `;
  });
}

/* ========== INIT AFTER DOM LOAD ========== */
document.addEventListener("DOMContentLoaded", () => {
  loadCertifications();

  // Wait for items to render, then initialize Isotope
  setTimeout(() => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer && typeof Isotope !== 'undefined') {
      const iso = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      // Set default filter to IIT Madras
      iso.arrange({ filter: '.filter-iitm' });

      // Setup filter buttons
      const filterButtons = document.querySelectorAll('#portfolio-flters li');
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

          // Refresh AOS after filter
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        });
      });

      // Set initial active filter
      const initialFilter = document.querySelector('#portfolio-flters li[data-filter=".filter-iitm"]');
      if (initialFilter) {
        initialFilter.classList.add('filter-active');
      }
    }

    // Reinitialize GLightbox for new items
    if (typeof GLightbox !== "undefined") {
      GLightbox({ selector: ".portfolio-lightbox" });
    }

    // Refresh animations
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, 100);
});