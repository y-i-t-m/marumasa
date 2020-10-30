import Swiper from 'swiper';

const options = {
  loop: true,
  speed: 1000,
  slidesPerView: 1.5,
  spaceBetween: 24,
  centeredSlides : true,
  autoplay: {
    delay: 4500,
  },
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    // 980px以上の場合
    980: {
      slidesPerView: 3.5,
      spaceBetween: 64,
    },
  }
}
const slider = () => {
  new Swiper('.swiper-container', options);
}
export default slider;