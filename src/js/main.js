import "@babel/polyfill";
import 'swiper/css/swiper.min.css';
import "../scss/style.scss";

import picturefill from "picturefill";
import whatInput from 'what-input';

import smoothScroll from "./modules/smoothscroll";
import slider from "./modules/swiper";
import observerJs from "./modules/intersection";
import hamBtn from "./modules/hamburger";

window.addEventListener("DOMContentLoaded", (e) => {
  smoothScroll();
  picturefill();
  slider();
  observerJs();
  hamBtn();
});

