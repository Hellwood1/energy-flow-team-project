import{d as h,m,c as f,b as y,E as S,r as w,e as g,f as x,i as o,g as L}from"./assets/header-modal-b68d4978.js";import"./assets/vendor-c4bdd18a.js";const I=document.querySelector(".favorites-page"),b=document.querySelector(".header-section");b.classList.add("header-section-favorites");I.classList.add("active-page");h();m();f();y();const n=document.querySelector(".favorites-list"),p=`<div class="favorites-no-results"><img
          class="favorites-div-without-cards-img"
          src="${o}"
          alt="dumbbell"
          width="85"
          height="52"
        />
        <p class="favorites-div-without-cards-text">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </p></div>`,a="favoriteExerciseIds",E=new S;let c=1,i=1;function d(e){const t=e.map(s=>`
    <div class="div-with-li" id="${s._id}">
    <button type="button" id="${s._id}" class="card-delete">
    <svg class="trash-icon" width="16" height="16">
    <use href="${o}#icon-trash"></use></svg>
  </button>
      <li class="exercises-card" id="${s._id}">

        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>

          </div>
          <button type="button" id="${s._id}" class="card-start">Start <span>
            <svg class="start-icon" width="14" height="14">
            <use href="${o}#icon-right-arrow"></use></svg>
          </span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg">
            <svg class="runing-man-icon" width="24" height="24">
            <use href="${o}#icon-runing-man"></use></svg>
          </div>
          <p class="card-exercise-name">${$(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${L(s.target)}</span></p>
        </div>
      </li>
      </div>
  `).join("");n.innerHTML=t}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.addEventListener("click",q);async function q(e){if(e.target.classList.contains("trash-icon"))return;let t=e.target.id;await w(t),document.querySelector(".exercise-favorite-add-btn").remove(),document.querySelector(".exercise-rating-give-btn").style.width="100%"}function M(e){if(!e.target.classList.contains("trash-icon"))return;let t=e.target.parentNode.id,r=JSON.parse(localStorage.getItem(a)).filter(l=>l!==t);localStorage.setItem(a,JSON.stringify(r)),c=Math.ceil(r.length/8),O(t),document.querySelectorAll(".div-with-li").length===0&&JSON.parse(localStorage.getItem(a)).length>0&&v(r).then(l=>{if(window.innerWidth<768){i=i-1,d(l.slice(0,8)),g(c,i,i),console.log(i),document.querySelectorAll(".exercises-navigation-number")[i-1].classList.add("pagination-current");return}})}function O(e){const t=document.querySelector(`.div-with-li[id="${e}"]`);if(t&&t.remove(),JSON.parse(localStorage.getItem(a)).length===0){n.innerHTML=p,document.querySelector(".exercises-navigation-list").innerHTML="";return}}n.addEventListener("click",M);function T(){const e=localStorage.getItem(a);return e?JSON.parse(e):[]}const u=T(),v=async e=>{const t=e.map(s=>E.getExerciseInfoById(s));return Promise.all(t)};u.length!==0?v(u).then(e=>{window.innerWidth<768?(d(e.slice(0,8)),c=Math.ceil(e.length/8),g(c,i,i),document.querySelector(".navigation-list-form").addEventListener("submit",F)):d(e)}).catch(e=>{x(),console.log(e)}):n.innerHTML=p;function F(e){e.preventDefault(),i=e.submitter.textContent;const t=JSON.parse(localStorage.getItem("favoriteExerciseIds"));let s=Math.ceil(t.length/8);v(u).then(r=>{d(r.slice((i-1)*8,i*8))}).catch(r=>{console.error("Error fetching data:",r)}),g(s,i,i)}
//# sourceMappingURL=commonHelpers2.js.map
