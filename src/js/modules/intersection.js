const fixButton = document.getElementById("fix_button");
const Header = document.getElementById("header");
const logo = document.getElementById("logo");
const main = document.getElementById("main");

export default function observerJs() {
  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
  };
// observerのcallback関数の作成
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //  ここに要素が交差した際の動作を記述
        fixButton.classList.add("-active")
        Header.classList.add("-active")
        logo.setAttribute("src","./img/logo_black.png")
        // observer.unobserve(entry.target);
      } else {
        fixButton.classList.remove("-active")
        Header.classList.remove("-active")
        logo.setAttribute("src","./img/logo.png")
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const el = document.querySelector(".observer-el");
  observer.observe(el);
}
// observer.unobserve(entry.target);

// const logo = document.getElementById("logo");
// const scrollAnimationElm = document.querySelectorAll('.sa');
// export default function observerJs() {
//   const scrollAnimationFunc = function () {
//     for (let i = 0; i < scrollAnimationElm.length; i++) {
//       let triggerMargin = 200;
//       if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//         scrollAnimationElm[i].classList.add('-show');
//         logo.setAttribute("src", "./img/logo_black.png")
//       }
//     }
//   };
//   window.addEventListener('load', scrollAnimationFunc);
//   window.addEventListener('scroll', scrollAnimationFunc);

