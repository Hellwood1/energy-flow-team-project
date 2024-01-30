import EnergyFlowApiSevice from './api-service';
import { exerciseCardMarkup } from './markup';
import { showMessageBadRequest, showMessageRatingFailed, showMessageOkRequest } from './showMessage';

const LOCAL_STORAGE_KEY = "favoriteExerciseIds";

export const renderExerciseModal = async id => {
  const request = new EnergyFlowApiSevice();
  const modalExercise = document.querySelector('.exercise-modal');
  const modalBackdrop = document.querySelector('.exercise-modal-backdrop');
  try {
    const response = await request.getExerciseInfoById(id);
    modalExercise.innerHTML = exerciseCardMarkup(response);

    document.querySelector('.send-rating-form').dataset.id = id;
    openExerciseModal();

    const closeModealBtn = document.querySelector('.exercise-modal-close-btn');
    modalBackdrop.addEventListener('click', e => {
      if (e.target !== closeModealBtn && e.target !== modalBackdrop) {
        return;
      }
      closeExerciseModal();
    });
    closeModealBtn.addEventListener('click', closeExerciseModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeExerciseModal();
      }
    });
    const addToFavoritesButton = document.querySelector('.exercise-favorite-add-btn');
    addToFavoritesButton.addEventListener('click', () => {
      const exerciseId = addToFavoritesButton.id;
      const favoriteExerciseIds = getFavoriteExerciseIds();
      if (!favoriteExerciseIds.includes(exerciseId)) {
        favoriteExerciseIds.push(exerciseId);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteExerciseIds));
        showMessageOkRequest('This exercise is add in favorites')
      } else {
        showMessageOkRequest('This exercise is already in favorites');
      }
    });
    
    function getFavoriteExerciseIds() {
      const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedIds ? JSON.parse(storedIds) : [];
    }
    const giveRatingButtons = document.querySelectorAll(
      '.exercise-rating-give-btn'
    );
    giveRatingButtons.forEach(button =>
      button.addEventListener('click', () => {
        const ratingBackdrop = document.querySelector(
          '[data-modal-rating-backdrop]'
        );
        const ratingContainer = document.querySelector(
          '[data-modal-rating-container]'
        );
        ratingBackdrop.classList.remove('backdrop-rating-is-hidden');
        ratingContainer.classList.remove('modal-rating-is-hidden');
        closeExerciseModal();
      })
    );
  } catch (error) {
    showMessageRatingFailed();
  }

  function closeExerciseModal() {
    modalBackdrop.classList.add('backdrop-is-hidden');
    modalExercise.classList.add('modal-is-hidden');
  }
  function openExerciseModal() {
    modalBackdrop.classList.remove('backdrop-is-hidden');
    modalExercise.classList.remove('modal-is-hidden');
  }
};
