function burger () {
  const burgerTrigger = document.querySelector('.burger-trigger img')
  const burgerClose = document.querySelector('.burger-menu__close img')
  const burger = document.querySelector('.burger-menu')
  const headerMobile = document.querySelector('.header__mobile')
  const burgerTriggerFooter = document.querySelector('.burger-trigger_footer')
  const burgerFooter = document.querySelectorAll('.footer__link')
  const footerServiceElem = document.querySelector('.footer__nav')

  burgerTrigger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMobile.classList.toggle('disabled')
  })

  burgerClose.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMobile.classList.toggle('disabled')
  })

  burgerTriggerFooter.addEventListener('click', () => {
    burgerFooter.forEach((item) => {
      item.classList.toggle('active')
      footerServiceElem.classList.toggle('active')
    })
  })
}

export default burger
