'use strict';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import { initRating } from './js/giveRating';
import { mobileMenu } from './js/header-modal';
import { validateEmail, handleFormSubmit } from './js/form-footer';

mobileMenu();
addListeners();
checkDate();
initRatings();
validateEmail();
handleFormSubmit();

