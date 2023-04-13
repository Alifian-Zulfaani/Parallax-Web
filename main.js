let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let hill = document.getElementById("hill");

window.onscroll = function () {
  let value = window.scrollY;
  console.log(value);
  stars.style.left = value + "px";
  moon.style.top = value + "px";
};
