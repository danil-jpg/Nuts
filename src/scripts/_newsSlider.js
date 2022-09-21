import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

function newsSlider() {
  let swiper = new Swiper(`.swiper-news`, {
    spaceBetween: 36,
    slidesPerView: 3,
    centeredSlides: false,
    loop: true,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-news-next",
      prevEl: ".swiper-news-prev",
    },
    modules: [Navigation, Pagination],
  });
}

export default newsSlider;
