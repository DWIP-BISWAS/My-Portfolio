"use strict";

// Page Loading Screen
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.createElement("div");
  loader.classList.add("loading-screen");
  loader.innerHTML = `
    <div class="loader">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <p>Loading your experience...</p>
  `;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 1000); // Ensure it's fully removed
  }, 3000); // 3-second loading time
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});
// Input Focus Animation
const formInputs = document.querySelectorAll("[data-form-input]");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("input-focused");
  });

  input.addEventListener("blur", () => {
    input.classList.remove("input-focused");
  });
});
// Smooth Scroll for Navigation Links
const navigationLinks = document.querySelectorAll("[data-nav-link]");
navigationLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(`#${link.getAttribute('data-page')}`);
    
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
