const closeModalBtn = document.querySelector('.exercise-modal-close-btn');

const closeModal = () => {
  const backdropExercise = document.querySelector('.exercise-modal-backdrop');
  const modalExercise = document.querySelector('.exercise-modal');
  backdropExercise.classList.add('backdrop-is-hidden');
  modalExercise.classList.add('modal-is-hidden');
};

closeModalBtn.addEventListener('click', closeModal);

export { closeModal };
