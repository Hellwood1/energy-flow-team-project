

const exercisesCardList = document.querySelector(".exercises-list");
const exerciseCardNameWidth = document.querySelector(".card-exercise-name")

const energyFlowApiService = new EnergyFlowApiSevice();
energyFlowApiService.getExercisesByCategory("muscles", "abs", 1, 6)
  .then((response) => addCardToList(response.data.results));

export default function addCardToList(results) {
  const cardElement = results.map((cardData) => `
    <li class="exercises-card">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${cardData.rating} <span>
            <svg class="rating-icon" width="18" height="18">
            <use href="../images/sprite.svg#icon-star"></use></svg>
          </span></div>
          <button type="button" class="card-delete card-delete-inactive">
            <svg class="rating-icon" width="16" height="16">
            <use href="../images/sprite.svg#icon-trash"></use></svg>
          </button>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="rating-icon" width="14" height="14">
          <use href="../images/sprite.svg#icon-right-arrow"></use></svg>
        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="rating-icon" width="24" height="24">
          <use href="../images/sprite.svg#icon-runing-man"></use></svg>
        </div>
        <p class="card-exercise-name">${capitalizeFirstLetter(cardData.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${cardData.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${cardData.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${cardData.target}</span></p>
      </div>
    </li>
  `).join("");

  exercisesCardList.insertAdjacentHTML("beforeend", cardElement);

  let cardExerciseNames = exercisesCardList.querySelectorAll(".card-exercise-name");
  cardExerciseNames.forEach((element) => {
    truncateText(element);
  });
}

function truncateText(element) {
   let containerWidth =  exerciseCardNameWidth.clientWidth;
  let text = element.textContent.trim();

  if (element.scrollWidth > containerWidth) {
    let truncatedText = text;
    let i = text.length;

    while (element.scrollWidth > containerWidth && i > 0) {
      truncatedText = text.slice(0, i - 1);
      element.textContent = truncatedText + '...';
      i--;
    }
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


