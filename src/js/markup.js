import spriteUrl from '../images/sprite.svg';

const categoriesMarkup = ({ results = [] }) => {
  return results.reduce(
    (html, { name, filter, imgUrl }) =>
      html +
      `<li
    class="category-item"
    data-filter="${filter}"
    data-name="${name}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${imgUrl}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${name[0].toUpperCase() + name.slice(1)}</h3>
    <p class="category-filter">${filter}</p>
    </div>
  </li>`,
    ''
  );
};

const exerciseCardMarkup = ({
  gifUrl,
  name,
  rating,
  target,
  bodyPart,
  equipment,
  popularity,
  burnedCalories,
  description,
  _id,
}) => {
  return `
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${spriteUrl}#icon-close-modal"></use>
    </svg>
  </button>
  <img
    src="${gifUrl}"
    class="exercise-modal-img"
    width="295"
    height="258"
    alt="Exercise-img"
  />
  <div class="exercise-modal-info">
    <div class="exercise-modal-hero">
      <h3 class="exercise-modal-title">${
        name[0].toUpperCase() + name.slice(1)
      }</h3>
            <div class="rating-container">
              <div class="rating-value">${rating}</div>
              <div class="rating-body">
                <div class="rating-active"></div>
              </div>
            </div>
    </div>
    <ul class="exercise-tags-list">
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Target</p>
        <p class="exercise-tags-value">${target}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${bodyPart}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${equipment}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${popularity}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${burnedCalories}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${description}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn" data-name="exercise-favorite-btn" id="${_id}">
        <p>Add to favorites</p>
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${spriteUrl}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${_id}">
        Give a rating
      </button>
    </div>
  </div>
`;
};
export { categoriesMarkup, exerciseCardMarkup };
