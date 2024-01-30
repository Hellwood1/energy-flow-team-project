import EnergyFlowApiSevice from './api-service';
import { exerciseCardMarkup } from './markup';
import { showMessageBadRequest } from './showMessage';
import { initRating } from './giveRating';
import {
  modalBackdrop,
  modalExercise,
  openExerciseModal,
  closeExerciseModal,
  openRatingModal,
} from './manageModals';
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

      closeModealBtn.addEventListener('click', closeExerciseModal);

      giveRatingButtons.forEach(button =>
        button.addEventListener('click', openRatingModal)
      );
    }
  } catch (error) {
    showMessageBadRequest();
  }
};
