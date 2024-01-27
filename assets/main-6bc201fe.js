import{a,i as C}from"./vendor-7af2edd1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const u=document.querySelector(".exercise-modal-backdrop"),B=document.querySelector(".exercise-modal-close-btn"),h=()=>{const e=document.querySelector(".exercise-modal");u.classList.add("backdrop-is-hidden"),e.classList.add("modal-is-hidden")};u.addEventListener("click",e=>{e.target!==B&&e.target!==u||h()});window.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const $=({results:e=[]})=>e.reduce((t,{name:r,filter:n,imgUrl:s})=>t+`<li
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
  </li>`,"");class d{constructor(){a.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,r,n){const s=new URLSearchParams({filter:t,page:r,limit:n});return(await a.get(`${this.BASE_URL}/filters?${s}`)).data}async getExercisesByCategory(t,r,n,s){const o=new URLSearchParams({[t]:r,page:n,limit:s});return(await a.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,r,n,s,o){const c=new URLSearchParams({[t]:r,keyword:n,page:s,limit:o});return(await a.get(`${this.BASE_URL}/exercises?${c}`)).data}async getExerciseInfoById(t){return(await a.get(`${this.BASE_URL}/exercises/${t}`)).data}async getAllExercises(){return(await a.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await a.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await a({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const S=()=>{C.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},k=(e,t="hidden")=>{e.classList.add(t)},P=(e,t="hidden")=>{e.classList.remove(t)},y=document.querySelector(".exercises-search-wrap");let p,i,v=window.innerWidth<=1440?8:9;function A(e){if(e.target.nodeName!=="LI")return;const t=new d;p=U(e.target.dataset.filter),i=e.target.dataset.name;try{return t.getExercisesByCategory(p,i,1,v).then(r=>{const n=L(r.results);F(I(i)),g(n),R()})}catch{S()}}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}function D(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),f()}function R(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",O),e.addEventListener("input",M)}function U(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function L(e){return e.map(t=>`
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
        `).join("")}function g(e){m.innerHTML=e}function F(e){const t=document.querySelector(".exercises-title"),r=document.querySelector(".exercises-path-name");t.textContent="Exercises /",r.textContent=e,r.classList.remove("hidden")}function O(e){e.preventDefault();const t=y.firstElementChild.value;new d().getExercisesByKeyWord(p,i,t,1,v).then(n=>{if(n.results.length<=0)return g('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');const s=L(n.results);g(s)})}function M(){const e=y.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",f)):E()}function E(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",f)}function f(){y.reset(),E()}const m=document.querySelector(".categories-list"),T=document.querySelector(".category-btns-list"),b=document.querySelector(".exercises-title"),l=document.querySelector(".exercises-path-name"),N=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(r=>P(r,"current-category-btn")),k(t,"current-category-btn")}))},q=async e=>{const t=new d,r=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,1,r);m.innerHTML=$(n),m.addEventListener("click",A)}catch{S()}},x=async e=>{const t=e.target.textContent.trim();_(),q(t)};function _(){l.textContent!==""&&(b.textContent="Exercises",l.textContent="",l.classList.add("hidden"),D())}const W=()=>{window.addEventListener("load",N),window.addEventListener("load",q),T.addEventListener("click",x),b.addEventListener("click",x)},j=document.querySelector(".quote-text"),z=document.querySelector(".quote-author"),H=new d,K=async()=>{try{const e=await H.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},Q=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await K(),w()};function w(){const e=JSON.parse(localStorage.getItem("quoteObj"));j.innerHTML=e.quote,z.innerHTML=e.author}W();h();Q();
//# sourceMappingURL=main-6bc201fe.js.map
