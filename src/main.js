'use strict';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import { initRating } from './js/giveRating';
import { mobileMenu } from './js/header-modal';
import { validateEmail, handleFormSubmit } from './js/form-footer';
import { scrollFunction } from './js/up-btn';

mobileMenu();
addListeners();
checkDate();
initRating();
validateEmail();
handleFormSubmit();
scrollFunction();

