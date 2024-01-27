'use strict';

import { closeModal } from './js/modal';
import { addListeners } from './js/renderCategoriesByFilter';
import { checkDate } from './js/quote';
import { initRatings, manageRatingModal } from './js/giveRating';
import { mobileMenu } from './js/header-modal';

mobileMenu()
addListeners();
closeModal();
checkDate();
initRatings();
manageRatingModal();
