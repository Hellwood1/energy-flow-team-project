import { categoriesMarkup } from './markup';
import EnergyFlowApiSevice from './api-service';
import { showMessageBadRequest } from './showMessage';
import { addClass, removeClass } from './manageClasses';
import { renderExercises } from './render-exercises';
import { hideExerciseSearchForm } from './render-exercises';
import { renderPageList } from './pagination';
import { changeCurrentPage } from './pagination';
import { page } from './pagination';
import { resetPage } from './pagination';
import { animateElement } from './render-exercises';
import { sendMessage } from './form-footer';

export const categoriesCardsContainer =
  document.querySelector('.categories-list');
const filterButtonsList = document.querySelector('.category-btns-list');
const titlePath = document.querySelector('.exercises-title');
const namePath = document.querySelector('.exercises-path-name');
const paginationBtnsList = document.querySelector('.navigation-list-form');
const subForm = document.querySelector('.footer-subscription');
export const element = document.querySelector('.categories-list');

const addClassToCurrentFilter = () => {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn =>
    btn.addEventListener('click', () => {
      buttons.forEach(elem => removeClass(elem, 'current-category-btn'));
      addClass(btn, 'current-category-btn');
    })
  );
};

export const inViewZone = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      element.classList.add('on-animate');
    }
  });
});

export const initialRequest = async filter => {
  const request = new EnergyFlowApiSevice();
  const cardsPerPage = window.innerWidth < 768 ? 8 : 12;

  filter = document.querySelector('.current-category-btn').textContent.trim();
  try {
    categoriesCardsContainer.innerHTML = `<span class="loader"></span>`;
    const response = await request.getCategoriesByFilter(
      filter,
      page,
      cardsPerPage
    );
    renderPageList(response.totalPages, page, page);
    categoriesCardsContainer.innerHTML = categoriesMarkup(response);
    categoriesCardsContainer.addEventListener('click', renderExercises);
    paginationBtnsList.addEventListener('submit', changeCurrentPage);
    animateElement(categoriesCardsContainer);

    inViewZone.observe(element);
  } catch (error) {
    showMessageBadRequest();
  }
};

export const renderCategories = async event => {
  const filter = event.target.textContent.trim();
  resetPage();
  removeExercisePath();
  await initialRequest(filter);
  if (categoriesCardsContainer.classList.contains('exercise-list')) {
    categoriesCardsContainer.classList.remove('exercise-list');
  }
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
  subForm.addEventListener('submit', sendMessage);
};
