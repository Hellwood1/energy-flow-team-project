'use strict';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import { initRating } from './js/giveRating';
import { mobileMenu } from './js/header-modal';

mobileMenu()
addListeners();
checkDate();
initRating();


