import{f as l,E as v,i as r}from"./assets/quote-ba0fec5d.js";import"./assets/vendor-c4bdd18a.js";const u=document.querySelector(".navigation__links--box");u.lastElementChild.classList.add("active-page");l();const p=document.querySelector(".favorites-list"),i=document.querySelector(".favorites-div-without-cards ");document.querySelector(".exercises-card");const c="favoriteExerciseIds",g=new v;function h(e){console.log(e);const s=e.map(t=>`

      <li class="exercises-card" id="${t._id}">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${t.rating.toFixed(1)} <span>
              <svg class="rating-icon" width="18" height="18">

              <use href="${r}#icon-star"></use></svg>

            </span></div>
            <button type="button" id="${t._id}" class="card-delete">
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
          <p class="card-exercise-name">${f(t.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
        </div>
      </li>
  `).join("");p.insertAdjacentHTML("beforeend",s),m()}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function m(){const e=document.querySelectorAll(".card-delete");console.log(e),e.forEach(s=>x(s))}function x(e){console.log(e),e.addEventListener("click",function(){const s=this.id;console.log(s);let n=a().filter(d=>d!==s);localStorage.setItem(c,JSON.stringify(n)),E(s)})}function E(e){const s=document.querySelector(`.exercises-card[id="${e}"]`);s&&s.remove()}function a(){const e=localStorage.getItem(c);return e?JSON.parse(e):[]}const o=a(),w=async e=>{const s=e.map(t=>g.getExerciseInfoById(t));return Promise.all(s)};o.length!==0?(i.classList.add("favorites-div-without-cards-hidden"),w(o).then(e=>{h(e)}).catch(e=>{console.error("Error fetching data:",e)})):i.classList.remove("favorites-div-without-cards-hidden");
//# sourceMappingURL=commonHelpers2.js.map
