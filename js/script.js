'use strict';

// ===== Navbar Toggle ===== //
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

if (navbarNav && navbarToggleBtn) {
  navbarToggleBtn.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
    navbarToggleBtn.classList.toggle('active');
  });

  // Close navbar on link click (for mobile UX)
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navbarNav.classList.remove('active');
      navbarToggleBtn.classList.remove('active');
    });
  });
}

// ===== Swiper Slider ===== //
// Make sure Swiper CSS and JS are included in HTML
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

// ===== Sticky Navbar ===== //
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
  });
}

// ===== Back to Top Button ===== //
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ===== Smooth Scroll ===== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== "#") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});



// ===== Light/Dark Theme Toggle ===== //
const themeToggle = document.querySelector('#theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('active');
  });
}

// ===== Background Starfield (Optional) ===== //
function createStars() {
  const starField = document.querySelector('.star-field');
  if (!starField) return;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starField.appendChild(star);
  }
}
createStars();


document.addEventListener('visibilitychange', function () {
    const favicon = document.getElementById('favicon');
    if (document.visibilityState === "visible") {
      document.title = "Zipline Educational Consultancy Pvt. Ltd.";
      favicon.setAttribute("href", "favicon.png");
    } else {
      document.title = "Come Back To Site";
      favicon.setAttribute("href", "/assets/images/favhand.png");
    }
  });


  function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const icon = document.getElementById("menu-icon");

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  }

