import{a as d,i as E}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const x=document.querySelector(".exercise-modal-backdrop"),V=document.querySelector(".exercise-modal-close-btn"),b=()=>{const e=document.querySelector(".exercise-modal");x.classList.add("backdrop-is-hidden"),e.classList.add("modal-is-hidden")};x.addEventListener("click",e=>{e.target!==V&&e.target!==x||b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});const Y=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
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
  </li>`,"");class g{constructor(){d.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await d.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const a=new URLSearchParams({[t]:s,page:r,limit:n});return(await d.get(`${this.BASE_URL}/exercises?${a}`)).data}async getExercisesByKeyWord(t,s,r,n,a){const o=new URLSearchParams({[t]:s,keyword:r,page:n,limit:a});return(await d.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExerciseInfoById(t){return(await d.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,r,n){return await d({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:r,review:n}})}async getAllExercises(){return(await d.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await d.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await d({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const O=()=>{E.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},G=()=>{E.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},X=e=>{E.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},Z=(e,t="hidden")=>{e.classList.add(t)},ee=(e,t="hidden")=>{e.classList.remove(t)};let c=1,k="test";document.querySelector(".navigation-list-form");const T=document.querySelector(".exercises-navigation-list");function te(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function q(e,t){const s=te(e,t).map(r=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${r}">${r}</button>
      </li>`).join("");T.innerHTML=s,re()}function se(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,k=U(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?I(k):v?D():F()}function C(){c=1}function re(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function ne(){T.innerHTML=""}const B=document.querySelector(".exercises-search-wrap");let S,f,M=window.innerWidth<=1440?8:9,v=!1;function F(e){const t=new g;if(v=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;C(),S=U(e.target.dataset.filter),f=e.target.dataset.name}try{return t.getExercisesByCategory(S,f,c,M).then(s=>{const r=N(s.results);q(s.totalPages,c),ce(ae(f)),L(r),oe()})}catch{O()}}function ae(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ie(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),$()}function oe(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",de),e.addEventListener("input",le)}function U(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function N(e){return e.map(t=>`<li class="exercises-card" data-id="${t.id}">
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
    </li>`).join("")}function L(e){w.innerHTML=e}function ce(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function de(e){e.preventDefault(),C(),D()}function D(){v=!0;const e=B.firstElementChild.value;new g().getExercisesByKeyWord(S,f,e,c,M).then(s=>{if(s.results.length<=0)return ne(),L('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');q(s.totalPages,c);const r=N(s.results);L(r)})}function le(){const e=B.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",$)):_()}function _(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",$)}function $(){v=!1,B.reset(),_()}const w=document.querySelector(".categories-list"),ue=document.querySelector(".category-btns-list"),W=document.querySelector(".exercises-title"),y=document.querySelector(".exercises-path-name"),ge=document.querySelector(".navigation-list-form"),me=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>ee(s,"current-category-btn")),Z(t,"current-category-btn")}))},I=async e=>{const t=new g,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,c,s);q(r.totalPages,c),w.innerHTML=Y(r),w.addEventListener("click",F),ge.addEventListener("submit",se)}catch{O()}},P=async e=>{const t=e.target.textContent.trim();C(),pe(),I(t)};function pe(){y.textContent!==""&&(W.textContent="Exercises",y.textContent="",y.classList.add("hidden"),ie())}const he=()=>{window.addEventListener("load",me),window.addEventListener("load",I),ue.addEventListener("click",P),W.addEventListener("click",P)},fe=document.querySelector(".quote-text"),ve=document.querySelector(".quote-author"),ye=new g,xe=async()=>{try{const e=await ye.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},Se=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await xe(),A()};function A(){const e=JSON.parse(localStorage.getItem("quoteObj"));fe.innerHTML=e.quote,ve.innerHTML=e.author}const Le=document.querySelector(".favorites-list");document.querySelector(".card-exercise-name");document.querySelector(".favorites-div-without-cards");const R="favoriteExerciseIds",we=new g;we.getExercisesByCategory("muscles","abs",1,6).then(e=>Ee(e.results));function Ee(e){console.log(e);const t=e.map(s=>`
      <li class="exercises-card">
        <div class="exercises-card-upper-part">
          <div class="div-rating-or-delete-button">
            <div class="workout-text">WORKOUT</div>
            <div class="card-rating">${s.rating} <span>
              <svg class="rating-icon" width="18" height="18">
              <use href="../images/sprite.svg#icon-star"></use></svg>
            </span></div>
            <button type="button" id="${s._id}" class="card-delete card-delte-inactive">
              <svg class="trash-icon" width="16" height="16">
              <use href="../images/sprite.svg#icon-trash"></use></svg>
            </button>
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
          <p class="card-exercise-name">${be(s.name)}</p>
        </div>
        <div class="exercises-card-lower-part">
          <p>Burned calories: <span class="exercises-card-lower-part-span">${s.burnedCalories} / 3 min</span></p>
          <p>Body part: <span class="exercises-card-lower-part-span">${s.bodyPart}</span></p>
          <p>Target: <span class="exercises-card-lower-part-span">${s.target}</span></p>
        </div>
      </li>
  `).join("");Le.insertAdjacentHTML("beforeend",t)}function be(e){return e.charAt(0).toUpperCase()+e.slice(1)}const qe=document.querySelectorAll(".card-delete");qe.forEach(e=>{e.addEventListener("click",()=>{const t=globalThis.id,s=H(),r=s.indexOf(t);r!==-1&&(s.splice(r,1),localStorage.setItem(R,JSON.stringify(s))),Ce(t)})});function Ce(e){const t=document.querySelector(`.exercises-card[data-id="${e}"]`);t&&t.remove()}const Be=document.querySelectorAll(".exercise-favorite-add-btn");Be.forEach(e=>{e.addEventListener("click",async function(){const t=this.id;console.log(t);const s=H();s.includes(t)?console.log("this exersice is already in favorites"):(s.push(t),localStorage.setItem(R,JSON.stringify(s)))})});function H(){const e=localStorage.getItem(R);return e?JSON.parse(e):[]}const $e=document.querySelectorAll(".rating-container"),Ie=()=>{let e,t;$e.forEach(i=>s(i));function s(i){r(i),n(),i.classList.contains("set-rating")&&a(i)}function r(i){e=i.querySelector(".rating-active"),t=i.querySelector(".rating-value")}function n(i=t.innerHTML){const p=i/.05;e.style.width=`${p}%`}function a(i){const p=i.querySelectorAll(".rating-item");for(const l of p)l.addEventListener("mouseenter",h=>{r(i),n(l.value)}),l.addEventListener("mouseleave",h=>{n()}),l.addEventListener("click",h=>{l.checked=!0,r(i),t.innerHTML=l.value.padEnd(3,".0"),n()})}const o=document.querySelector(".rating-form");let m={};const j=async i=>{i.preventDefault();const p=o.dataset.id;new FormData(i.currentTarget).forEach((u,Q)=>{m[Q]=u});const h=m.rate,z=m.email,K=m.review,J=new g;try{const u=await J.giveRating(p,h,z,K);console.log(u),u.status===200?G(u.data.message):X(u.data.message)}catch{}t.innerHTML=0,n(),o.reset()};o.addEventListener("submit",j)},Re=()=>{const e={openModalBtn:document.querySelector("[data-modal-rating-open]"),closeModalBtn:document.querySelector("[data-modal-rating-close]"),modal:document.querySelector("[data-modal-rating]"),backdrop:document.querySelector("[data-modal-rating-backdrop]"),container:document.querySelector("[data-modal-rating-container]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",r=>{r.target!==e.backdrop&&r.target!==e.closeModalBtn||s()}),window.addEventListener("keydown",t,{once:!0});function t(r){r.key==="Escape"&&s()}function s(){e.modal.classList.add("backdrop-is-hidden"),e.modal.classList.add("modal-is-hidden")}};he();b();Se();Ie();Re();
//# sourceMappingURL=main-0455cec7.js.map
