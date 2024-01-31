import{d as h,m,c as f,E as S,r as v,e as w,i as d,f as L}from"./assets/header-modal-73e0fc00.js";import"./assets/vendor-c4bdd18a.js";const x=document.querySelector(".favorites-page"),y=document.querySelector(".header-section");y.classList.add("header-section-favorites");x.classList.add("active-page");h();m();f();const p=document.querySelector(".favorites-list"),l=document.querySelector(".favorites-div-without-cards "),a="favoriteExerciseIds",E=new S;let o=1,i=1;function n(e){const s=e.map(t=>`
    <div class="div-with-li" id="${t._id}">
    <button type="button" id="${t._id}" class="card-delete">
    <svg class="trash-icon" width="16" height="16">
    <use href="${d}#icon-trash"></use></svg>
  </button>
      <li class="exercises-card" id="${t._id}">

        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>

          </div>
          <button type="button" id="${t._id}" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="${d}#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="${d}#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${I(t.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
        </div>
      </li>
      </div>
  `).join("");p.innerHTML=s,b()}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(){document.querySelectorAll(".exercises-card").forEach(s=>s.addEventListener("click",t=>{const r=t.target.id;L(r)}))}function F(e){if(!e.target.classList.contains("trash-icon"))return;let s=e.target.parentNode.id,r=JSON.parse(localStorage.getItem(a)).filter(c=>c!==s);localStorage.setItem(a,JSON.stringify(r)),o=Math.ceil(r.length/8),$(s),document.querySelectorAll(".div-with-li").length===0&&JSON.parse(localStorage.getItem(a)).length>0&&g(r).then(c=>{if(window.innerWidth<768){console.log("noooooooo"),i=i-1,n(c.slice(0,8)),v(o,i,i),console.log(i),document.querySelectorAll(".exercises-navigation-number")[i-1].classList.add("pagination-current");return}})}function $(e){const s=document.querySelector(`.div-with-li[id="${e}"]`);if(s&&s.remove(),JSON.parse(localStorage.getItem(a)).length===0){l.classList.remove("favorites-div-without-cards-hidden"),document.querySelector(".exercises-navigation-list").innerHTML="";return}}p.addEventListener("click",F);function q(){const e=localStorage.getItem(a);return e?JSON.parse(e):[]}const u=q(),g=async e=>{const s=e.map(t=>E.getExerciseInfoById(t));return Promise.all(s)};u.length!==0?(l.classList.add("favorites-div-without-cards-hidden"),g(u).then(e=>{window.innerWidth<768?(n(e.slice(0,8)),o=Math.ceil(e.length/8),v(o,i,i),document.querySelector(".navigation-list-form").addEventListener("submit",A)):n(e)}).catch(e=>{w(),console.log(e)})):l.classList.remove("favorites-div-without-cards-hidden");function A(e){e.preventDefault(),i=e.submitter.textContent;const s=JSON.parse(localStorage.getItem("favoriteExerciseIds"));let t=Math.ceil(s.length/8);g(u).then(r=>{n(r.slice((i-1)*8,i*8))}).catch(r=>{console.error("Error fetching data:",r)}),v(t,i,i)}
//# sourceMappingURL=commonHelpers2.js.map
