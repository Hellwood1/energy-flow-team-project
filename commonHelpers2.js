import{E as n}from"./assets/main-486810d4.js";import"./assets/vendor-c4bdd18a.js";const d=document.querySelector(".favorites-list");document.querySelector(".favorites-div-without-cards");const c=document.querySelector(".favorites-div-without-cards "),r="favoriteExerciseIds",l=new n;function v(e){console.log(e);const t=e.map(s=>`
<li class="exercises-card">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${s.rating.toFixed(1)} <span>
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
          <p class="card-exercise-name">${p(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${s.target}</span></p>
        </div>
      </li>
  `).join("");d.insertAdjacentHTML("beforeend",t)}function p(e){return e.charAt(0).toUpperCase()+e.slice(1)}const u=document.querySelectorAll(".card-delete");u.forEach(e=>{e.addEventListener("click",()=>{const t=globalThis.id,s=i(),o=s.indexOf(t);o!==-1&&(s.splice(o,1),localStorage.setItem(r,JSON.stringify(s))),g(t)})});function g(e){const t=document.querySelector(`.exercises-card[data-id="${e}"]`);t&&t.remove()}const h=document.querySelectorAll(".card-start"),m=document.querySelector(".exercise-modal-backdrop");h.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("backdrop-is-hidden")})});const f=document.querySelectorAll(".exercise-favorite-add-btn");f.forEach(e=>{e.addEventListener("click",()=>{const t=globalThis.id;console.log(t);const s=i();s.includes(t)?console.log("this exersice is already in favorites"):(s.push(t),localStorage.setItem(r,JSON.stringify(s)))})});function i(){const e=localStorage.getItem(r);return e?JSON.parse(e):[]}const a=i(),x=async e=>{const t=e.map(s=>l.getExerciseInfoById(s));return Promise.all(t)};a.length!==0?(c.classList.add("favorites-div-without-cards-hidden"),x(a).then(e=>{v(e)}).catch(e=>{console.error("Error fetching data:",e)})):c.classList.remove("favorites-div-without-cards-hidden");
//# sourceMappingURL=commonHelpers2.js.map
