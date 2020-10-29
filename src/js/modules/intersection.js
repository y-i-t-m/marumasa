const options = {
  root: null,
  rootMargin: "-20ox 0",
  threshold: 1.0
}

let obserber = new IntersectionObserver(callback, options);