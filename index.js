const navbar = document.querySelector(".navbar__container");
const mouseBody = document.querySelector("#mouse_body");
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  if (window.scrollY >= 700) {
    navbar.classList.add("acti");
    // console.log("jj");
  } else {
    navbar.classList.remove("acti");
  }
});


const navBar = document.querySelector(".navbar__container__bars");
const navMenu = document.querySelector(".navbar__container__items");

navBar.addEventListener("click", () => {
    navBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
