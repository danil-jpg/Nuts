import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";
import cardSlider from "./cardsSlider.js";
import newsSlider from "./_newsSlider.js";
import videoSlider from "./_videoSlider.js";
window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    shopPage = document.querySelector(".shopPage"),
    aboutPage = document.querySelector(".about"),
    newsAndArticlesPage = document.querySelector(".newsAndArticlesPage"),
    itemInfoPage = document.querySelector(".itemPage");

  if (mainPage) {
    cardSlider();
    newsSlider();
    videoSlider();
  }
  if (shopPage) {
    cardSlider();
    videoSlider();
  }

  if (aboutPage) {
    newsSlider();
    videoSlider();
  }
  if (newsAndArticlesPage) {
    let swiper = new Swiper(`.swiper-news`, {
      spaceBetween: 32,
      slidesPerView: 3,
      centeredSlides: false,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-news-next",
        prevEl: ".swiper-news-prev",
      },
      modules: [Navigation, Pagination],
      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
      },
    });
  }

  if (itemInfoPage) {
    let swiper = new Swiper(".item-info__card .swiper-production", {
      slidesPerView: 1,
      centeredSlides: false,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Navigation, Pagination],
    });
  }

  // burger();
});
