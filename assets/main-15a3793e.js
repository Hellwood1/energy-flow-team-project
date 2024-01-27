import{a as o,i as U}from"./vendor-7af2edd1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const p=document.querySelector(".exercise-modal-backdrop"),F=document.querySelector(".exercise-modal-close-btn"),y=()=>{const e=document.querySelector(".exercise-modal");p.classList.add("backdrop-is-hidden"),e.classList.add("modal-is-hidden")};p.addEventListener("click",e=>{e.target!==F&&e.target!==p||y()});window.addEventListener("keydown",e=>{e.key==="Escape"&&y()});const M=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
    class="category-item"
    data-filter="${r}"
    data-name="${s}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${n}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${s[0].toUpperCase()+s.slice(1)}</h3>
    <p class="category-filter">${r}</p>
    </div>
  </li>`,"");class l{constructor(){o.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await o.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const a=new URLSearchParams({[t]:s,page:r,limit:n});return(await o.get(`${this.BASE_URL}/exercises?${a}`)).data}async getExercisesByKeyWord(t,s,r,n,a){const c=new URLSearchParams({[t]:s,keyword:r,page:n,limit:a});return(await o.get(`${this.BASE_URL}/exercises?${c}`)).data}async getExerciseInfoById(t){return(await o.get(`${this.BASE_URL}/exercises/${t}`)).data}async getAllExercises(){return(await o.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await o.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await o({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const q=()=>{U.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},O=(e,t="hidden")=>{e.classList.add(t)},T=(e,t="hidden")=>{e.classList.remove(t)};let i=1,E="test";document.querySelector(".navigation-list-form");const B=document.querySelector(".exercises-navigation-list");function N(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function x(e,t){const s=N(e,t).map(r=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${r}">${r}</button>
      </li>`).join("");B.innerHTML=s,H()}function _(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;i=e.submitter.textContent,E=k(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?w(E):u?I():$()}function v(){i=1}function H(){const e=document.querySelectorAll(".exercises-navigation-item");if(i<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===i&&e[t].firstElementChild.classList.add("pagination-current")}function W(){B.innerHTML=""}const L=document.querySelector(".exercises-search-wrap");let m,d,P=window.innerWidth<=1440?8:9,u=!1;function $(e){const t=new l;if(u=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;v(),m=k(e.target.dataset.filter),d=e.target.dataset.name}try{return t.getExercisesByCategory(m,d,i,P).then(s=>{const r=A(s.results);x(s.totalPages,i),Q(j(d)),h(r),z()})}catch{q()}}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function K(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),S()}function z(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",J),e.addEventListener("input",V)}function k(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function A(e){return e.map(t=>`<li class="exercises-card" data-id="${t.id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating}<span>
            <svg class="rating-icon" width="18" height="18">
            <use href="../images/sprite.svg#icon-star"></use></svg>
          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">
          <use href="../images/sprite.svg#icon-right-arrow"></use></svg>
        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">
          <use href="../images/sprite.svg#icon-runing-man"></use></svg>
        </div>
        <p class="card-exercise-name">${t.name}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
      </div>
    </li>`).join("")}function h(e){f.innerHTML=e}function Q(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function J(e){e.preventDefault(),v(),I()}function I(){u=!0;const e=L.firstElementChild.value;new l().getExercisesByKeyWord(m,d,e,i,P).then(s=>{if(s.results.length<=0)return W(),h('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');x(s.totalPages,i);const r=A(s.results);h(r)})}function V(){const e=L.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",S)):D()}function D(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",S)}function S(){u=!1,L.reset(),D()}const f=document.querySelector(".categories-list"),Y=document.querySelector(".category-btns-list"),R=document.querySelector(".exercises-title"),g=document.querySelector(".exercises-path-name"),G=document.querySelector(".navigation-list-form"),X=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>T(s,"current-category-btn")),O(t,"current-category-btn")}))},w=async e=>{const t=new l,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,i,s);x(r.totalPages,i),f.innerHTML=M(r),f.addEventListener("click",$),G.addEventListener("submit",_)}catch{q()}},b=async e=>{const t=e.target.textContent.trim();v(),Z(),w(t)};function Z(){g.textContent!==""&&(R.textContent="Exercises",g.textContent="",g.classList.add("hidden"),K())}const ee=()=>{window.addEventListener("load",X),window.addEventListener("load",w),Y.addEventListener("click",b),R.addEventListener("click",b)},te=document.querySelector(".quote-text"),se=document.querySelector(".quote-author"),re=new l,ne=async()=>{try{const e=await re.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},ae=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ne(),C()};function C(){const e=JSON.parse(localStorage.getItem("quoteObj"));te.innerHTML=e.quote,se.innerHTML=e.author}ee();y();ae();
//# sourceMappingURL=main-15a3793e.js.map
