'use strict';

import { closeModal } from './js/modal';
import { addListeners } from './js/renderCategoriesByFilter';
import { renderExercises } from './js/render-exercises';
import { checkDate } from './js/quote';
import './js/exercise-card'

addListeners();
closeModal();
checkDate();


