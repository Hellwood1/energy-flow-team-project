import EnergyFlowApiSevice from './api-service';
import imgUrl from '../images/sprite.svg';
import { renderExerciseModal } from "./renderExerciseModal";
import { showMessageBadRequest } from "./showMessage"

const exercisesCardList = document.querySelector(".favorites-list");
const listWithoutExercases = document.querySelector(".favorites-div-without-cards ");
const LOCAL_STORAGE_KEY = "favoriteExerciseIds";
const energyFlowApiService = new EnergyFlowApiSevice();
const totalFavoritesPages = 1;


  function addCardToList(results) {

    const cardElement = results.map((cardData) => `
    <div class="div-with-li" id="${cardData._id}">
    <button type="button" id="${cardData._id}" class="card-delete">
    <svg class="trash-icon" width="16" height="16">
    <use href="${imgUrl}#icon-trash"></use></svg>
  </button>
      <li class="exercises-card" id="${cardData._id}">

        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>

          </div>
          <button type="button" id="${cardData._id}" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="${imgUrl}#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="${imgUrl}#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${capitalizeFirstLetter(
            cardData.name
          )}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${
            cardData.burnedCalories
          } / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${
            cardData.bodyPart
          }</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${
            cardData.target
          }</span></p>
        </div>
      </li>
      </div>
  `
    )
    .join('');

  exercisesCardList.insertAdjacentHTML('beforeend', cardElement);

  startButtonAddEventListener();
  deleteButtonAddEventListener();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// ----------------start button---------------------------

function startButtonAddEventListener() {
  const removeFromFavoritesButtons = document.querySelectorAll(".exercises-card");
  removeFromFavoritesButtons.forEach(start => start.addEventListener("click", e => {
    const id = e.target.id;
   renderExerciseModal(id);
 })
)}

// --------------delete button-----------------------//

function deleteButtonAddEventListener() {
  const removeFromFavoritesButtons = document.querySelectorAll(".card-delete");
  removeFromFavoritesButtons.forEach(deleteButtonEventListener);
}

function deleteButtonEventListener(button) {
  button.addEventListener("click", (event) => {
    const exerciseIdToRemove = event.currentTarget.id;

    const favoriteExerciseIds = getFavoriteExerciseIds();
    let newFavoriteExerciseIds = favoriteExerciseIds.filter(element => element !== exerciseIdToRemove);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFavoriteExerciseIds));

    updateInterfaceAfterRemoval(exerciseIdToRemove);
  });
}

function updateInterfaceAfterRemoval(exerciseIdToRemove) {
  const cardToRemove = document.querySelector(`.div-with-li[id="${exerciseIdToRemove}"]`);

  if (cardToRemove) {
    cardToRemove.remove();
  }

  const hasChildrenWithClass = exercisesCardList.querySelector('.div-with-li') === null;
  if (!hasChildrenWithClass) {
    listWithoutExercases.classList.remove("favorites-div-without-cards-hidden");
  }
}

//--------------------- add to favorites---------------------------

function getFavoriteExerciseIds() {
  const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedIds ? JSON.parse(storedIds) : [];
}

// -------------------------Завантаження з улюблених-----------------------------------
const favoriteExerciseIdInLocalStorage = getFavoriteExerciseIds();

const fetchDataForIds = async (ids) => {
  const promises = ids.map((id) => energyFlowApiService.getExerciseInfoById(id));
  return Promise.all(promises);
};

if (favoriteExerciseIdInLocalStorage.length !== 0) {
  listWithoutExercases.classList.add("favorites-div-without-cards-hidden");
  fetchDataForIds(favoriteExerciseIdInLocalStorage)
    .then(results => {

      if (window.innerWidth < 768) {
        addCardToList(results.slice(0, 8));
        totalFavoritesPages = Math.ceil(results.length / 8);
        renderPageList(totalFavoritesPages, currentPage, currentPage);
        document
          .querySelector('.navigation-list-form')
          .addEventListener('submit', paginationFavorite);
      } else {
        addCardToList(results);
      }

    })
    .catch(error => {
      showMessageBadRequest();
    });

} else {
  listWithoutExercases.classList.remove("favorites-div-without-cards-hidden");
}

function paginationFavorite(e) {
  e.preventDefault();

  currentPage = e.submitter.textContent;
  const ids = JSON.parse(localStorage.getItem('favoriteExerciseIds'));
  let total = Math.ceil(ids.length / 8);

  fetchDataForIds(favoriteExerciseIdInLocalStorage)
    .then(results => {
      addCardToList(results.slice((currentPage - 1) * 8, currentPage * 8));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  renderPageList(total, currentPage, currentPage);
}


