function burger() {
  const burgerTrigger = document.querySelector(".burger-trigger img"),
    burgerClose = document.querySelector(".burger-menu__close img"),
    burger = document.querySelector(".burger-menu"),
    headerMobile = document.querySelector(".header__mobile"),
    burgerTriggerFooter = document.querySelector(".burger-trigger_footer"),
    burgerFooter = document.querySelectorAll(".footer__link"),
    footerServiceElem = document.querySelector(".footer__nav");

  burgerTrigger.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerMobile.classList.toggle("disabled");
  });

  burgerClose.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerMobile.classList.toggle("disabled");
  });

  burgerTriggerFooter.addEventListener("click", () => {
    burgerFooter.forEach((item) => {
      item.classList.toggle("active");
      footerServiceElem.classList.toggle("active");
    });
  });
}

export default burger;
