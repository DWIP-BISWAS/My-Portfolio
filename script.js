//"use strict";

// Page Loading Screen
//document.addEventListener("DOMContentLoaded", function () {
  //const loader = document.createElement("div");
 // loader.classList.add("loading-screen");
 // loader.innerHTML = `
  //  <div class="loader">
  //    <span class="dot"></span>
   //   <span class="dot"></span>
  //    <span class="dot"></span>
 //   </div>
//    <p>Loading your experience...</p>
 // `;
 // document.body.appendChild(loader);

 // setTimeout(() => {
  //  loader.classList.add("hide");
//    setTimeout(() => loader.remove(), 1000); // Ensure it's fully removed
 // }, 3000); // 3-second loading time
//});


"use strict";

// Preloading Animation
/* document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  const blast = document.querySelector(".blast");
  const content = document.querySelector(".content");

  // Start shaking and morphing into a ball after fluid fill
  setTimeout(() => {
    blast.style.animation = "morphToBall 3s ease-in-out forwards, shake 1s infinite ease-in-out";
  }, 6000); // After fluid fill completes

  // Trigger explosion effect
  setTimeout(() => {
    blast.classList.add("blast-away");
  }, 9000); // After morphing completes

  // Reveal homepage
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 10000); // After explosion effect
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const ball = document.querySelector(".ball");
  const content = document.querySelector(".content");

  // Initialize Particle.js for the explosion effect
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 300,
      },
      color: {
        value: ["#ffffff", "#ffcc00", "#ff6600", "#00ccff"],
      },
      shape: {
        type: ["circle", "edge", "polygon"],
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 8,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: {
          enable: false,
        },
      },
    },
    retina_detect: true,
  });

  // Morph letters into a ball after text animation
  setTimeout(() => {
    ball.style.animation = "morphToBall 5s ease-in-out forwards";
  }, 8000);

  // Trigger Particle.js explosion
  setTimeout(() => {
    ball.classList.add("blast-away");
    const particlesContainer = document.querySelector("#particles-js");
    particlesContainer.style.opacity = 1;
    setTimeout(() => (particlesContainer.style.opacity = 0), 1000); // Fade out particles
  }, 13000);

  // Reveal content
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 15000);
});
                          
 
// Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    link.classList.add("active");
    pages[index].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Modal Functionality (for testimonials)
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

testimonialsItems.forEach((item) => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalTitle.textContent = item.querySelector("[data-testimonials-title]").textContent;
    modalText.textContent = item.querySelector("[data-testimonials-text]").textContent;

    modalContainer.classList.add("active");
    overlay.classList.add("active");
  });
});

modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
}

// Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Smooth Animations for Content Appearance
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".content-card, .service-item, .testimonials-item").forEach((item) => {
  observer.observe(item);
});

// Responsive Adjustments for Low-Memory Devices
const handleResize = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    sidebar.classList.remove("active"); // Ensure sidebar is closed on small screens
  }
};

window.addEventListener("resize", handleResize);
handleResize(); // Initialize on page load


// Scroll to Top Button
const scrollTopButton = document.createElement("button");
scrollTopButton.classList.add("scroll-top-button");
scrollTopButton.innerHTML = "↑";

document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Keep the button visible always
scrollTopButton.classList.add("visible");
                        
