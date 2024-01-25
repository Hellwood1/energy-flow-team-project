const modalBackdrop = document.querySelector('.exercise-modal-backdrop');
const closeModealBtn = document.querySelector('.exercise-modal-close-btn');

const closeModal = () => {
  const modalExercise = document.querySelector('.exercise-modal');
  modalBackdrop.classList.add('backdrop-is-hidden');
  modalExercise.classList.add('modal-is-hidden');
};

modalBackdrop.addEventListener('click', e => {
  if (e.target !== closeModealBtn && e.target !== modalBackdrop) {
    return;
  }
  closeModal();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export { closeModal };
