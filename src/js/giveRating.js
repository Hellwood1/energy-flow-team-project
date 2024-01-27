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
//   const form = document.querySelector('.rating-form');
//   let response = {};
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const data = new FormData(form);
//     data.forEach((value, key) => {
//       response[key] = value;
//     });
//     console.log(response);
//     ratingValue.innerHTML = 0.0;
//     setRatingActiveWidth()
//     form.reset();
//   });
};
