
const pageLinks = document.querySelector('.favorites-page');
const headerEl = document.querySelector('.header-section');
headerEl.classList.add('header-section-favorites')
pageLinks.classList.add('active-page');

import { mobileMenu } from './header-modal';
import { checkDate } from './quote';

mobileMenu();
checkDate();
