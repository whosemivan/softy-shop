const menu = document.querySelector('.main-nav');
const button = document.querySelector('.header__btn');

button.classList.remove('visually-hidden');
menu.classList.add('main-nav--hidden');

button.addEventListener('click', function() {
    menu.classList.toggle('main-nav--hidden');
    button.classList.toggle('header__btn--opened');
});