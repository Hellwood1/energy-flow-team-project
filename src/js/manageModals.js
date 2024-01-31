const modalExercise = document.querySelector('.exercise-modal');
const modalBackdrop = document.querySelector('.exercise-modal-backdrop');

const modalRating = document.querySelector('[data-modal-rating]');
const ratingBackdrop = document.querySelector('[data-modal-rating-backdrop]');
const ratingContainer = document.querySelector('[data-modal-rating-container]');
const closeRatingModalBtn = document.querySelector('[data-modal-rating-close]');

const openExerciseModal = () => {
  modalBackdrop.classList.remove('backdrop-is-hidden');
  modalExercise.classList.remove('modal-is-hidden');
  window.addEventListener('keydown', closeExerciseCardByEscape);
};

const closeExerciseModal = () => {
  modalBackdrop.classList.add('backdrop-is-hidden');
  modalExercise.classList.add('modal-is-hidden');
  window.removeEventListener('keydown', closeExerciseCardByEscape);
};

const openRatingModal = () => {
  ratingBackdrop.classList.remove('backdrop-rating-is-hidden');
  ratingContainer.classList.remove('modal-rating-is-hidden');
  closeExerciseModal();
  window.removeEventListener('keydown', closeExerciseCardByEscape);
  window.addEventListener('keydown', closeRatingModalByEscape);
};
const closeRatingModal = () => {
  ratingBackdrop.classList.add('backdrop-rating-is-hidden');
  ratingContainer.classList.add('modal-rating-is-hidden');
  openExerciseModal();
  window.removeEventListener('keydown', closeRatingModalByEscape);
  window.addEventListener('keydown', closeExerciseCardByEscape);
};

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

const addListenersToCloseRatingModal = () => {
  closeRatingModalBtn.addEventListener('click', closeRatingModal);

  modalRating.addEventListener('click', e => {
    if (e.target !== ratingBackdrop && e.target !== closeRatingModalBtn) return;
    closeRatingModal();
  });
};

export {
  addListenersToCloseRatingModal,
  closeRatingModal,
  openRatingModal,
  closeExerciseModal,
  openExerciseModal,
  modalBackdrop,
  modalExercise,
};
