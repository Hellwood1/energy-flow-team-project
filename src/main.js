'use strict';

import { closeModal } from './js/modal';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import './js/exercise-card';
import { initRatings, manageRatingModal } from './js/giveRating';
import { mobileMenu } from './js/header-modal';
import { validateEmail, handleFormSubmit } from './js/form-footer';


addListeners();
closeModal();
checkDate();
initRatings();
manageRatingModal();
mobileMenu();
validateEmail();
handleFormSubmit();
