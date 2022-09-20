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

  const prodSliders = document.querySelectorAll(
      ".production__card .swiper-production"
    ),
    prodSlidersNext = document.querySelectorAll(".swiper-button-next"),
    prodSlidersPrev = document.querySelectorAll(".swiper-button-prev");

  // prodSliders.forEach((item, index) => {
  //   item.classList.add(`swiper-production_${index}`);
  //   console.log(item);
  //   let swiper = new Swiper(`.swiper-production_${index}`, {
  //     slidesPerView: 1,
  //     centeredSlides: false,
  //     loop: true,
  //     direction: "horizontal",
  //     // autoHeight: "true",
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     modules: [Navigation, Pagination],
  //   });
  // });
});
