import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";
import burger from "./burger.js";

window.addEventListener("DOMContentLoaded", () => {
  burger();

  const prodSliders = document.querySelectorAll(
    ".production__card .swiper-production"
  );

  prodSliders.forEach((item, index) => {
    item.classList.add(`swiper-production_${index}`);

    let swiper = new Swiper(`.swiper-production_${index}`, {
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
  });
});
