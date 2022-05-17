import { trainers, getHtml } from './featuredObj.js';

const trainerDiv = document.getElementById('trainer-grid');
const showCopyrightYear = document.getElementById('current-year');

trainerDiv.append(getHtml(trainers));

showCopyrightYear.innerText = new Date().getFullYear();