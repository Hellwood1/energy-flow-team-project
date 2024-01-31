import{f as p,m,b as f,E,s as w,i,r as x}from"./assets/header-modal-1de1f9cf.js";import"./assets/vendor-c4bdd18a.js";const L=document.querySelector(".favorites-page"),S=document.querySelector(".header-section");S.classList.add("header-section-favorites");L.classList.add("active-page");p();m();f();const d=document.querySelector(".favorites-list"),a=document.querySelector(".favorites-div-without-cards "),l="favoriteExerciseIds",y=new E,c=1;function o(e){const s=e.map(t=>`
    <div class="div-with-li" id="${t._id}">
    <button type="button" id="${t._id}" class="card-delete">
    <svg class="trash-icon" width="16" height="16">
    <use href="${i}#icon-trash"></use></svg>
  </button>
      <li class="exercises-card" id="${t._id}">

        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>

          </div>
          <button type="button" id="${t._id}" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="${i}#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="${i}#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${F(t.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
        </div>
      </li>
      </div>
  `).join("");d.insertAdjacentHTML("beforeend",s),I(),b()}function F(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I(){document.querySelectorAll(".exercises-card").forEach(s=>s.addEventListener("click",t=>{const r=t.target.id;x(r)}))}function b(){document.querySelectorAll(".card-delete").forEach(P)}function P(e){e.addEventListener("click",s=>{const t=s.currentTarget.id;let h=u().filter(g=>g!==t);localStorage.setItem(l,JSON.stringify(h)),$(t)})}function $(e){const s=document.querySelector(`.div-with-li[id="${e}"]`);s&&s.remove(),d.querySelector(".div-with-li")===null||a.classList.remove("favorites-div-without-cards-hidden")}function u(){const e=localStorage.getItem(l);return e?JSON.parse(e):[]}const n=u(),v=async e=>{const s=e.map(t=>y.getExerciseInfoById(t));return Promise.all(s)};n.length!==0?(a.classList.add("favorites-div-without-cards-hidden"),v(n).then(e=>{window.innerWidth<768?(o(e.slice(0,8)),c=Math.ceil(e.length/8),renderPageList(c,currentPage,currentPage),document.querySelector(".navigation-list-form").addEventListener("submit",A)):o(e)}).catch(e=>{w()})):a.classList.remove("favorites-div-without-cards-hidden");function A(e){e.preventDefault(),currentPage=e.submitter.textContent;const s=JSON.parse(localStorage.getItem("favoriteExerciseIds"));let t=Math.ceil(s.length/8);v(n).then(r=>{o(r.slice((currentPage-1)*8,currentPage*8))}).catch(r=>{console.error("Error fetching data:",r)}),renderPageList(t,currentPage,currentPage)}
//# sourceMappingURL=commonHelpers2.js.map
