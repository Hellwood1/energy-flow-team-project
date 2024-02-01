const modalExercise = document.querySelector('.exercise-modal');
const modalBackdrop = document.querySelector('.exercise-modal-backdrop');

const modalRating = document.querySelector('[data-modal-rating]');
const ratingBackdrop = document.querySelector('[data-modal-rating-backdrop]');
const ratingContainer = document.querySelector('[data-modal-rating-container]');
const closeRatingModalBtn = document.querySelector('[data-modal-rating-close]');
const upBtn = document.querySelector('.up-btn');
const bodyEl = document.querySelector('body');

const openExerciseModal = () => {
  bodyEl.classList.add('modal-open');
  modalBackdrop.classList.remove('backdrop-is-hidden');
  modalExercise.classList.remove('modal-is-hidden');
  if (upBtn) {
    upBtn.style.display = 'none';
  }
  window.addEventListener('keydown', closeExerciseCardByEscape);
};

const closeExerciseModal = () => {
  bodyEl.classList.remove('modal-open');
  modalBackdrop.classList.add('backdrop-is-hidden');
  modalExercise.classList.add('modal-is-hidden');
  window.removeEventListener('keydown', closeExerciseCardByEscape);
  if (upBtn) {
    upBtn.style.display = 'flex';
  }
};

const openRatingModal = () => {
  ratingBackdrop.classList.remove('backdrop-rating-is-hidden');
  ratingContainer.classList.remove('modal-rating-is-hidden');
  closeExerciseModal();
  bodyEl.classList.add('modal-open');
  if (upBtn) {
    upBtn.style.display = 'none';
  }
  window.removeEventListener('keydown', closeExerciseCardByEscape);
  window.addEventListener('keydown', closeRatingModalByEscape);
};
const closeRatingModal = () => {
  bodyEl.classList.remove('modal-open');
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
