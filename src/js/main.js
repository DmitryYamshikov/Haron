import {initMainSlider, initReviewsSlider} from "./sliders";


function headerScroll() {
  const header = document.querySelector('.header')

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header--scroll')
    } else {
      header.classList.remove('header--scroll')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  headerScroll()
  initMainSlider()
  initReviewsSlider()
})