import{d as p,m as h,c as f,b as m,E as S,r as y,e as u,f as L,i as d,g as w}from"./assets/header-modal-00c621ab.js";import"./assets/vendor-c4bdd18a.js";const x=document.querySelector(".favorites-page"),b=document.querySelector(".header-section");b.classList.add("header-section-favorites");x.classList.add("active-page");p();h();f();m();const n=document.querySelector(".favorites-list"),v=`<div class="favorites-no-results"><img
          class="favorites-div-without-cards-img"
          src="${L}"
          alt="dumbbell"
          width="85"
          height="52"
        />
        <p class="favorites-div-without-cards-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </p></div>`,r="favoriteExerciseInfo",I=new S;let a=1,s=1;function c(e){const i=e.map(t=>`
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
          <p class="card-exercise-name">${E(t.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${w(t.target)}</span></p>
        </div>
      </li>
      </div>
  `).join("");n.innerHTML=i}function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.addEventListener("click",$);async function $(e){if(e.target.classList.contains("trash-icon"))return;let i=e.target.id;await y(i)}async function O(e){if(!e.target.classList.contains("trash-icon"))return;let i=e.target.parentNode.id,t=await I.getExerciseInfoById(i),l=JSON.parse(localStorage.getItem(r)).filter(g=>g._id!==t._id);if(localStorage.setItem(r,JSON.stringify(l)),a=Math.ceil(l.length/8),T(i),document.querySelectorAll(".div-with-li").length===0&&JSON.parse(localStorage.getItem(r)).length>0&&(localStorage.getItem(r),window.innerWidth<768))if(s=s-1,c(l.slice(0,8)),s>1){u(a,s,s),document.querySelectorAll(".exercises-navigation-number")[s-1].classList.add("pagination-current");return}else document.querySelector(".exercises-navigation-list").innerHTML=""}function T(e){const i=document.querySelector(`.div-with-li[id="${e}"]`);if(i&&i.remove(),JSON.parse(localStorage.getItem(r)).length===0){n.innerHTML=v,document.querySelector(".exercises-navigation-list").innerHTML="";return}}n.addEventListener("click",O);function M(){const e=localStorage.getItem(r);return e?JSON.parse(e):[]}const o=M();o.length!==0?window.innerWidth<768?(c(o.slice(0,8)),a=Math.ceil(o.length/8),a>1&&u(a,s,s),document.querySelector(".navigation-list-form").addEventListener("submit",q)):c(o):n.innerHTML=v;function q(e){e.preventDefault(),s=e.submitter.textContent;const i=JSON.parse(localStorage.getItem(r));let t=Math.ceil(i.length/8);c(i.slice((s-1)*8,s*8)),t>1&&u(t,s,s)}
//# sourceMappingURL=commonHelpers2.js.map
