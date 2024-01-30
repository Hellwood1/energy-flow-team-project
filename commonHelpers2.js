import{c as d,E as l,i as r}from"./assets/quote-5164d01e.js";import"./assets/vendor-c4bdd18a.js";const v=document.querySelector(".navigation__links--box");v.lastElementChild.classList.add("active-page");d();const u=document.querySelector(".favorites-list");document.querySelector(".favorites-div-without-cards");const a=document.querySelector(".favorites-div-without-cards "),i="favoriteExerciseIds",p=new l;function g(e){console.log(e);const t=e.map(s=>`

      <li class="exercises-card" id="${s._id}">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${s.rating.toFixed(1)} <span>
              <svg class="rating-icon" width="18" height="18">
              <use href="${r}#icon-star"></use></svg>
            </span></div>
            <button type="button" id="${s._id}" class="card-delete card-delte-inactive">
              <svg class="trash-icon" width="16" height="16">
              <use href="${r}#icon-trash"></use></svg>
            </button>
          </div>
          <button type="button" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="${r}#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="${r}#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${h(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${s.target}</span></p>
        </div>
      </li>
  `).join("");u.insertAdjacentHTML("beforeend",t)}function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}document.querySelector(".exercises-card");const m=document.querySelectorAll(".card-delete");m.forEach(e=>{e.addEventListener("click",()=>{const t=e.id,s=c(),o=s.indexOf(t);o!==-1&&(s.splice(o,1),localStorage.setItem(i,JSON.stringify(s))),f(t)})});function f(e){const t=document.querySelector(`.exercises-card[data-id="${e}"]`);t&&t.remove()}const x=document.querySelectorAll(".card-start"),S=document.querySelector(".exercise-modal-backdrop");x.forEach(e=>{e.addEventListener("click",()=>{S.classList.remove("backdrop-is-hidden")})});const y=document.querySelectorAll(".exercise-favorite-add-btn");y.forEach(e=>{e.addEventListener("click",()=>{const t=e.id;console.log(t);const s=c();s.includes(t)?console.log("this exersice is already in favorites"):(s.push(t),localStorage.setItem(i,JSON.stringify(s)))})});function c(){const e=localStorage.getItem(i);return e?JSON.parse(e):[]}const n=c(),E=async e=>{const t=e.map(s=>p.getExerciseInfoById(s));return Promise.all(t)};n.length!==0?(a.classList.add("favorites-div-without-cards-hidden"),E(n).then(e=>{g(e)}).catch(e=>{console.error("Error fetching data:",e)})):a.classList.remove("favorites-div-without-cards-hidden");
//# sourceMappingURL=commonHelpers2.js.map
