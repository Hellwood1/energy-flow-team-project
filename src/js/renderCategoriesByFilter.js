import { categoriesMarkup } from './markup';
import EnergyFlowApiSevice from './api-service';
import { showMessageBadRequest } from './showMessage';
import { addClass, removeClass } from './manageClasses';
import { renderExercises } from './render-exercises';
import { hideExerciseSearchForm } from './render-exercises';

export const categoriesCardsContainer =
  document.querySelector('.categories-list');
const filterButtonsList = document.querySelector('.category-btns-list');
const titlePath = document.querySelector('.exercises-title');
const namePath = document.querySelector('.exercises-path-name');

const addClassToCurrentFilter = () => {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn =>
    btn.addEventListener('click', () => {
      buttons.forEach(elem => removeClass(elem, 'current-category-btn'));
      addClass(btn, 'current-category-btn');
    })
  );
};

const initialRequest = async filter => {
  const request = new EnergyFlowApiSevice();
  const cardsPerPage = window.innerWidth < 768 ? 8 : 12;
  filter = document.querySelector('.current-category-btn').textContent.trim();
  try {
    const response = await request.getCategoriesByFilter(
      filter,
      1,
      cardsPerPage
    );
    categoriesCardsContainer.innerHTML = categoriesMarkup(response);

    categoriesCardsContainer.addEventListener('click', renderExercises);
  } catch (error) {
    showMessageBadRequest();
  }
};

const renderCategories = async event => {
  const filter = event.target.textContent.trim();

  removeExercisePath();
  initialRequest(filter);
};

function removeExercisePath() {
  if (namePath.textContent === '') {
    return;
  }

  titlePath.textContent = 'Exercises';
  namePath.textContent = '';
  namePath.classList.add('hidden');
  hideExerciseSearchForm();
}

export const addListeners = () => {
  window.addEventListener('load', addClassToCurrentFilter);
  window.addEventListener('load', initialRequest);
  filterButtonsList.addEventListener('click', renderCategories);
  titlePath.addEventListener('click', renderCategories);
};
