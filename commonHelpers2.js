import{f as v,E as g,i}from"./assets/quote-53c236f5.js";import"./assets/vendor-c4bdd18a.js";const p=document.querySelector(".favorites-page"),h=document.querySelector(".header-section");h.classList.add("header-section-favorites");p.classList.add("active-page");v();const f=document.querySelector(".favorites-list"),c=document.querySelector(".favorites-div-without-cards ");document.querySelector(".exercises-card");const n="favoriteExerciseIds",m=new g;function a(e){console.log(e);const t=e.map(s=>`

      <li class="exercises-card" id="${s._id}">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${s.rating.toFixed(1)} <span>
              <svg class="rating-icon" width="18" height="18">

              <use href="${i}#icon-star"></use></svg>

            </span></div>
            <button type="button" id="${s._id}" class="card-delete">
              <svg class="trash-icon" width="16" height="16">

              <use href="${i}#icon-trash"></use></svg>

            </button>
          </div>
          <button type="button" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">

            <use href="${i}#icon-right-arrow"></use></svg>

          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">

            <use href="${i}#icon-runing-man"></use></svg>

          </div>
          <p class="card-exercise-name">${x(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${s.target}</span></p>
        </div>
      </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),E()}function x(e){return e.charAt(0).toUpperCase()+e.slice(1)}function E(){const e=document.querySelectorAll(".card-delete");console.log(e),e.forEach(t=>w(t))}function w(e){console.log(e),e.addEventListener("click",function(){const t=this.id;console.log(t);let r=d().filter(u=>u!==t);localStorage.setItem(n,JSON.stringify(r)),S(t)})}function S(e){const t=document.querySelector(`.exercises-card[id="${e}"]`);t&&t.remove()}function d(){const e=localStorage.getItem(n);return e?JSON.parse(e):[]}const o=d(),l=async e=>{const t=e.map(s=>m.getExerciseInfoById(s));return Promise.all(t)};o.length!==0?(c.classList.add("favorites-div-without-cards-hidden"),l(o).then(e=>{window.innerWidth<768?(a(e.slice(0,8)),totalFavoritesPages=Math.ceil(e.length/8),renderPageList(totalFavoritesPages,currentPage,currentPage),document.querySelector(".navigation-list-form").addEventListener("submit",L)):a(e)}).catch(e=>{console.error("Error fetching data:",e)})):c.classList.remove("favorites-div-without-cards-hidden");function L(e){e.preventDefault(),currentPage=e.submitter.textContent;const t=JSON.parse(localStorage.getItem("favoriteExerciseIds"));let s=Math.ceil(t.length/8);l(o).then(r=>{a(r.slice((currentPage-1)*8,currentPage*8))}).catch(r=>{console.error("Error fetching data:",r)}),renderPageList(s,currentPage,currentPage)}
//# sourceMappingURL=commonHelpers2.js.map
