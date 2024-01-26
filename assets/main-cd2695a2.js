import{a,i as u}from"./vendor-7af2edd1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const c=document.querySelector(".exercise-modal-backdrop"),g=document.querySelector(".exercise-modal-close-btn"),d=()=>{const s=document.querySelector(".exercise-modal");c.classList.add("backdrop-is-hidden"),s.classList.add("modal-is-hidden")};c.addEventListener("click",s=>{s.target!==g&&s.target!==c||d()});window.addEventListener("keydown",s=>{s.key==="Escape"&&d()});const p=({results:s=[]})=>s.reduce((e,{name:r,filter:n,imgUrl:t})=>e+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${r}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${t}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${r[0].toUpperCase()+r.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,"");class y{constructor(){a.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(e,r,n){const t=new URLSearchParams({filter:e,page:r,limit:n});return(await a.get(`${this.BASE_URL}/filters?${t}`)).data}async getExercisesByCategory(e,r,n,t){const o=new URLSearchParams({[e]:r,page:n,limit:t});return(await a.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(e,r,n,t,o){const i=new URLSearchParams({[e]:r,keyword:n,page:t,limit:o});return(await a.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(e){return(await a.get(`${this.BASE_URL}/exercises/${e}`)).data}async getAllExercises(){return(await a.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await a.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(e){return(await a({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:e}})).data}}const m=()=>{u.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},f=(s,e="hidden")=>{s.classList.add(e)},h=(s,e="hidden")=>{s.classList.remove(e)},L=document.querySelector(".category-btns-list"),w=()=>{const s=document.querySelectorAll(".category-btn");s.forEach(e=>e.addEventListener("click",()=>{s.forEach(r=>h(r,"current-category-btn")),f(e,"current-category-btn")}))},l=async s=>{const e=document.querySelector(".categories-list"),r=new y,n=window.innerWidth<768?8:12;s=document.querySelector(".current-category-btn").textContent.trim();try{const t=await r.getCategoriesByFilter(s,1,n);e.innerHTML=p(t)}catch{m()}},E=async s=>{const e=s.target.textContent.trim();l(e)},S=()=>{window.addEventListener("load",w),window.addEventListener("load",l),L.addEventListener("click",E)};d();S();
//# sourceMappingURL=main-cd2695a2.js.map
