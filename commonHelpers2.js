import{E as d,i as r}from"./assets/api-service-af5b7599.js";import"./assets/vendor-c4bdd18a.js";const l=document.querySelector(".navigation__links--box");l.lastElementChild.classList.add("active-page");function u(){const e=JSON.parse(localStorage.getItem("quoteObj"));document.querySelector(".quote-text").innerHTML=e.quote,document.querySelector(".quote-author").innerHTML=e.author}u();const v=document.querySelector(".favorites-list");document.querySelector(".favorites-div-without-cards");const a=document.querySelector(".favorites-div-without-cards "),o="favoriteExerciseIds",p=new d;function g(e){console.log(e);const s=e.map(t=>`

      <li class="exercises-card" id="${t._id}">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${t.rating.toFixed(1)} <span>
              <svg class="rating-icon" width="18" height="18">
              <use href="${r}#icon-star"></use></svg>
            </span></div>
            <button type="button" id="${t._id}" class="card-delete card-delte-inactive">
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
          <p class="card-exercise-name">${m(t.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
        </div>
      </li>
  `).join("");v.insertAdjacentHTML("beforeend",s)}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}document.querySelector(".exercises-card");const h=document.querySelectorAll(".card-delete");h.forEach(e=>{e.addEventListener("click",()=>{const s=e.id,t=i(),c=t.indexOf(s);c!==-1&&(t.splice(c,1),localStorage.setItem(o,JSON.stringify(t))),f(s)})});function f(e){const s=document.querySelector(`.exercises-card[data-id="${e}"]`);s&&s.remove()}const x=document.querySelectorAll(".card-start"),S=document.querySelector(".exercise-modal-backdrop");x.forEach(e=>{e.addEventListener("click",()=>{S.classList.remove("backdrop-is-hidden")})});const y=document.querySelectorAll(".exercise-favorite-add-btn");y.forEach(e=>{e.addEventListener("click",()=>{const s=e.id;console.log(s);const t=i();t.includes(s)?console.log("this exersice is already in favorites"):(t.push(s),localStorage.setItem(o,JSON.stringify(t)))})});function i(){const e=localStorage.getItem(o);return e?JSON.parse(e):[]}const n=i(),E=async e=>{const s=e.map(t=>p.getExerciseInfoById(t));return Promise.all(s)};n.length!==0?(a.classList.add("favorites-div-without-cards-hidden"),E(n).then(e=>{g(e)}).catch(e=>{console.error("Error fetching data:",e)})):a.classList.remove("favorites-div-without-cards-hidden");
//# sourceMappingURL=commonHelpers2.js.map
