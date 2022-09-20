import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";
import cardSlider from "./cardsSlider.js";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage");

  burger();

  if (mainPage) {
    cardSlider();
  }
});
