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

export default newsSlider;
