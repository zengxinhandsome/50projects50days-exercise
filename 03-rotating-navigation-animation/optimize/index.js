const btnBars = document.querySelector('.menu-btn.fa-bars');
const btnTimes = document.querySelector('.menu-btn.fa-times');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav-list');

btnBars.addEventListener('click', () => {
  wrapper.classList.add('show-nav')
  // wrapper.style.transform = 'rotate(-20deg)';
  // menu.style.transform = 'rotate(-70deg)';
  // nav.style.left = '20px';
  // nav.classList.add('nav-list-show');
});

btnTimes.addEventListener('click', () => {
  wrapper.classList.remove('show-nav')
  // menu.style.transform = 'rotate(0)';
  // wrapper.style.transform = 'rotate(0)';
  // nav.style.left = '-200px';
  // nav.classList.remove('nav-list-show');
});

