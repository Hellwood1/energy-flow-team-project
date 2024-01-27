'use strict';

import { closeModal } from './js/modal';

import { addListeners } from './js/renderCategoriesByFilter';
import { renderExercises } from './js/render-exercises';
import { initRatings, manageRatingModal } from './js/giveRating';

addListeners();
closeModal();
initRatings();
manageRatingModal();
