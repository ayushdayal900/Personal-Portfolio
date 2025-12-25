/**
 * assets/js/portfolio.js
 *
 * This file is OPTIONAL - only use if you prefer this structure
 * Otherwise, use certs.js which has the same functionality
 */

const portfolioItems = [
  // IITM
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/General/foundation.png", title: "IITM - Foundation" },
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/General/appdev.png", title: "IITM - App Dev" },
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/workshops/Dynamic_programming.png", title: "IITM - Dynamic Programming" },
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/workshops/Introduction_to_Deploy_ML_Apps_at_Lightning_Speed_using_GCP.png", title: "IITM - Deploy ML Apps on GCP" },
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/workshops/Git_Github.png", title: "IITM - Git & Github" },
  { category: "filter-iitm", img: "assets/img/portfolio/IITM/workshops/Transformers.png", title: "IITM - Transformers" },

  // Internships
  { category: "filter-internships", img: "assets/img/portfolio/Internships/AICTE/aws/Ayush_Prashant_Dayal_aws_internship.png", title: "AWS Internship" },
  { category: "filter-internships", img: "assets/img/portfolio/Internships/AICTE/Python/Aicte - Python Full Stack.png", title: "AICTE - Python Full Stack" },
  { category: "filter-internships", img: "assets/img/portfolio/Internships/AICTE/Google/Ayush Google AIML Internship Cert.png", title: "Google AI/ML Internship" },
  { category: "filter-internships", img: "assets/img/portfolio/Internships/Brainwave/Brainwave_internship_cert.png", title: "Brainwave Internship" },
  { category: "filter-internships", img: "assets/img/portfolio/Internships/AICTE/aws/aws-cloud-arch.png", title: "AWS Cloud Architect" },
  { category: "filter-internships", img: "assets/img/portfolio/Internships/AICTE/aws/aws-foundation.png", title: "AWS Foundation" },

  // Microsoft
  { category: "filter-ms", img: "assets/img/portfolio/ms/ai-900.png", title: "Microsoft AI-900" },
  { category: "filter-ms", img: "assets/img/portfolio/ms/az-900.png", title: "Microsoft AZ-900" },
  { category: "filter-ms", img: "assets/img/portfolio/ms/dp-900.png", title: "Microsoft DP-900" },
  { category: "filter-ms", img: "assets/img/portfolio/ms/sc-900.png", title: "Microsoft SC-900" },

  // OCI / Oracle
  { category: "filter-oci", img: "assets/img/portfolio/oci/oci-ai.png", title: "OCI AI" },
  { category: "filter-oci", img: "assets/img/portfolio/oci/oci-ds.png", title: "OCI Data Science" },
  { category: "filter-oci", img: "assets/img/portfolio/oci/oci-foundation-associate.png", title: "OCI Foundation" },
  { category: "filter-oci", img: "assets/img/portfolio/oci/oci-gen-ai-prof.png", title: "OCI Gen AI" },
  { category: "filter-oci", img: "assets/img/portfolio/oci/oci-ai_vector_search.png", title: "OCI Vector Search" },

  // Hackathons
  { category: "filter-hackathon", img: "assets/img/portfolio/Hackathons/pict_inc.png", title: "Pict Inc Hackathon" },
  { category: "filter-hackathon", img: "assets/img/portfolio/Hackathons/gfg.png", title: "GFG Hackathon" },

  // CCNA / Networking
  { category: "filter-ccna", img: "assets/img/portfolio/ccna/ccna_modeule_1.png", title: "CCNA Module 1" },
  { category: "filter-ccna", img: "assets/img/portfolio/ccna/ccna badge 2.png", title: "CCNA Badge" },
  { category: "filter-ccna", img: "assets/img/portfolio/ccna/ccna_cybersecurity.png", title: "CCNA Cybersecurity" },

  // Mix / Others
  { category: "filter-mix", img: "assets/img/portfolio/other/Postman/postman_cert.png", title: "Postman Certificate" },
  { category: "filter-mix", img: "assets/img/portfolio/other/Leaps/basic_ML.png", title: "LEAPS - Basic ML" },
  { category: "filter-mix", img: "assets/img/portfolio/other/Hackerrank/SQL_Basics.jpeg", title: "HackerRank - SQL Basics" },
  { category: "filter-mix", img: "assets/img/portfolio/other/Hackerrank/SQL_Adv.jpeg", title: "HackerRank - SQL Advanced" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/Excel.png", title: "Udemy - Excel" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/fdsJava.png", title: "Udemy - FDS Java" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/Information_Security.png", title: "Udemy - Information Security" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/java.png", title: "Udemy - Java" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/ml_dl_in_py_and_r.png", title: "Udemy - ML/DL" },
  { category: "filter-mix", img: "assets/img/portfolio/other/udemy/udemy-cpp.png", title: "Udemy - C++" },
  { category: "filter-mix", img: "assets/img/portfolio/other/unstop/Basic Coding in C.png", title: "Unstop - Basic C" },
  { category: "filter-mix", img: "assets/img/portfolio/other/linkedin/Linkedin_Operational Excellence Foundations.png", title: "LinkedIn - Operational Excellence" }
];

function renderPortfolio(items) {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  const frag = document.createDocumentFragment();

  items.forEach(item => {
    const col = document.createElement("div");
    col.className = `col-lg-4 col-md-6 portfolio-item ${item.category}`;

    const wrap = document.createElement("div");
    wrap.className = "portfolio-wrap";

    const img = document.createElement("img");
    img.className = "img-fluid";
    img.src = item.img;
    img.alt = item.title || "";

    const links = document.createElement("div");
    links.className = "portfolio-links";

    const a = document.createElement("a");
    a.href = item.img;
    a.setAttribute("data-gallery", "portfolioGallery");
    a.className = "portfolio-lightbox";
    a.title = item.title || "";

    const icon = document.createElement("i");
    icon.className = "bx bx-search-alt";

    a.appendChild(icon);
    links.appendChild(a);
    wrap.appendChild(img);
    wrap.appendChild(links);
    col.appendChild(wrap);
    frag.appendChild(col);
  });

  container.innerHTML = "";
  container.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", function () {
  renderPortfolio(portfolioItems);

  setTimeout(() => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer && typeof Isotope !== 'undefined') {
      const iso = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      iso.arrange({ filter: '.filter-iitm' });

      const filterButtons = document.querySelectorAll('#portfolio-flters li');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          filterButtons.forEach(b => b.classList.remove('filter-active'));
          this.classList.add('filter-active');
          
          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue === '*' ? '*' : filterValue });

          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        });
      });

      const initialFilter = document.querySelector('#portfolio-flters li[data-filter=".filter-iitm"]');
      if (initialFilter) {
        initialFilter.classList.add('filter-active');
      }
    }

    if (typeof GLightbox !== "undefined") {
      GLightbox({ selector: ".portfolio-lightbox" });
    }
  }, 100);
});