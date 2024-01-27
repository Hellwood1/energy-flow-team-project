

const exercisesCardList = document.querySelector('.exercises-list');
const exerciseCardNameWidth = document.querySelector('.card-exercise-name');

const energyFlowApiService = new EnergyFlowApiSevice();

        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
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
        <p class="card-exercise-name">${capitalizeFirstLetter(
          cardData.name
        )}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${
          cardData.burnedCalories
        } / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${
          cardData.bodyPart
        }</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${
          cardData.target
        }</span></p>
      </div>
    </li>
  `
    )
    .join('');


  exercisesCardList.insertAdjacentHTML('beforeend', cardElement);

  let cardExerciseNames = exercisesCardList.querySelectorAll(
    '.card-exercise-name'
  );
  cardExerciseNames.forEach(element => {
    truncateText(element);
  });
}

function truncateText(element) {
  let containerWidth = exerciseCardNameWidth.clientWidth;
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


// --------------delete button-----------------------//

const removeFromFavoritesButtons = document.querySelectorAll(".card-delete");

removeFromFavoritesButtons.forEach(button => {
  button.addEventListener("click", () =>  {
    const exerciseIdToRemove = this.id;
    const favoriteExerciseIds = getFavoriteExerciseIds();
    const indexToRemove = favoriteExerciseIds.indexOf(exerciseIdToRemove);

    if (indexToRemove !== -1) {
      favoriteExerciseIds.splice(indexToRemove, 1);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteExerciseIds));
    }
    updateInterfaceAfterRemoval(exerciseIdToRemove);
  });
});

function updateInterfaceAfterRemoval(exerciseIdToRemove) {
  const cardToRemove = document.querySelector(`.exercises-card[data-id="${exerciseIdToRemove}"]`);/////якщо помилка то точно тут

  if (cardToRemove) {
    cardToRemove.remove();
  }
}

//--------------------- add to favorites---------------------------


const LOCAL_STORAGE_KEY = "favoriteExerciseIds";
const addToFavoritesButtons = document.querySelectorAll(".exercise-favorite-add-btn");

addToFavoritesButtons.forEach(button => {
  button.addEventListener("click", async function() {
    const exerciseId = this.id;
    console.log(exerciseId);

    const favoriteExerciseIds = getFavoriteExerciseIds();

    if (!favoriteExerciseIds.includes(exerciseId)) {
      favoriteExerciseIds.push(exerciseId);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteExerciseIds));
    } else {
      console.log("this exersice is already in favorites")
    }
    
    });
});

function getFavoriteExerciseIds() {
  const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedIds ? JSON.parse(storedIds) : [];
}
