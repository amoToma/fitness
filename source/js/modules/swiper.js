import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const juriSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [ Navigation ],

  navigation: {
    prevEl: '.swiper-button--prev',
    nextEl: '.swiper-button--next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

export { juriSwiper };

