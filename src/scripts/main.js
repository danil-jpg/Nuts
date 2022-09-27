import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";
import cardSlider from "./cardsSlider.js";
import newsSlider from "./_newsSlider.js";
import videoSlider from "./_videoSlider.js";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    shopPage = document.querySelector(".shopPage"),
    aboutPage = document.querySelector(".about");

  burger();

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
});
