const togleMode = document.querySelector(".togle-mode");
const sun = togleMode.querySelector("svg:nth-child(1)");
const moon = togleMode.querySelector("svg:nth-child(2)");

togleMode.addEventListener("click", () => {
  togleMode.classList.toggle("active");
  document.body.classList.toggle("dark");
});

const toggleMenu = document.querySelector(".togle-menu");
const ul = document.querySelector("nav ul");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  ul.classList.toggle("slide");
  togleMode.classList.toggle("ubah");
});
