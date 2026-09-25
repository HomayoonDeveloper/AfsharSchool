/*=========================================
            NAVBAR
=========================================*/

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

const mobileLinks = mobileMenu.querySelectorAll("a");

/*=========================
        MENU
==========================*/

function openMenu() {
  mobileMenu.classList.add("open");

  menuBtn.classList.add("active");

  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.classList.remove("open");

  menuBtn.classList.remove("active");

  document.body.classList.remove("menu-open");
}

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeBtn?.addEventListener("click", closeMenu);

/*=========================
    CLOSE ON LINK CLICK
==========================*/

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

/*=========================
    CLICK OUTSIDE
==========================*/

document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("open") &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

/*=========================
        ESC KEY
==========================*/

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

/*=========================
        SCROLL
==========================*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// ===============================
// Custom Image Carousel
// ===============================

const images = ["./assets/images/slider/1.jpg", "./assets/images/slider/2.jpg"];

const carouselImage = document.getElementById("carousel-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

// این بخش فقط در صفحاتی که اسلایدر خبری دارند (مثل صفحه اصلی) اجرا می‌شود
if (dotsContainer && carouselImage && nextBtn && prevBtn) {
  // Create dots

  images.forEach((image, index) => {
    const dot = document.createElement("button");

    dot.className = "w-3 h-3 rounded-full bg-white/60 transition duration-300";

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });

    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll("button");

  // Update Image

  var updateCarousel = function () {
    carouselImage.classList.add("opacity-0");

    setTimeout(() => {
      carouselImage.src = images[currentIndex];

      carouselImage.classList.remove("opacity-0");
    }, 300);

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("bg-blue-600", "scale-125");

        dot.classList.remove("bg-white/60");
      } else {
        dot.classList.remove("bg-blue-600", "scale-125");

        dot.classList.add("bg-white/60");
      }
    });
  };

  // Next

  nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    updateCarousel();
  });

  // Previous

  prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    updateCarousel();
  });

  // Auto Play

  setInterval(() => {
    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    updateCarousel();
  }, 4000);

  // First Load

  updateCarousel();
}

