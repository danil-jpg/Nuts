import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    burgerTrigger = document.querySelector(".burger-trigger img"),
    burgerClose = document.querySelector(".burger-menu__close img"),
    burger = document.querySelector(".burger-menu"),
    headerMobile = document.querySelector(".header__mobile");

  burgerTrigger.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerMobile.classList.toggle("disabled");
  });

  burgerClose.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerMobile.classList.toggle("disabled");
  });
});
