import{a as d,i as p}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const q="/energy-flow-team-project/assets/sprite-32ec9a67.svg",re=({results:e=[]})=>e.reduce((t,{name:a,filter:n,imgUrl:s})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${a}"
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
    <h3 class="category-name">${a[0].toUpperCase()+a.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,""),H=({gifUrl:e,name:t,rating:a,target:n,bodyPart:s,equipment:o,popularity:c,burnedCalories:r,description:l,_id:i})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${q}#icon-close-modal"></use>
    </svg>
  </button>
  <img
    src="${e}"
    class="exercise-modal-img"
    width="295"
    height="258"
    alt="Exercise-img"
  />
  <div class="exercise-modal-info">
    <div class="exercise-modal-hero">
      <h3 class="exercise-modal-title">${t[0].toUpperCase()+t.slice(1)}</h3>
            <div class="rating-container">
              <div class="rating-value">${a}</div>
              <div class="rating-body">
                <div class="rating-active"></div>
              </div>
            </div>
    </div>
    <ul class="exercise-tags-list">
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Target</p>
        <p class="exercise-tags-value">${n}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${s}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${o}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${c}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${r}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${l}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn" id="${i}">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${q}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${i}">
        Give a rating
      </button>
    </div>
  </div>
`;class b{constructor(){d.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,a,n){const s=new URLSearchParams({filter:t,page:a,limit:n});return(await d.get(`${this.BASE_URL}/filters?${s}`)).data}async getExercisesByCategory(t,a,n,s){const o=new URLSearchParams({[t]:a,page:n,limit:s});return(await d.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,a,n,s,o){const c=new URLSearchParams({[t]:a,keyword:n,page:s,limit:o});return(await d.get(`${this.BASE_URL}/exercises?${c}`)).data}async getExerciseInfoById(t){return(await d.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,a,n,s){return await d({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(a),email:n,review:s}})}async getAllExercises(){return(await d.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await d.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await d({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const j=()=>{p.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},x=e=>{p.success({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},I=e=>{p.error({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},V=()=>{p.success({message:"Thank you for your feedback",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},J=()=>{p.error({message:"Such email already exists",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},E=document.querySelector(".exercise-modal"),f=document.querySelector(".exercise-modal-backdrop"),K=document.querySelector("[data-modal-rating]"),k=document.querySelector("[data-modal-rating-backdrop]"),A=document.querySelector("[data-modal-rating-container]"),R=document.querySelector("[data-modal-rating-close]"),D=()=>{f.classList.remove("backdrop-is-hidden"),E.classList.remove("modal-is-hidden"),window.addEventListener("keydown",L)},v=()=>{f.classList.add("backdrop-is-hidden"),E.classList.add("modal-is-hidden"),window.removeEventListener("keydown",L)},Q=()=>{k.classList.remove("backdrop-rating-is-hidden"),A.classList.remove("modal-rating-is-hidden"),v(),window.removeEventListener("keydown",L),window.addEventListener("keydown",P)},h=()=>{k.classList.add("backdrop-rating-is-hidden"),A.classList.add("modal-rating-is-hidden"),D(),window.removeEventListener("keydown",P),window.addEventListener("keydown",L)};function L(e){e.key==="Escape"&&v()}function P(e){e.key==="Escape"&&h()}const G=()=>{R.addEventListener("click",h),K.addEventListener("click",e=>{e.target!==k&&e.target!==R||h()})};async function ie(e){e.preventDefault();const t=new b,a=document.querySelector(".input-footer").value,n=document.querySelector(".footer-subscription");T(a);try{const s=await t.sendSubscription(a);x(s.message),n.reset()}catch{I("The subscription has already been sent to this email")}}function T(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return I("Please, enter the valid email :)")}const U=(e=[])=>{let t,a;e.forEach(r=>n(r));function n(r){s(r),o(),r.classList.contains("set-rating")&&c(r)}function s(r){t=r.querySelector(".rating-active"),a=r.querySelector(".rating-value")}function o(r=a.innerHTML){const l=r/.05;t.style.width=`${l}%`}function c(r){const l=r.querySelectorAll(".rating-item");for(const i of l)i.addEventListener("mouseenter",u=>{s(r),o(i.value)}),i.addEventListener("mouseleave",u=>{o()}),i.addEventListener("click",u=>{i.checked=!0,s(r),a.innerHTML=i.value.padEnd(3,".0"),o()})}},ce=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let a={};G();const n=async s=>{s.preventDefault();const o=t.dataset.id;new FormData(s.currentTarget).forEach((m,S)=>{a[S]=m});const r=a.rate,l=a.email,i=a.review,u=new b;T(l);try{(await u.giveRating(o,r,l,i)).status===200&&(V(),h())}catch{J()}N();function N(){const m=document.querySelector(".set-rating");let S=m.querySelector(".rating-value"),W=m.querySelector(".rating-active");S.textContent="0.0",W.style.width="0%",t.reset()}};t.addEventListener("submit",n),U(e)},M="favoriteExerciseIds",le=async e=>{const t=new b;try{let s=function(){const o=document.querySelector(".exercise-modal-close-btn"),c=document.querySelectorAll(".exercise-rating-give-btn");f.addEventListener("click",i=>{i.target!==o&&i.target!==f||v()});const r=document.querySelector(".exercise-favorite-add-btn");r.addEventListener("click",()=>{const i=r.id,u=l();u.includes(i)?x("This exercise is already in favorites"):(u.push(i),localStorage.setItem(M,JSON.stringify(u)),x("This exercise is add in favorites"))});function l(){const i=localStorage.getItem(M);return i?JSON.parse(i):[]}o.addEventListener("click",v),c.forEach(i=>i.addEventListener("click",Q))};const a=await t.getExerciseInfoById(e);E.innerHTML=H(a);const n=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,D(),U(n),s()}catch{j()}},Y=document.querySelector(".quote-text"),Z=document.querySelector(".quote-author"),X=new b,ee=async()=>{try{const e=await X.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},de=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ee(),$()};function $(){const e=JSON.parse(localStorage.getItem("quoteObj"));Y.innerHTML=e.quote,Z.innerHTML=e.author}const O=document.querySelector("[data-modal-open]"),B=document.querySelector("[data-modal-close]"),y=document.querySelector(".mobile-menu-wrapper"),ue=()=>{const e=document.querySelector(".home-page"),t=document.querySelector(".home-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))},ge=()=>{const e=document.querySelector(".favorites-page"),t=document.querySelector(".favorites-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))};let te={37:1,38:1,39:1,40:1};function g(e){e.preventDefault()}function F(e){if(te[e.keyCode])return g(e),!1}let _=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){_=!0}}))}catch{}let w=_?{passive:!1}:!1,z="onwheel"in document.createElement("div")?"wheel":"mousewheel";function se(){window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener(z,g,w),window.addEventListener("touchmove",g,w),window.addEventListener("keydown",F,!1)}function ae(){window.removeEventListener("DOMMouseScroll",g,!1),window.removeEventListener(z,g,w),window.removeEventListener("touchmove",g,w),window.removeEventListener("keydown",F,!1)}const C=()=>{y&&y.classList.contains("none")?ae():se()},oe=()=>{O&&B?(O.addEventListener("click",()=>{y.classList.toggle("none"),C()}),B.addEventListener("click",()=>{y.classList.toggle("none"),C()})):console.error("Modal open/close buttons not found")},me=()=>{oe()};export{b as E,ie as a,de as b,re as c,ce as d,ue as e,ge as f,q as i,me as m,le as r,j as s};
//# sourceMappingURL=header-modal-1de1f9cf.js.map
