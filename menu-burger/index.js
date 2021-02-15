const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});
