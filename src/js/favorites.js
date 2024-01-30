import { checkDate } from './quote';
import { mobileMenu, showCurrentPageFavorites } from './header-modal';

const headerEl = document.querySelector('.header-section');
headerEl.classList.add('header-section-favorites')
pageLinks.classList.add('active-page');


showCurrentPageFavorites();
mobileMenu();
checkDate();
addListenersToRatingModal();

