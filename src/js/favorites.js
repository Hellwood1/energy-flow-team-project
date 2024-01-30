import { checkDate } from './quote';
import { mobileMenu, showCurrentPageFavorites } from './header-modal';

const headerEl = document.querySelector('.header-section');
headerEl.classList.add('header-section-favorites')

showCurrentPageFavorites();
mobileMenu();
checkDate();
