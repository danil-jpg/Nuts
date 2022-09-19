import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";

window.addEventListener("DOMContentLoaded", () => {
  burger();

  const swiper = new Swiper(".swiper-production", {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    direction: "horizontal",
    // autoHeight: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
  });
});
