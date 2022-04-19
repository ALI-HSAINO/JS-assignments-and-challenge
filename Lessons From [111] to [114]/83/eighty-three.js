let fonts = document.getElementById("fonts");
let colors = document.getElementById("colors");
let sizes = document.getElementById("sizes");
let p = document.querySelector("p");
if (window.localStorage.getItem("font")) {
  p.style.fontFamily = window.localStorage.getItem("font");
  fonts.value = window.localStorage.getItem("font");
}
if (window.localStorage.getItem("color")) {
  p.style.color = window.localStorage.getItem("color");
  colors.value = window.localStorage.getItem("color");
}
if (window.localStorage.getItem("size")) {
  p.style.fontSize = window.localStorage.getItem("size");
  sizes.value = window.localStorage.getItem("size").slice(0, 2);
}
if (
  window.localStorage.getItem("font") &&
  window.localStorage.getItem("color") &&
  window.localStorage.getItem("size")
) {
  p.style.cssText = `font-family :${window.localStorage.getItem(
    "font"
  )};color : ${window.localStorage.getItem(
    "color"
  )}; font-size : ${window.localStorage.getItem("size")} `;
  fonts.value = window.localStorage.getItem("font");
  colors.value = window.localStorage.getItem("color");
  sizes.value = window.localStorage.getItem("size").slice(0, 2);
}
fonts.onchange = function () {
  window.localStorage.setItem("font", fonts.value);
  p.style.fontFamily = fonts.value;
};
colors.onchange = function () {
  window.localStorage.setItem("color", colors.value);
  p.style.color = colors.value;
};
sizes.onchange = function () {
  window.localStorage.setItem("size", `${sizes.value}px`);
  p.style.fontSize = `${sizes.value}px`;
};
