import Swiper from 'swiper';

const options = {
  // loop: true,
  disableOnInteraction: false,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 4500,
  },
}
const slider = () => {
  new Swiper('.swiper-container', options);
}
export default slider;