import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

function videoSlider() {
  let swiper = new Swiper(`.swiper-video`, {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-vid-next",
      prevEl: ".swiper-button-vid-prev",
    },
    modules: [Navigation, Pagination],
  });
}

export default videoSlider;
