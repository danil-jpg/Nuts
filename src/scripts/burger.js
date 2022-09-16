function burger() {
  const burgerTrigger = document.querySelector(".burger-trigger img"),
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
}

export default burger;
