// For navbar responsiveness
const navbarToggleButton = document.getElementById("navbar-toggle");
const navbarLinksWrapper = document.querySelector(".navbar-links-wrapper");

navbarToggleButton.addEventListener("click", () => {
  navbarLinksWrapper.classList.toggle("opened");
});

// For navbar sticky-ness

const navbarWrapper = document.querySelector(".navbar-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 320) {
    navbarWrapper.classList.add("scrolled");
  } else {
    navbarWrapper.classList.remove("scrolled");
  }
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tabName) {
  tabButtons.forEach((item) => {
    if (item.dataset.tab === tabName) {
      item.dataset.active = "true";
    } else {
      item.dataset.active = "false";
    }
  });

  tabContents.forEach((item) => {
    if (item.dataset.tab === tabName) {
      item.dataset.active = "true";
    } else {
      item.dataset.active = "false";
    }
  });
}

tabButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const clickedTab = item.dataset.tab;
    activateTab(clickedTab);
  });
});

// Accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordionItem) => {
  const accordionButton = accordionItem.querySelector(".accordion-title");

  accordionButton.addEventListener("click", () => {
    const isActive = accordionItem.dataset.active === "true";

    if (isActive) accordionItem.dataset.active = "false";
    else accordionItem.dataset.active = "true";
  });
});

// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 32,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});
