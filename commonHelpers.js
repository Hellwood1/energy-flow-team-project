import{r as A,E as h,s as w,i as d,a as D,c as H,m as N,b as O,d as R,e as U}from"./assets/header-modal-ebdd0605.js";import"./assets/vendor-c4bdd18a.js";const W=(e,t="hidden")=>{e.classList.add(t)},K=(e,t="hidden")=>{e.classList.remove(t)};let r=1,E="test";document.querySelector(".navigation-list-form");const C=document.querySelector(".exercises-navigation-list");function j(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function g(e,t,s){const n=j(e,t).map(o=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${o}">${o}</button>
      </li>`).join("");C.innerHTML=n,z(s)}function V(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(r=e.submitter.textContent,E=F(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?L(E):a?M():P())}function f(){r=1}function z(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function Y(){C.innerHTML=""}function b(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const v=document.querySelector(".exercises-search-wrap");let u,c,q=window.innerWidth<=1440?8:9,a=!1;function P(e){const t=new h;if(a=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;f(),u=F(e.target.dataset.filter),c=e.target.dataset.name}try{return t.getExercisesByCategory(u,c,r,q).then(s=>{const n=k(s.results);g(s.totalPages,r,r),G(B(c)),m(n),_(),b(y)})}catch{w()}}function B(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Z(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),x()}function _(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",J),e.addEventListener("input",Q)}function F(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function k(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${d}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${d}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${d}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${B(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${X(t.target)}</span></p>
      </div>
    </li>`).join("")}function m(e){i.classList.add("exercise-list"),i.innerHTML=e}function G(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function J(e){e.preventDefault(),f(),M()}function M(){a=!0;const e=v.firstElementChild.value;new h().getExercisesByKeyWord(u,c,e,r,q).then(s=>{if(s.results.length<=0)return Y(),m('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');g(s.totalPages,r,r);const n=k(s.results);m(n)})}function Q(){const e=v.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",x)):T()}function T(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",x)}function x(){a=!1,v.reset(),T()}function X(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",ee);function ee(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;A(t)}}const i=document.querySelector(".categories-list"),te=document.querySelector(".category-btns-list"),$=document.querySelector(".exercises-title"),l=document.querySelector(".exercises-path-name"),se=document.querySelector(".navigation-list-form"),ne=document.querySelector(".footer-subscription"),y=document.querySelector(".categories-list"),re=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>K(s,"current-category-btn")),W(t,"current-category-btn")}))},ie=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&y.classList.add("on-animate")})}),L=async e=>{const t=new h,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,r,s);g(n.totalPages,r,r),i.innerHTML=H(n),i.addEventListener("click",P),se.addEventListener("submit",V),b(i),ie.observe(y)}catch{w()}},S=async e=>{const t=e.target.textContent.trim();f(),ce(),await L(t),i.classList.contains("exercise-list")&&i.classList.remove("exercise-list")};function ce(){l.textContent!==""&&($.textContent="Exercises",l.textContent="",l.classList.add("hidden"),Z())}const ae=()=>{window.addEventListener("load",re),window.addEventListener("load",L),te.addEventListener("click",S),$.addEventListener("click",S),ne.addEventListener("submit",D)},p=document.querySelector(".up-btn");p.addEventListener("click",oe);window.onscroll=function(){I()};function I(){document.documentElement.scrollTop>2e3?p.style.display="block":p.style.display="none"}function oe(){document.documentElement.scrollTop=0}N();ae();O();R();I();U();
//# sourceMappingURL=commonHelpers.js.map
