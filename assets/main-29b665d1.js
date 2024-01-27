import{a as d,i as E}from"./vendor-7af2edd1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const L=document.querySelector(".exercise-modal-backdrop"),Q=document.querySelector(".exercise-modal-close-btn"),b=()=>{const e=document.querySelector(".exercise-modal");L.classList.add("backdrop-is-hidden"),e.classList.add("modal-is-hidden")};L.addEventListener("click",e=>{e.target!==Q&&e.target!==L||b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});const V=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:r})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${s}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${r}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${s[0].toUpperCase()+s.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,"");class p{constructor(){d.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,n){const r=new URLSearchParams({filter:t,page:s,limit:n});return(await d.get(`${this.BASE_URL}/filters?${r}`)).data}async getExercisesByCategory(t,s,n,r){const a=new URLSearchParams({[t]:s,page:n,limit:r});return(await d.get(`${this.BASE_URL}/exercises?${a}`)).data}async getExercisesByKeyWord(t,s,n,r,a){const i=new URLSearchParams({[t]:s,keyword:n,page:r,limit:a});return(await d.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(t){return(await d.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,n,r){return await d({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:n,review:r}})}async getAllExercises(){return(await d.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await d.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await d({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const A=()=>{E.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},J=()=>{E.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},Y=e=>{E.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},G=(e,t="hidden")=>{e.classList.add(t)},X=(e,t="hidden")=>{e.classList.remove(t)};let c=1,R="test";document.querySelector(".navigation-list-form");const I=document.querySelector(".exercises-navigation-list");function Z(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function q(e,t){const s=Z(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");I.innerHTML=s,te()}function ee(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,R=T(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?P(R):y?U():O()}function C(){c=1}function te(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function se(){I.innerHTML=""}const B=document.querySelector(".exercises-search-wrap");let x,f,D=window.innerWidth<=1440?8:9,y=!1;function O(e){const t=new p;if(y=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;C(),x=T(e.target.dataset.filter),f=e.target.dataset.name}try{return t.getExercisesByCategory(x,f,c,D).then(s=>{const n=F(s.results);q(s.totalPages,c),oe(ne(f)),S(n),ae()})}catch{A()}}function ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function re(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),k()}function ae(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",ie),e.addEventListener("input",ce)}function T(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function F(e){return e.map(t=>`<li class="exercises-card" data-id="${t.id}">
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
    </li>`).join("")}function S(e){w.innerHTML=e}function oe(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function ie(e){e.preventDefault(),C(),U()}function U(){y=!0;const e=B.firstElementChild.value;new p().getExercisesByKeyWord(x,f,e,c,D).then(s=>{if(s.results.length<=0)return se(),S('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');q(s.totalPages,c);const n=F(s.results);S(n)})}function ce(){const e=B.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",k)):N()}function N(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",k)}function k(){y=!1,B.reset(),N()}const w=document.querySelector(".categories-list"),de=document.querySelector(".category-btns-list"),W=document.querySelector(".exercises-title"),v=document.querySelector(".exercises-path-name"),le=document.querySelector(".navigation-list-form"),ue=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>X(s,"current-category-btn")),G(t,"current-category-btn")}))},P=async e=>{const t=new p,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);q(n.totalPages,c),w.innerHTML=V(n),w.addEventListener("click",O),le.addEventListener("submit",ee)}catch{A()}},$=async e=>{const t=e.target.textContent.trim();C(),ge(),P(t)};function ge(){v.textContent!==""&&(W.textContent="Exercises",v.textContent="",v.classList.add("hidden"),re())}const me=()=>{window.addEventListener("load",ue),window.addEventListener("load",P),de.addEventListener("click",$),W.addEventListener("click",$)},pe=document.querySelector(".quote-text"),he=document.querySelector(".quote-author"),fe=new p,ye=async()=>{try{const e=await fe.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},ve=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ye(),M()};function M(){const e=JSON.parse(localStorage.getItem("quoteObj"));pe.innerHTML=e.quote,he.innerHTML=e.author}const Le=document.querySelectorAll(".rating-container"),xe=()=>{let e,t;Le.forEach(o=>s(o));function s(o){n(o),r(),o.classList.contains("set-rating")&&a(o)}function n(o){e=o.querySelector(".rating-active"),t=o.querySelector(".rating-value")}function r(o=t.innerHTML){const m=o/.05;e.style.width=`${m}%`}function a(o){const m=o.querySelectorAll(".rating-item");for(const l of m)l.addEventListener("mouseenter",h=>{n(o),r(l.value)}),l.addEventListener("mouseleave",h=>{r()}),l.addEventListener("click",h=>{l.checked=!0,n(o),t.innerHTML=l.value.padEnd(3,".0"),r()})}const i=document.querySelector(".rating-form");let g={};const H=async o=>{o.preventDefault();const m=i.dataset.id;new FormData(o.currentTarget).forEach((u,K)=>{g[K]=u});const h=g.rate,_=g.email,z=g.review,j=new p;try{const u=await j.giveRating(m,h,_,z);console.log(u),u.status===200?J(u.data.message):Y(u.data.message)}catch{}t.innerHTML=0,r(),i.reset()};i.addEventListener("submit",H)},Se=()=>{const e={openModalBtn:document.querySelector("[data-modal-rating-open]"),closeModalBtn:document.querySelector("[data-modal-rating-close]"),modal:document.querySelector("[data-modal-rating]"),backdrop:document.querySelector("[data-modal-rating-backdrop]"),container:document.querySelector("[data-modal-rating-container]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",n=>{n.target!==e.backdrop&&n.target!==e.closeModalBtn||s()}),window.addEventListener("keydown",t,{once:!0});function t(n){n.key==="Escape"&&s()}function s(){e.modal.classList.add("backdrop-is-hidden"),e.modal.classList.add("modal-is-hidden")}};me();b();ve();xe();Se();
//# sourceMappingURL=main-29b665d1.js.map
