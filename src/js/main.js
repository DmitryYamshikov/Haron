import {initMainSlider, initReviewsSlider} from "./sliders";
import {toggleMobileMenu} from "./mobileMenu";


function headerScroll() {
  const header = document.querySelector('.header')

  function headerScrollHandler() {
    if (window.scrollY > 0) {
      header.classList.add('header--scroll')
    } else {
      header.classList.remove('header--scroll')
    }
  }

  headerScrollHandler()

  document.addEventListener('scroll', headerScrollHandler)
}

document.addEventListener('DOMContentLoaded', () => {
  headerScroll()
  initMainSlider()
  initReviewsSlider()
  toggleMobileMenu()
})