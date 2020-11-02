
export default function hamBtn() {
  const button = document.getElementById('js-ham-btn');
  const gnav = document.getElementById("gnav");
  const navItems = document.getElementsByClassName("gnav__link");

  button.addEventListener('click', function () {
    if (button.getAttribute("aria-expanded") === "false") {
      button.setAttribute("aria-expanded", true);
      // button.classList.add("-fix");
      gnav.classList.add("-ham-active")
    } else {
      button.setAttribute("aria-expanded", false);
      gnav.classList.remove("-ham-active")
      // button.classList.remove("-fix");
    }
  });

  for (var i = 0, l = navItems.length; l > i; i++) {
    var navItem = navItems[i];
    navItem.addEventListener("click", function () {
      if (button.getAttribute("aria-expanded") === "false") {
        button.setAttribute("aria-expanded", true);
        // button.classList.add("-fix");
        gnav.classList.add("-ham-active")
      } else {
        button.setAttribute("aria-expanded", false);
        // gnav.classList.remove("-ham-active")
        button.classList.remove("-fix");
      }
    });
  }
}