document.addEventListener("DOMContentLoaded", () => {
  const headerBottom = document.querySelector(".header__bottom");
  const headerBottomOffset = headerBottom.offsetTop;

  const isDesktop = () => window.innerWidth > 1200;

  const onScroll = () => {
    if (!isDesktop()) {
      headerBottom.classList.remove("fixed");
      return;
    }

    if (window.pageYOffset >= headerBottomOffset) {
      headerBottom.classList.add("fixed");
    } else {
      headerBottom.classList.remove("fixed");
    }
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", () => {
    onScroll();
  });
});

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__bottom");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

const openButtons = document.querySelectorAll(".popup-open-btn");

const popups = document.querySelectorAll(".popup");

openButtons.forEach((button) => {
  button.onclick = function () {
    popups.forEach((p) => {
      p.classList.add("show");
    });
  };
});

const closeButtons = document.querySelectorAll(".close-btn");

closeButtons.forEach((btn) => {
  btn.onclick = function () {
    document.querySelectorAll(".popup").forEach((p) => {
      p.classList.remove("show");
    });
  };
});

document.querySelectorAll(".popup").forEach((popup) => {
  popup.onclick = function (event) {
    if (event.target === popup) {
      popup.classList.remove("show");
    }
  };
});

const complexity__mobile__swiper = new Swiper(".complexity-mobile-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
  breakpoints: {
    759: {
      slidesPerView: 2,
      initialSlide: 1,
    },
  },
});

const industry__mobile__swiper = new Swiper(".industry-mobile-swiper", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const protection__mobile__swiper = new Swiper(".protection-mobile-swiper", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const accounting__cards__mobile = new Swiper(".accounting-cards-mobile", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const swiper__protection__mobile = new Swiper(".swiper-protection-mobile", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const swiper__protection__mobile__control = new Swiper(".swiper-protection-mobile-control", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const controls__swiper__mobile = new Swiper(".controls-swiper-mobile", {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
});

const swiper_controls = new Swiper(".swiper-controls", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper__documents = new Swiper(".swiper-documents", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slidesPerView: 1,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    759: {
      slidesPerView: 4,
      initialSlide: 1,
    },
  },
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");

    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector(`.tab-content[data-content="${target}"]`).classList.add("active");
  });
});

$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
});

$(document).ready(function () {
  $(".popup-achievements").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
});
