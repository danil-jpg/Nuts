function headerPop () {
  const popUp = document.querySelector('.pop-up')
  const popUpMob = document.querySelectorAll('.pop-up')[1]
  const bag = document.querySelector('.header__basket')
  const mobBag = document.querySelector('.header__bag-mobile')
  const burger = document.querySelector('.burger-menu')

  bag.addEventListener('click', (e) => {
    popUp.classList.toggle('active')
  })

  mobBag.addEventListener('click', (e) => {
    popUpMob.classList.toggle('active')
  })
}

export default headerPop
