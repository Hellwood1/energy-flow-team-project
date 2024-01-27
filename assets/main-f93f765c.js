import{a as o,i as C}from"./vendor-7af2edd1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const l=document.querySelector(".exercise-modal-backdrop"),B=document.querySelector(".exercise-modal-close-btn"),h=()=>{const e=document.querySelector(".exercise-modal");l.classList.add("backdrop-is-hidden"),e.classList.add("modal-is-hidden")};l.addEventListener("click",e=>{e.target!==B&&e.target!==l||h()});window.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const $=({results:e=[]})=>e.reduce((t,{name:r,filter:n,imgUrl:s})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${r}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${s}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${r[0].toUpperCase()+r.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,"");class g{constructor(){o.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,r,n){const s=new URLSearchParams({filter:t,page:r,limit:n});return(await o.get(`${this.BASE_URL}/filters?${s}`)).data}async getExercisesByCategory(t,r,n,s){const a=new URLSearchParams({[t]:r,page:n,limit:s});return(await o.get(`${this.BASE_URL}/exercises?${a}`)).data}async getExercisesByKeyWord(t,r,n,s,a){const c=new URLSearchParams({[t]:r,keyword:n,page:s,limit:a});return(await o.get(`${this.BASE_URL}/exercises?${c}`)).data}async getExerciseInfoById(t){return(await o.get(`${this.BASE_URL}/exercises/${t}`)).data}async getAllExercises(){return(await o.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await o.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await o({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const v=()=>{C.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},q=(e,t="hidden")=>{e.classList.add(t)},k=(e,t="hidden")=>{e.classList.remove(t)},y=document.querySelector(".exercises-search-wrap");let u,i,w=window.innerWidth<=1440?8:9;function P(e){if(e.target.nodeName!=="LI")return;const t=new g;u=F(e.target.dataset.filter),i=e.target.dataset.name;try{return t.getExercisesByCategory(u,i,1,w).then(r=>{const n=L(r.results);I(A(i)),p(n),U()})}catch{v()}}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}function R(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),f()}function U(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",M),e.addEventListener("input",O)}function F(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function L(e){return e.map(t=>`
        <li class="exercises-card">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${t.rating} <span></span></div>
            <button type="button" class="card-delete card-delete-inactive"></button>
          </div>
            <button type="button" class="card-start">Start <span></span></button>
        </div>
        <div class="exercises-card-midle-part">
          <div class="exercises-card-midle-part-svg"></div>
          <p class="card-exercise-name">${t.name}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${t.target}</span></p>
        </div>
      </li>
        `).join("")}function p(e){m.innerHTML=e}function I(e){const t=document.querySelector(".exercises-title"),r=document.querySelector(".exercises-path-name");t.textContent="Exercises /",r.textContent=e,r.classList.remove("hidden")}function M(e){e.preventDefault();const t=y.firstElementChild.value;new g().getExercisesByKeyWord(u,i,t,1,w).then(n=>{if(n.results.length<=0)return p('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');const s=L(n.results);p(s)})}function O(){const e=y.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",f)):E()}function E(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",f)}function f(){y.reset(),E()}const m=document.querySelector(".categories-list"),_=document.querySelector(".category-btns-list"),S=document.querySelector(".exercises-title"),d=document.querySelector(".exercises-path-name"),N=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(r=>k(r,"current-category-btn")),q(t,"current-category-btn")}))},b=async e=>{const t=new g,r=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,1,r);m.innerHTML=$(n),m.addEventListener("click",P)}catch{v()}},x=async e=>{const t=e.target.textContent.trim();T(),b(t)};function T(){d.textContent!==""&&(S.textContent="Exercises",d.textContent="",d.classList.add("hidden"),R())}const W=()=>{window.addEventListener("load",N),window.addEventListener("load",b),_.addEventListener("click",x),S.addEventListener("click",x)};W();h();
//# sourceMappingURL=main-f93f765c.js.map
