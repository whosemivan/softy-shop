// Анимация для nav
const navButton = document.querySelector(".navigation__nav-button");
const navBody = document.querySelector(".navigation__bg");
const navLinks = document.querySelector(".main-nav");

navButton.addEventListener("click", () => {
    navBody.classList.toggle("navigation--blur");
    navLinks.classList.toggle("main-nav--show");
});