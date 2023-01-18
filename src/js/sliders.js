import Swiper from 'swiper';

export function initMainSlider() {
  const swiper = new Swiper('.main-slider', {
    slidesPerView: 'auto',
  });

  swiper.on('init', () => {
    document.querySelector('.main-slider .swiper-button-next')
      .addEventListener('click', ()=>swiper.slideNext())
    document.querySelector('.main-slider .swiper-button-prev')
      .addEventListener('click', ()=>swiper.slidePrev())
  })
}
export function initReviewsSlider() {
  const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 'auto',
  });

  swiper.on('init', () => {
    document.querySelector('.main-slider .swiper-button-next')
      .addEventListener('click', ()=>swiper.slideNext())
    document.querySelector('.main-slider .swiper-button-prev')
      .addEventListener('click', ()=>swiper.slidePrev())
  })
}