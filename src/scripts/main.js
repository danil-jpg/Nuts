import slider from './_swiper.js'
import Swiper, { Navigation, Pagination } from 'swiper'
import burger from './burger.js'
import cardSlider from './cardsSlider.js'
import newsSlider from './_newsSlider.js'
import videoSlider from './_videoSlider.js'
import headerPop from './_headerPopUp.js'
import regTab from './registration.js'
import option from './catalog.js'

window.addEventListener('DOMContentLoaded', () => {
  const mainPage = document.querySelector('.mainPage')
  const shopPage = document.querySelector('.shopPage')
  const aboutPage = document.querySelector('.about')
  const newsAndArticlesPage = document.querySelector('.newsAndArticlesPage')
  const itemInfoPage = document.querySelector('.itemPage')
  const orderingPage = document.querySelector('.orderingPage')
  const regPage = document.querySelector('.registration-page')

  if (mainPage) {
    cardSlider()
    newsSlider()
    videoSlider()
  }
  if (shopPage) {
    cardSlider()
    videoSlider()
  }

  if (aboutPage) {
    newsSlider()
    videoSlider()
  }
  if (newsAndArticlesPage) {
    const swiper = new Swiper('.swiper-news', {
      spaceBetween: 32,
      slidesPerView: 3,
      centeredSlides: false,
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-news-next',
        prevEl: '.swiper-news-prev'
      },
      modules: [Navigation, Pagination],
      breakpoints: {
        1440: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1.5
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 1
        }
      }
    })
  }
  if (itemInfoPage) {
    const swiper = new Swiper('.item-info__card .swiper-production', {
      slidesPerView: 1,
      centeredSlides: false,
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      modules: [Navigation, Pagination]
    })
  }

  if (orderingPage) {
    const inputsToShow = document.querySelector('.inputs-to-show ')
    const inputToHide = document.querySelector('.inputToHide')
    const radio = document.querySelector('#radioPost')
    const restRadio = document.querySelectorAll('.rest-input')

    radio.addEventListener('click', () => {
      inputToHide.classList.add('active')
      inputsToShow.classList.add('active')
    })

    restRadio.forEach((item) => {
      item.addEventListener('click', () => {
        inputToHide.classList.remove('active')
        inputsToShow.classList.remove('active')
      })
    })
  }

  if (regPage) {
    regTab()
    option()
  }
  headerPop()
  burger()
})
