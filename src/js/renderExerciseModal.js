import EnergyFlowApiSevice from './api-service';
import { exerciseCardMarkup } from './markup';
import { showMessageBadRequest } from './showMessage';
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


    const giveRatingButtons = document.querySelectorAll(
      '.exercise-rating-give-btn'
    );
    giveRatingButtons.forEach(button =>
      button.addEventListener('click', openRatingModal)
    );
  } catch (error) {
    showMessageBadRequest();
  }

  function closeExerciseModal() {
    modalBackdrop.classList.add('backdrop-is-hidden');
    modalExercise.classList.add('modal-is-hidden');
    window.removeEventListener('keydown', closeExerciseCardByEscape);
  }
  function openExerciseModal() {
    modalBackdrop.classList.remove('backdrop-is-hidden');
    modalExercise.classList.remove('modal-is-hidden');
    window.addEventListener('keydown', closeExerciseCardByEscape);
  }

  function closeExerciseCardByEscape(e) {
    if (e.key === 'Escape') {
      closeExerciseModal();
    }
  }
  function closeRatingModalByEscape(e) {
    if (e.key === 'Escape') {
      closeRatingModal();
    }
  }
  function closeRatingModal() {
    const ratingBackdrop = document.querySelector(
      '[data-modal-rating-backdrop]'
    );
    const ratingContainer = document.querySelector(
      '[data-modal-rating-container]'
    );
    ratingBackdrop.classList.add('backdrop-rating-is-hidden');
    ratingContainer.classList.add('modal-rating-is-hidden');
    modalBackdrop.classList.remove('backdrop-is-hidden');
    modalExercise.classList.remove('modal-is-hidden');
  }

  function openRatingModal(){
    const ratingBackdrop = document.querySelector(
      '[data-modal-rating-backdrop]'
    );
    const ratingContainer = document.querySelector(
      '[data-modal-rating-container]'
    );
    ratingBackdrop.classList.remove('backdrop-rating-is-hidden');
    ratingContainer.classList.remove('modal-rating-is-hidden');
    closeExerciseModal();
    window.removeEventListener('keydown', closeExerciseCardByEscape);
    window.addEventListener('keydown', closeRatingModalByEscape);
  }
};
