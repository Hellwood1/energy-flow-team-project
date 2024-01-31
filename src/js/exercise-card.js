import EnergyFlowApiSevice from './api-service';
import imgUrl from '../images/sprite.svg';
import { renderExerciseModal } from './renderExerciseModal';
import { showMessageBadRequest } from './showMessage';
import { renderPageList } from './pagination';
import { cutString } from './render-exercises';
import { addListenersToRatingModal } from './giveRating';

addListenersToRatingModal();

const exercisesCardList = document.querySelector('.favorites-list');
const listWithoutExercases = `<div class="favorites-no-results"><img
          class="favorites-div-without-cards-img"
          src="./images/favorites/dumbbell.png"
          alt="dumbbell"
          width="85"
          height="52"
        />
        <p class="favorites-div-without-cards-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </p></div>`;

const LOCAL_STORAGE_KEY = 'favoriteExerciseIds';
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
  document.querySelector('.exercise-favorite-add-btn').remove();
  document.querySelector('.exercise-rating-give-btn').style.width = '100%';
}

// --------------delete button-----------------------//

function deleteFavoriteCard(e) {
  if (!e.target.classList.contains('trash-icon')) {
    return;
  }

  let id = e.target.parentNode.id;

  let savedIdList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let test = savedIdList.filter(e => e !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(test));
  totalFavoritesPages = Math.ceil(test.length / 8);
  updateInterfaceAfterRemoval(id);

  if (
    document.querySelectorAll('.div-with-li').length === 0 &&
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length > 0
  ) {
    fetchDataForIds(test).then(results => {
      if (window.innerWidth < 768) {
        console.log('noooooooo');
        currentPage = currentPage - 1;
        addCardToList(results.slice(0, 8));
        renderPageList(totalFavoritesPages, currentPage, currentPage);
        console.log(currentPage);
        let pageList = document.querySelectorAll(
          '.exercises-navigation-number'
        );

        pageList[currentPage - 1].classList.add('pagination-current');
        return;
      }
    });
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

const fetchDataForIds = async ids => {
  const promises = ids.map(id => energyFlowApiService.getExerciseInfoById(id));
  return Promise.all(promises);
};

if (favoriteExerciseIdInLocalStorage.length !== 0) {
  fetchDataForIds(favoriteExerciseIdInLocalStorage)
    .then(results => {
      if (window.innerWidth < 768) {
        addCardToList(results.slice(0, 8));

        totalFavoritesPages = Math.ceil(results.length / 8);
        // console.log(totalFavoritesPages);
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
      console.log(error);
    });
} else {
  exercisesCardList.innerHTML = listWithoutExercases;
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
