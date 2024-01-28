import{E as a}from"./assets/main-53fdd983.js";import"./assets/vendor-c4bdd18a.js";const o=document.querySelector(".favorites-list");document.querySelector(".card-exercise-name");document.querySelector(".favorites-div-without-cards");const r="favoriteExerciseIds",n=new a;n.getExercisesByCategory("muscles","abs",1,6).then(e=>d(e.results));function d(e){console.log(e);const t=e.map(s=>`
      <li class="exercises-card">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${s.rating} <span>
              <svg class="rating-icon" width="18" height="18">
              <use href="./images/sprite.svg#icon-star"></use></svg>
            </span></div>
            <button type="button" id="${s._id}" class="card-delete card-delte-inactive">
              <svg class="trash-icon" width="16" height="16">
              <use href="./images/sprite.svg#icon-trash"></use></svg>
            </button>
          </div>
          <button type="button" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="./images/sprite.svg#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="./images/sprite.svg#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${l(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${s.target}</span></p>
        </div>
      </li>
  `).join("");o.insertAdjacentHTML("beforeend",t)}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}const v=document.querySelectorAll(".card-delete");v.forEach(e=>{e.addEventListener("click",()=>{const t=globalThis.id,s=c(),i=s.indexOf(t);i!==-1&&(s.splice(i,1),localStorage.setItem(r,JSON.stringify(s))),p(t)})});function p(e){const t=document.querySelector(`.exercises-card[data-id="${e}"]`);t&&t.remove()}const u=document.querySelectorAll(".exercise-favorite-add-btn");u.forEach(e=>{e.addEventListener("click",async function(){const t=this.id;console.log(t);const s=c();s.includes(t)?console.log("this exersice is already in favorites"):(s.push(t),localStorage.setItem(r,JSON.stringify(s)))})});function c(){const e=localStorage.getItem(r);return e?JSON.parse(e):[]}
//# sourceMappingURL=commonHelpers2.js.map
