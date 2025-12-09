const togleMode = document.querySelector(".togle-mode");
const sun = togleMode.querySelector("svg:nth-child(1)");
const moon = togleMode.querySelector("svg:nth-child(2)");

togleMode.addEventListener("click", () => {
  togleMode.classList.toggle("active");
  document.body.classList.toggle("dark");
});
