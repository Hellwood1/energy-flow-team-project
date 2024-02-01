import EnergyFlowApiSevice from './api-service';
import imgUrl from '../images/sprite.svg';
import { renderExerciseModal } from './renderExerciseModal';
import { showMessageBadRequest } from './showMessage';
import { renderPageList } from './pagination';
import { cutString } from './render-exercises';
import { addListenersToRatingModal } from './giveRating';
import dumbbellImg from '../images/favorites/dumbbell.png';

addListenersToRatingModal();
// localStorage.clear()
const exercisesCardList = document.querySelector('.favorites-list');
exercisesCardList.innerHTML = `<span class="loader"></span>`;
const listWithoutExercases = `<div class="favorites-no-results"><img
          class="favorites-div-without-cards-img"
          src="${dumbbellImg}"
          alt="dumbbell"
          width="85"
          height="52"
        />
        <p class="favorites-div-without-cards-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </p></div>`;

const LOCAL_STORAGE_KEY = 'favoriteExerciseInfo';
const energyFlowApiService = new EnergyFlowApiSevice();
let totalFavoritesPages = 1;
let currentPage = 1;

function addCardToList(results) {
  const cardElement = results
    .map(
      cardData => `
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
          <button type="button" id="${
            cardData._id
          }" class="card-start">Start <span>
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
          <p>Target: <span class="exercises-card-lower-part-span">${cutString(
            cardData.target
          )}</span></p>
        </div>
      </li>
      </div>
  `
    )
    .join('');

  exercisesCardList.innerHTML = cardElement;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// ----------------open modal---------------------------//

exercisesCardList.addEventListener('click', onOpenFavorite);

async function onOpenFavorite(e) {
  if (e.target.classList.contains('trash-icon')) {
    return;
  }

  let id = e.target.id;

  await renderExerciseModal(id);
}

// --------------delete button-----------------------//

async function deleteFavoriteCard(e) {
  if (!e.target.classList.contains('trash-icon')) {
    return;
  }

  let id = e.target.parentNode.id;
  let deleteObj = await energyFlowApiService.getExerciseInfoById(id);

  let savedIdList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let test = savedIdList.filter(e => e._id !== deleteObj._id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(test));
  totalFavoritesPages = Math.ceil(test.length / 8);
  updateInterfaceAfterRemoval(id);

  if (
    document.querySelectorAll('.div-with-li').length === 0 &&
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length > 0
  ) {
    const localStorageInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (window.innerWidth < 768) {
      currentPage = currentPage - 1;
      addCardToList(test.slice(0, 8));
      if (currentPage > 1) {
        renderPageList(totalFavoritesPages, currentPage, currentPage);
        let pageList = document.querySelectorAll(
          '.exercises-navigation-number'
        );

        pageList[currentPage - 1].classList.add('pagination-current');
        return;
      } else {
        document.querySelector('.exercises-navigation-list').innerHTML = '';
      }
    }
  }
}

function updateInterfaceAfterRemoval(exerciseIdToRemove) {
  const cardToRemove = document.querySelector(
    `.div-with-li[id="${exerciseIdToRemove}"]`
  );

  if (cardToRemove) {
    cardToRemove.remove();
  }

  if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length === 0) {
    exercisesCardList.innerHTML = listWithoutExercases;
    document.querySelector('.exercises-navigation-list').innerHTML = '';
    return;
  }
}
exercisesCardList.addEventListener('click', deleteFavoriteCard);
//--------------------- add to favorites---------------------------

function getFavoriteExerciseIds() {
  const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedIds ? JSON.parse(storedIds) : [];
}

// -------------------------Завантаження з улюблених-----------------------------------
const favoriteExerciseIdInLocalStorage = getFavoriteExerciseIds();

if (favoriteExerciseIdInLocalStorage.length !== 0) {
  if (window.innerWidth < 768) {
    addCardToList(favoriteExerciseIdInLocalStorage.slice(0, 8));

    totalFavoritesPages = Math.ceil(
      favoriteExerciseIdInLocalStorage.length / 8
    );
    if (totalFavoritesPages > 1) {
      renderPageList(totalFavoritesPages, currentPage, currentPage);
    }
    document
      .querySelector('.navigation-list-form')
      .addEventListener('submit', paginationFavorite);
  } else {
    addCardToList(favoriteExerciseIdInLocalStorage);
  }
} else {
  exercisesCardList.innerHTML = listWithoutExercases;
}

function paginationFavorite(e) {
  e.preventDefault();

  currentPage = e.submitter.textContent;
  const ids = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let total = Math.ceil(ids.length / 8);

  addCardToList(ids.slice((currentPage - 1) * 8, currentPage * 8));

  if (total > 1) {
    renderPageList(total, currentPage, currentPage);
  }
}
