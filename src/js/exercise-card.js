import axios from 'axios';
import EnergyFlowApiSevice from './api-service';
import imgUrl from '../images/sprite.svg';


const exercisesCardList = document.querySelector(".favorites-list");
const favoriteDivWithoutCards = document.querySelector(".favorites-div-without-cards");
const listWithoutExercases = document.querySelector(".favorites-div-without-cards ");
const LOCAL_STORAGE_KEY = "favoriteExerciseIds";
const energyFlowApiService = new EnergyFlowApiSevice();
// localStorage.clear()

  function addCardToList(results) {
    console.log(results)
    const cardElement = results.map((cardData) => `

      <li class="exercises-card" id="${cardData._id}">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${cardData.rating.toFixed(1)} <span>
              <svg class="rating-icon" width="18" height="18">
              <use href="${imgUrl}#icon-star"></use></svg>
            </span></div>
            <button type="button" id="${
              cardData._id
            }" class="card-delete card-delte-inactive">
              <svg class="trash-icon" width="16" height="16">
              <use href="${imgUrl}#icon-trash"></use></svg>
            </button>
          </div>
          <button type="button" class="card-start">Start <span>
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
  `
    )
    .join('');

  exercisesCardList.insertAdjacentHTML('beforeend', cardElement);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// --------------delete button-----------------------//

const exercisesCard = document.querySelector(".exercises-card")
const removeFromFavoritesButtons = document.querySelectorAll(".card-delete");


// exercisesCard.addEventListener("click", () =>  {
//   const exerciseIdToRemove = exercisesCard.id;
//   const favoriteExerciseIds = getFavoriteExerciseIds();
//   const indexToRemove = favoriteExerciseIds.indexOf(exerciseIdToRemove);

//   if (indexToRemove !== -1) {
//     favoriteExerciseIds.splice(indexToRemove, 1);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteExerciseIds));
//   }
//   updateInterfaceAfterRemoval(exerciseIdToRemove);
// });


removeFromFavoritesButtons.forEach(button => {

  button.addEventListener("click", () =>  {
    const exerciseIdToRemove = button.id;

    const favoriteExerciseIds = getFavoriteExerciseIds();
    const indexToRemove = favoriteExerciseIds.indexOf(exerciseIdToRemove);

    if (indexToRemove !== -1) {
      favoriteExerciseIds.splice(indexToRemove, 1);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(favoriteExerciseIds)
      );
    }
    updateInterfaceAfterRemoval(exerciseIdToRemove);
  });
});

function updateInterfaceAfterRemoval(exerciseIdToRemove) {
  const cardToRemove = document.querySelector(
    `.exercises-card[data-id="${exerciseIdToRemove}"]`
  ); /////якщо помилка то точно тут

  if (cardToRemove) {
    cardToRemove.remove();
  }
}


// ---------------------start button-------------------------------

const cardStartButton = document.querySelectorAll(".card-start");
const exerciseModalBackdrop = document.querySelector(".exercise-modal-backdrop");
cardStartButton.forEach(button => {
  button.addEventListener("click", () => {
    exerciseModalBackdrop.classList.remove("backdrop-is-hidden");
  })
})


//--------------------- add to favorites---------------------------

const addToFavoritesButtons = document.querySelectorAll(
  '.exercise-favorite-add-btn'
);

addToFavoritesButtons.forEach(button => {

  button.addEventListener("click", () => {
    const exerciseId = button.id;


    console.log(exerciseId);

    const favoriteExerciseIds = getFavoriteExerciseIds();

    if (!favoriteExerciseIds.includes(exerciseId)) {
      favoriteExerciseIds.push(exerciseId);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(favoriteExerciseIds)
      );
    } else {
      console.log('this exersice is already in favorites');
    }
  });
});

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
  .then((results) => { addCardToList(results) })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
} else {
  listWithoutExercases.classList.remove("favorites-div-without-cards-hidden");
}

