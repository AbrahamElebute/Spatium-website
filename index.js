const navbar = document.querySelector(".navbar__container");
const mouseBody = document.querySelector("#mouse_body");
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  if (window.scrollY >= 400) {
    navbar.classList.add("acti");
    // console.log("jj");
  } else {
    navbar.classList.remove("acti");
  }
});


const navBar = document.querySelector(".navbar__container__bars");
const navMenu = document.querySelector(".navbar__container__items");

navBar.addEventListener("click", () => {
    navBar.classList.toggle("barsActive");
  navMenu.classList.toggle("navActive");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navBar.classList.remove("barsActive");
    navMenu.classList.remove("navActive");
  })
);
const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

