import EnergyFlowApiSevice from './api-service';
import {
  showMessageBadRequest,
  showMessageRatingFailed,
  showMessageRatingSuccess,
  showMessageConflictRequest,
} from './showMessage';
import {
  closeRatingModal,
  addListenersToCloseRatingModal,
} from './manageModals';
export const initRating = (ratingsElement = []) => {
  let ratingActive;
  let ratingValue;
  ratingsElement.forEach(rating => initRatings(rating));

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
};

export const addListenersToRatingModal = () => {
  const ratings = document.querySelectorAll('.rating-container');
  const form = document.querySelector('.rating-form');
  let response = {};
  addListenersToCloseRatingModal();
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
    let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (email.match(reg) === null) {
      return showMessageConflictRequest(`Please, enter the valid email :)`);
    }
    request
      .giveRating(id, rating, email, comment)
      .then(resp => {
        if (resp.status === 200) {
          showMessageRatingSuccess();
          closeRatingModal();
        } else {
          showMessageRatingFailed();
        }
      })
      .catch(error => showMessageBadRequest());

    const ratingForm = document.querySelector('.set-rating');
    let ratingValue = ratingForm.querySelector('.rating-value');
    let ratingActive = ratingForm.querySelector('.rating-active');
    ratingValue.textContent = '0.0';
    ratingActive.style.width = '0%';
    form.reset();
  };
  form.addEventListener('submit', sendRating);

  initRating(ratings);
};
