import EnergyFlowApiSevice from './api-service';
import { exerciseCardMarkup } from './markup';
import { showMessageBadRequest, showMessageOkRequest } from './showMessage';
import { initRating } from './giveRating';
import {
  modalBackdrop,
  modalExercise,
  openExerciseModal,
  closeExerciseModal,
  openRatingModal,
} from './manageModals';
import dumbbellImg from '../images/favorites/dumbbell.png';

const LOCAL_STORAGE_KEY = 'favoriteExerciseInfo';
const favoritesList = document.querySelector('.favorites-list');

// localStorage.clear()

export const renderExerciseModal = async id => {
  const request = new EnergyFlowApiSevice();

  try {
    const response = await request.getExerciseInfoById(id);
    modalExercise.innerHTML = exerciseCardMarkup(response);

    const ratings = document.querySelectorAll('.rating-container');
    document.querySelector('.send-rating-form').dataset.id = id;
    openExerciseModal();
    initRating(ratings);
    addListenersCloseToExerciseModal();

    function addListenersCloseToExerciseModal() {
      const closeModealBtn = document.querySelector(
        '.exercise-modal-close-btn'
      );
      const giveRatingButtons = document.querySelectorAll(
        '.exercise-rating-give-btn'
      );
      modalBackdrop.addEventListener('click', e => {
        if (e.target !== closeModealBtn && e.target !== modalBackdrop) {
          return;
        }
        closeExerciseModal();
      });

      addToFavorites();
      changeAddToFavoritesButton(id);

      closeModealBtn.addEventListener('click', closeExerciseModal);

      giveRatingButtons.forEach(button =>
        button.addEventListener('click', openRatingModal)
      );
    }
  } catch (error) {
    showMessageBadRequest();
  }
};

async function addToFavorites() {
  const request = new EnergyFlowApiSevice();
  const addToFavoritesButton = document.querySelector(
    '[data-name="exercise-favorite-btn"]'
  );

  addToFavoritesButton.addEventListener('click', async () => {
    const exerciseId = addToFavoritesButton.id;

    try {
      const exerciseInfo = await request.getExerciseInfoById(exerciseId);
      const favoriteExerciseInfo = getFavoriteExerciseIds();

      const isAlreadyInFavorites = favoriteExerciseInfo.some(
        obj => obj._id === exerciseInfo._id
      );
      checkButtonStatus(addToFavoritesButton);

      if (!isAlreadyInFavorites) {
        favoriteExerciseInfo.push(exerciseInfo);
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(favoriteExerciseInfo)
        );
        showMessageOkRequest('This exercise is added to favorites');
      } else {
        let deleteObj = await request.getExerciseInfoById(exerciseId);

        let savedIdList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        let test = savedIdList.filter(e => e._id !== deleteObj._id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(test));
        if (favoritesList) {
          updateInterfaceAfterRemoval(exerciseId);
        }
      }
    } catch (error) {
      console.error('Error fetching exercise info:', error);
    }
  });
}

function updateInterfaceAfterRemoval(exerciseIdToRemove) {
  const cardToRemove = document.querySelector(
    `.div-with-li[id="${exerciseIdToRemove}"]`
  );
  if (cardToRemove) {
    cardToRemove.remove();
  }

  if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length === 0) {
    favoritesList.innerHTML = `<div class="favorites-no-results"><img
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
    document.querySelector('.exercises-navigation-list').innerHTML = '';
    return;
  }
}
function getFavoriteExerciseIds() {
  const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedIds ? JSON.parse(storedIds) : [];
}

function changeToRemove() {
  const addToFavoritesButton = document.querySelector(
    '[data-name="exercise-favorite-btn"]'
  );
  addToFavoritesButton.firstElementChild.textContent = 'Remove from';
}

function changeToAdd() {
  const addToFavoritesButton = document.querySelector(
    '[data-name="exercise-favorite-btn"]'
  );
  addToFavoritesButton.firstElementChild.textContent = 'Add to favotites';
}

function checkButtonStatus(button) {
  if (button.firstElementChild.textContent === 'Add to favotites') {
    changeToRemove();
  } else {
    changeToAdd();
  }
}

export async function changeAddToFavoritesButton(id) {
  const request = new EnergyFlowApiSevice();
  const exerciseInfo = await request.getExerciseInfoById(id);
  const favoriteExerciseInfo = getFavoriteExerciseIds();

  const isAlreadyInFavorites = favoriteExerciseInfo.some(
    obj => obj._id === exerciseInfo._id
  );
  if (isAlreadyInFavorites) {
    changeToRemove();
  } else {
    changeToAdd();
  }
}
