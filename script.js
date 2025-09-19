// === DARK/LIGHT MODE TOGGLE ===
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  toggleBtn.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// === HERO TYPING ANIMATION ===
const slogan = "Fashion Redefined";
const sloganElement = document.querySelector(".type-animation");
let i = 0;

function typeSlogan() {
  if (i < slogan.length) {
    sloganElement.textContent += slogan.charAt(i);
    i++;
    setTimeout(typeSlogan, 100);
  } else {
    setTimeout(() => {
      sloganElement.textContent = "";
      i = 0;
      typeSlogan();
    }, 2000);
  }
}
typeSlogan();

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);

// === HEADER SCROLL EFFECT ===
const header = document.querySelector(".sticky-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// === FORM VALIDATION ===
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contactForm.querySelector("#name").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const message = contactForm.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }
  alert("Message sent successfully! (Simulated)");
  contactForm.reset();
});

// === NEWSLETTER FORM ===
const newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector("input[type='email']").value.trim();
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }
  alert("Subscribed successfully! (Simulated)");
  newsletterForm.reset();
});

// === GALLERY LIGHTBOX (SIMPLE) ===
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("shop-btn")) return;
    const imgSrc = item.querySelector("img").src;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${imgSrc}" alt="Enlarged image">
        <button class="close-lightbox">✕</button>
      </div>
    `;
    document.body.appendChild(lightbox);
    lightbox.querySelector(".close-lightbox").addEventListener("click", () => {
      lightbox.remove();
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.remove();
    });
  });
});

// === ADVERTS CAROUSEL AUTO-SCROLL ===
const carousel = document.querySelector(".ad-carousel");
let scrollAmount = 0;
const scrollSpeed = 1;

function autoScroll() {
  scrollAmount += scrollSpeed;
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }
  carousel.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}
requestAnimationFrame(autoScroll);