import EnergyFlowApiSevice from './api-service';
import {
  showMessageBadRequest,
  showMessageRatingFailed,
  showMessageRatingSuccess,
} from './showMessage';
const ratings = document.querySelectorAll('.rating-container');

export const initRatings = () => {
  let ratingActive;
  let ratingValue;
  ratings.forEach(rating => initRatings(rating));

  // ініціюємо конкретний рейтинг
  function initRatings(rating) {
    initRatingsVariables(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('set-rating')) {
      setRating(rating);
    }
  }

  // ініціюємо активну полосу рейтингу, що буде змінюватись в залежності від заданої ширини
  function initRatingsVariables(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.rating-value');
  }

  // вираховуємо ширину по заданому індексу і змінюємо ширину активної полоси
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // можливість виставляти оцінку

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item');

    for (const ratingItem of ratingItems) {
      ratingItem.addEventListener('mouseenter', e => {
        initRatingsVariables(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', e => {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', e => {
        ratingItem.checked = true;
        initRatingsVariables(rating);
        ratingValue.innerHTML = ratingItem.value.padEnd(3, '.0');
        setRatingActiveWidth();
      });
    }
  }

  const form = document.querySelector('.rating-form');
  let response = {};

  const sendRating = async e => {
    e.preventDefault();
    const id = form.dataset.id;
    const data = new FormData(e.currentTarget);
    data.forEach((value, key) => {
      response[key] = value;
    });
    const rating = response.rate;
    const email = response.email;
    const comment = response.review;
    const request = new EnergyFlowApiSevice();

    try {
      const answer = await request.giveRating(id, rating, email, comment);
      console.log(answer);

      if (answer.status === 200) {
        showMessageRatingSuccess(answer.data.message);
      } else {
        showMessageRatingFailed(answer.data.message);
      }
    } catch (error) {
      showMessageBadRequest;
    }

    ratingValue.innerHTML = 0.0;
    setRatingActiveWidth();
    form.reset();
  };
  form.addEventListener('submit', sendRating);
};

export const manageRatingModal = () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-rating-open]'),
    closeModalBtn: document.querySelector('[data-modal-rating-close]'),
    modal: document.querySelector('[data-modal-rating]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
};
