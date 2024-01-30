'use strict';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import { addListenersToRatingModal } from './js/giveRating';
import { mobileMenu, showCurrentPageHome } from './js/header-modal';
import { scrollFunction } from './js/up-btn';


mobileMenu();
addListeners();
checkDate();
addListenersToRatingModal();
scrollFunction();
showCurrentPageHome();
