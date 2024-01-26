import { categoriesMarkup } from './markup';
import EnergyFlowApiSevice from './api-service';
import { showMessageBadRequest } from './showMessage';
import { addClass, removeClass } from './manageClasses';

export const filterButtonsList = document.querySelector('.category-btns-list');

export const addClassToCurrentFilter = () => {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn =>
    btn.addEventListener('click', () => {
      buttons.forEach(elem => removeClass(elem, 'current-category-btn'));
      addClass(btn, 'current-category-btn');
    })
  );
};

export const initialRequest = async (filter) => {
  const categoriesCardsContainer = document.querySelector('.categories-list');
  const request = new EnergyFlowApiSevice();
  const cardsPerPage = window.innerWidth < 768 ? 8 : 12;
  filter = document
    .querySelector('.current-category-btn')
    .textContent.trim();
  try {
    const response = await request.getCategoriesByFilter(
      filter,
      1,
      cardsPerPage
    );
    categoriesCardsContainer.innerHTML = categoriesMarkup(response);
  } catch (error) {
    showMessageBadRequest();
  }
};


export const renderCategories = async event => {
  const filter = event.target.textContent.trim();
  initialRequest(filter);
};

export const addListeners = () => {
  window.addEventListener('load', addClassToCurrentFilter);
  window.addEventListener('load', initialRequest);
  filterButtonsList.addEventListener('click', renderCategories);
};