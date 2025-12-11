const togleMode = document.querySelector(".togle-mode");
const sun = togleMode.querySelector("svg:nth-child(1)");
const moon = togleMode.querySelector("svg:nth-child(2)");
const beranda = document.querySelector(".container1");
const ul = document.querySelector("nav ul");
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function updateMenu(jikaActive) {
  if (jikaActive) {
    ul.classList.add("slide");
    toggleMenu.classList.add("active");
    togleMode.classList.add("ubah");
  } else {
    ul.classList.remove("slide");
    toggleMenu.classList.remove("active");
    togleMode.classList.remove("ubah");
  }
}

togleMode.addEventListener("click", (e) => {
  e.stopPropagation();
  togleMode.classList.toggle("active");
  document.body.classList.toggle("dark");
  beranda.classList.toggle("dark");
  ul.classList.toggle("dark");
});

const toggleMenu = document.querySelector(".togle-menu");
toggleMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  const jikaActive = !ul.classList.contains("slide");
  updateMenu(jikaActive);
});

document.addEventListener("click", (e) => {
  if (!ul.contains(e.target) && e.target !== toggleMenu) {
    updateMenu(false);
  }
});
