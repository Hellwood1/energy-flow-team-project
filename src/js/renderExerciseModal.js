import EnergyFlowApiSevice from './api-service';
import { exerciseCardMarkup } from './markup';
import { showMessageRatingFailed } from './showMessage';
import { initRating } from './giveRating';

export const renderExerciseModal = async id => {
  const request = new EnergyFlowApiSevice();
  const modalExercise = document.querySelector('.exercise-modal');
  const modalBackdrop = document.querySelector('.exercise-modal-backdrop');
  try {
    const response = await request.getExerciseInfoById(id);
    modalExercise.innerHTML = exerciseCardMarkup(response);

    document.querySelector('.send-rating-form').dataset.id = id;
    openExerciseModal();

    const ratings = document.querySelectorAll('.rating-container');
    initRating(ratings);

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
