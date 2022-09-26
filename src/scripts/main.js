import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";
import cardSlider from "./cardsSlider.js";
import newsSlider from "./_newsSlider.js";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    shopPage = document.querySelector(".shopPage"),
    aboutPage = document.querySelector(".about");

  burger();

  if (mainPage) {
    cardSlider();
    newsSlider();
  }
  if (shopPage) {
    cardSlider();
  }

  if (aboutPage) {
    newsSlider();
  }
});
