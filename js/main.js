import { trainers, getHtml } from './featuredObj.js';

const trainerDiv = document.getElementById('trainer-grid');
const showCopyrightYear = document.getElementById('current-year');

const toggleMobileMenuBtn = document.querySelectorAll('.toggle-mobile-menu');

const toggleDisplay = (el) => {
  el.classList.toggle('display-none');
};

const toggleMobileMenu = () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenuBg = document.getElementById('mobile-menu-bg');
  toggleDisplay(hamburgerBtn);
  toggleDisplay(mobileMenuBg);
};

toggleMobileMenuBtn.forEach((item) => {
  item.addEventListener('click', toggleMobileMenu);
});

trainerDiv.append(getHtml(trainers));

showCopyrightYear.innerText = new Date().getFullYear();