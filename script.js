"use strict";

// Page Loading Screen
//document.addEventListener("DOMContentLoaded", function () {
//  const loader = document.createElement("div");
// loader.classList.add("loading-screen");
//  loader.innerHTML = `
//   <div class="loader">
//    <span class="dot"></span>
    //  <span class="dot"></span>
  //    <span class="dot"></span>
  //  </div>
 //   <p>Loading your experience...</p>
  //`;
 // document.body.appendChild(loader);

 // setTimeout(() => {
  //  loader.classList.add("hide");
//    setTimeout(() => loader.remove(), 1000); // Ensure it's fully removed
 // }, 3000); // 3-second loading time
//});


//"use strict";

// Preloading Animation
 document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  const blast = document.querySelector(".blast");
  const content = document.querySelector(".content");

  // Start shaking and morphing into a ball after fluid fill
  setTimeout(() => {
    blast.style.animation = "morphToBall 3s ease-in-out forwards, shake 1s infinite ease-in-out";
  }, 7000); // After fluid fill completes

  // Trigger explosion effect
  setTimeout(() => {
    blast.classList.add("blast-away");
  }, 4000); // After morphing completes

  // Reveal homepage
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 4000); // After explosion effect
});
/*
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

  

  // Reveal content
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 7000);
});
                 


/* document.addEventListener("DOMContentLoaded", () => {
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
    ball.style.animation = "morphToBall 3s ease-in-out forwards";
  }, 6000);

  // Trigger Particle.js explosion
  setTimeout(() => {
    ball.classList.add("blast-away");
    const particlesContainer = document.querySelector("#particles-js");
    particlesContainer.style.opacity = 1;
    setTimeout(() => (particlesContainer.style.opacity = 0), 1000); // Fade out particles
  }, 9000);

  // Reveal content
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 11000);
});*/
                          


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
                        
// Chatbot Container
/*
const chatbotContainer = document.createElement('div');
chatbotContainer.style.position = 'fixed';
chatbotContainer.style.bottom = '20px';
chatbotContainer.style.right = '20px';
chatbotContainer.style.width = '300px';
chatbotContainer.style.height = '400px';
chatbotContainer.style.backgroundColor = '#f0f0f0';
chatbotContainer.style.borderRadius = '10px';
chatbotContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
chatbotContainer.style.display = 'flex';
chatbotContainer.style.flexDirection = 'column';
chatbotContainer.innerHTML = `
  <div style="padding: 10px; background: #333; color: #fff; text-align: center;">AI Chatbot</div>
  <div id="chatContent" style="padding: 10px; flex: 1; overflow-y: auto; background-color: #fff;">
    <div>Bot: Hi! How can I help you today?</div>
    <div style="margin-top: 10px;">
      <button class="chat-option" data-value="About">Tell me about Dwip</button>
      <button class="chat-option" data-value="Portfolio">Show me your portfolio</button>
      <button class="chat-option" data-value="Contact">Can't find? Contact Dwip</button>
    </div>
  </div>
  <input type="text" id="chatInput" style="border: 1px solid #ddd; padding: 10px; margin: 10px;" placeholder="Type your message here">
`;

document.body.appendChild(chatbotContainer);

// Chatbot Logic
document.querySelectorAll('.chat-option').forEach((button) => {
  button.addEventListener('click', (e) => {
    const userMessage = e.target.dataset.value;
    addMessageToChat(`You: ${userMessage}`);
    handleBotReply(userMessage);
  });
});

document.getElementById('chatInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = e.target.value;
    addMessageToChat(`You: ${userMessage}`);
    handleBotReply(userMessage);
    e.target.value = '';
  }
});

// Helper Function to Add Messages
function addMessageToChat(message) {
  const chatContent = document.getElementById('chatContent');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  chatContent.appendChild(newMessage);
  chatContent.scrollTop = chatContent.scrollHeight;
}

// Bot Responses
function handleBotReply(userMessage) {
  let botReply;
  if (userMessage === 'About') {
    botReply = 'I am Dwip Biswas, a frontend developer passionate about creating digital experiences!';
  } else if (userMessage === 'Portfolio') {
    botReply = 'You can view my portfolio in the portfolio section of this site.';
  } else if (userMessage === 'Contact') {
    botReply = `
      Please fill out your contact details below:
      <div style="margin-top: 10px;">
        <input type="text" id="userName" placeholder="Your Name" style="margin-bottom: 5px; width: 95%; padding: 5px;">
        <input type="email" id="userEmail" placeholder="Your Email" style="margin-bottom: 5px; width: 95%; padding: 5px;">
        <textarea id="userMessage" placeholder="Your Message" style="width: 95%; padding: 5px;"></textarea>
        <button id="sendMessage">Send Message</button>
      </div>
    `;
  } else {
    botReply = "Sorry, I didn't understand that. Please select an option.";
  }
  addMessageToChat(`Bot: ${botReply}`);

  // Handle Contact Form Submission
  if (userMessage === 'Contact') {
    document.getElementById('sendMessage').addEventListener('click', sendEmail);
  }
}

// Function to Send Email
function sendEmail() {
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const message = document.getElementById('userMessage').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  fetch('https://formsubmit.co/ajax/dwipbiswas22972@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Your message has been sent successfully!');
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userMessage').value = '';
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    });
          }



// Hover Animation using GSAP
document.querySelectorAll('.service-item').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, { scale: 1.1, duration: 0.3 });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(item, { scale: 1, duration: 0.3 });
  });
});*/
      // Konami Code Easter Egg
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      alert('Easter Egg Activated!');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});
// Custom Cursor
/*
const cursor = document.createElement('div');
cursor.style.width = cursor.style.height = '20px';
cursor.style.border = '2px solid #000';
cursor.style.borderRadius = '50%';
cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
cursor.style.transition = 'transform 0.1s ease-out';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Hover Effect
document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mouseover', () => {
    cursor.style.transform = 'scale(1.5)';
    cursor.style.backgroundColor = '#000';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = 'transparent';
  });
});*/
      // Add GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.from('.main-content', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.main-content',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
});

// Smooth Scrolling
gsap.to(window, {
  scrollTo: { y: 'max', autoKill: false },
  duration: 2,
  ease: 'power4.inOut',
});
    
// Particle Trail
const canvas = document.createElement("canvas");
canvas.id = "particle-trail";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let particles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousemove", (e) => {
  particles.push({ x: e.clientX, y: e.clientY, size: 5 });
});

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fill();
    p.size -= 0.1;
    if (p.size <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
      const phrases = ["Frontend Developer", "Web Designer", "Creative Coder"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const element = document.querySelector(".dynamic-text");
  const currentPhrase = phrases[i];
  element.textContent = isDeleting 
    ? currentPhrase.substring(0, j--) 
    : currentPhrase.substring(0, j++);

  if (!isDeleting && j === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 50 : 150);
}
type();
    
