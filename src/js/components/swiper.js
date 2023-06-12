import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
let banks = 5
if (window.matchMedia("(max-width: 835px)").matches) {
  banks = 3
}

const swiper = new Swiper('.swiper__banks', {
  slidesPerView: banks,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper__btn--next',
    prevEl: '.swiper__btn--prev',
  },
});
let betwin = 75
if (window.matchMedia("(max-width: 835px)").matches) {
  betwin = 25
}

let Reviews = 3
if (window.matchMedia("(max-width: 420px)").matches) {
  Reviews = 1
}
const swiperReviews = new Swiper('.swiper__reviews', {
  slidesPerView: Reviews,


  spaceBetween: betwin,
  navigation: {
    nextEl: '.swiper__btn--next',
    prevEl: '.swiper__btn--prev',
  },


});

