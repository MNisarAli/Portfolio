const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

links.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));