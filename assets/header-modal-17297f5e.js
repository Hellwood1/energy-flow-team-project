import{a as u,i as y}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const v="/energy-flow-team-project/assets/sprite-32ec9a67.svg",we=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
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
  </li>`,""),Le=({gifUrl:e,name:t,rating:s,target:r,bodyPart:n,equipment:o,popularity:i,burnedCalories:a,description:l,_id:c})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${v}#icon-close-modal"></use>
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
              <div class="rating-value">${s}</div>
              <div class="rating-body">
                <div class="rating-active"></div>
              </div>
            </div>
    </div>
    <ul class="exercise-tags-list">
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Target</p>
        <p class="exercise-tags-value">${r}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${n}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${o}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${i}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${a}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${l}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn" data-name="exercise-favorite-btn" id="${c}">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${v}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${c}">
        Give a rating
      </button>
    </div>
  </div>
`;class g{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await u.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const o=new URLSearchParams({[t]:s,page:r,limit:n});return(await u.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,s,r,n,o){const i=new URLSearchParams({[t]:s,keyword:r,page:n,limit:o});return(await u.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,r,n){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:r,review:n}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const M=()=>{y.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},V=e=>{y.success({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Q=e=>{y.error({message:e,backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},be=()=>{y.success({message:"Thank you for your feedback",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Se=()=>{y.error({message:"Such email already exists",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Ee=(e,t="hidden")=>{e.classList.add(t)},qe=(e,t="hidden")=>{e.classList.remove(t)};let d=1,N="test";document.querySelector(".navigation-list-form");const G=document.querySelector(".exercises-navigation-list");function Ce(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function O(e,t,s){const r=Ce(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");G.innerHTML=r,Ie(s)}function ke(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(d=e.submitter.textContent,N=de(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?_(N):k?ge():ce())}function A(){d=1}function Ie(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function Be(){G.innerHTML=""}const P=document.querySelector(".exercise-modal"),L=document.querySelector(".exercise-modal-backdrop"),Re=document.querySelector("[data-modal-rating]"),T=document.querySelector("[data-modal-rating-backdrop]"),Y=document.querySelector("[data-modal-rating-container]"),H=document.querySelector("[data-modal-rating-close]"),Z=()=>{L.classList.remove("backdrop-is-hidden"),P.classList.remove("modal-is-hidden"),window.addEventListener("keydown",C)},b=()=>{L.classList.add("backdrop-is-hidden"),P.classList.add("modal-is-hidden"),window.removeEventListener("keydown",C)},$e=()=>{T.classList.remove("backdrop-rating-is-hidden"),Y.classList.remove("modal-rating-is-hidden"),b(),window.removeEventListener("keydown",C),window.addEventListener("keydown",X)},S=()=>{T.classList.add("backdrop-rating-is-hidden"),Y.classList.add("modal-rating-is-hidden"),Z(),window.removeEventListener("keydown",X),window.addEventListener("keydown",C)};function C(e){e.key==="Escape"&&b()}function X(e){e.key==="Escape"&&S()}const Me=()=>{H.addEventListener("click",S),Re.addEventListener("click",e=>{e.target!==T&&e.target!==H||S()})};async function Oe(e){e.preventDefault();const t=new g,s=document.querySelector(".input-footer").value,r=document.querySelector(".footer-subscription");ee(s);try{const n=await t.sendSubscription(s);V(n.message),r.reset()}catch(n){if(n.response.status===400)return;Q("The subscription has already been sent to this email"),console.log(n)}}function ee(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return Q("Please, enter the valid email :)")}const te=(e=[])=>{let t,s;e.forEach(a=>r(a));function r(a){n(a),o(),a.classList.contains("set-rating")&&i(a)}function n(a){t=a.querySelector(".rating-active"),s=a.querySelector(".rating-value")}function o(a=s.innerHTML){const l=a/.05;t.style.width=`${l}%`}function i(a){const l=a.querySelectorAll(".rating-item");for(const c of l)c.addEventListener("mouseenter",x=>{n(a),o(c.value)}),c.addEventListener("mouseleave",x=>{o()}),c.addEventListener("click",x=>{c.checked=!0,n(a),s.innerHTML=c.value.padEnd(3,".0"),o()})}},ct=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Me();const r=async n=>{n.preventDefault();const o=t.dataset.id;new FormData(n.currentTarget).forEach((f,I)=>{s[I]=f});const a=s.rate,l=s.email,c=s.review,x=new g;ee(l);try{(await x.giveRating(o,a,l,c)).status===200&&(be(),S())}catch{Se()}ye();function ye(){const f=document.querySelector(".set-rating");let I=f.querySelector(".rating-value"),xe=f.querySelector(".rating-active");I.textContent="0.0",xe.style.width="0%",t.reset()}};t.addEventListener("submit",r),te(e)},Ae="/energy-flow-team-project/assets/dumbbell-71edb8d8.png",h="favoriteExerciseInfo",se=document.querySelector(".favorites-list"),Pe=async e=>{const t=new g;try{let n=function(){const o=document.querySelector(".exercise-modal-close-btn"),i=document.querySelectorAll(".exercise-rating-give-btn");L.addEventListener("click",a=>{a.target!==o&&a.target!==L||b()}),Te(),Ue(e),o.addEventListener("click",b),i.forEach(a=>a.addEventListener("click",$e))};const s=await t.getExerciseInfoById(e);P.innerHTML=Le(s);const r=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,Z(),te(r),n()}catch{M()}};async function Te(){const e=new g,t=document.querySelector('[data-name="exercise-favorite-btn"]');t.addEventListener("click",async()=>{const s=t.id;try{const r=await e.getExerciseInfoById(s),n=ne(),o=n.some(i=>i._id===r._id);if(De(t,"exercise-favorite-add-btn"),!o)n.push(r),localStorage.setItem(h,JSON.stringify(n)),V("This exercise is added to favorites");else{let i=await e.getExerciseInfoById(s),a=JSON.parse(localStorage.getItem(h)),l=a.filter(c=>c._id!==i._id);console.log(a),console.log(l),localStorage.setItem(h,JSON.stringify(l)),se&&Fe(s)}}catch(r){console.error("Error fetching exercise info:",r)}})}function Fe(e){const t=document.querySelector(`.div-with-li[id="${e}"]`);if(t&&t.remove(),JSON.parse(localStorage.getItem(h)).length===0){se.innerHTML=`<div class="favorites-no-results"><img
    class="favorites-div-without-cards-img"
    src="${Ae}"
    alt="dumbbell"
    width="85"
    height="52"
  />
  <p class="favorites-div-without-cards-text">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p></div>`,document.querySelector(".exercises-navigation-list").innerHTML="";return}}function ne(){const e=localStorage.getItem(h);return e?JSON.parse(e):[]}function re(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.classList.remove("exercise-favorite-add-btn"),e.classList.add("remove-from-favorites")}function oe(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.classList.add("exercise-favorite-add-btn"),e.classList.remove("remove-from-favorites")}function De(e,t){e.classList.contains(t)?re():oe()}async function Ue(e){const s=await new g().getExerciseInfoById(e);ne().some(o=>o._id===s._id)?re():oe()}function ae(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const F=document.querySelector(".exercises-search-wrap");let R,w,ie=window.innerWidth<=1440?8:9,k=!1;function ce(e){const t=new g;if(k=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;A(),R=de(e.target.dataset.filter),w=e.target.dataset.name}try{return t.getExercisesByCategory(R,w,d,ie).then(s=>{const r=ue(s.results);O(s.totalPages,d,d),He(le(w)),$(r),Ne(),ae(U)})}catch{M()}}function le(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _e(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),D()}function Ne(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",We),e.addEventListener("input",je)}function de(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function ue(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${v}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${v}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${v}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${le(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${ze(t.target)}</span></p>
      </div>
    </li>`).join("")}function $(e){m.classList.add("exercise-list"),m.innerHTML=e}function He(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function We(e){e.preventDefault(),A(),ge()}function ge(){k=!0;const e=F.firstElementChild.value;new g().getExercisesByKeyWord(R,w,e,d,ie).then(s=>{if(s.results.length<=0)return Be(),$('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');O(s.totalPages,d,d);const r=ue(s.results);$(r)})}function je(){const e=F.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",D)):me()}function me(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",D)}function D(){k=!1,F.reset(),me()}function ze(e){return e.length>=9?e.slice(0,5)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",Je);function Je(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Pe(t)}}const m=document.querySelector(".categories-list"),Ke=document.querySelector(".category-btns-list"),pe=document.querySelector(".exercises-title"),B=document.querySelector(".exercises-path-name"),Ve=document.querySelector(".navigation-list-form"),Qe=document.querySelector(".footer-subscription"),U=document.querySelector(".categories-list"),Ge=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>qe(s,"current-category-btn")),Ee(t,"current-category-btn")}))},Ye=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&U.classList.add("on-animate")})}),_=async e=>{const t=new g,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,d,s);O(r.totalPages,d,d),m.innerHTML=we(r),m.addEventListener("click",ce),Ve.addEventListener("submit",ke),ae(m),Ye.observe(U)}catch{M()}},W=async e=>{const t=e.target.textContent.trim();A(),Ze(),await _(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function Ze(){B.textContent!==""&&(pe.textContent="Exercises",B.textContent="",B.classList.add("hidden"),_e())}const lt=()=>{window.addEventListener("load",Ge),window.addEventListener("load",_),Ke.addEventListener("click",W),pe.addEventListener("click",W),Qe.addEventListener("submit",Oe)},Xe=document.querySelector(".quote-text"),et=document.querySelector(".quote-author"),tt=new g,st=async()=>{try{const e=await tt.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},dt=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await st(),j()};function j(){const e=JSON.parse(localStorage.getItem("quoteObj"));Xe.innerHTML=e.quote,et.innerHTML=e.author}const z=document.querySelector("[data-modal-open]"),J=document.querySelector("[data-modal-close]"),E=document.querySelector(".mobile-menu-wrapper"),ut=()=>{const e=document.querySelector(".home-page"),t=document.querySelector(".home-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))},gt=()=>{const e=document.querySelector(".favorites-page"),t=document.querySelector(".favorites-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))};let nt={37:1,38:1,39:1,40:1};function p(e){e.preventDefault()}function fe(e){if(nt[e.keyCode])return p(e),!1}let ve=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ve=!0}}))}catch{}let q=ve?{passive:!1}:!1,he="onwheel"in document.createElement("div")?"wheel":"mousewheel";function rt(){window.addEventListener("DOMMouseScroll",p,!1),window.addEventListener(he,p,q),window.addEventListener("touchmove",p,q),window.addEventListener("keydown",fe,!1)}function ot(){window.removeEventListener("DOMMouseScroll",p,!1),window.removeEventListener(he,p,q),window.removeEventListener("touchmove",p,q),window.removeEventListener("keydown",fe,!1)}const K=()=>{E&&E.classList.contains("none")?ot():rt()},at=()=>{z&&J?(z.addEventListener("click",()=>{E.classList.toggle("none"),K()}),J.addEventListener("click",()=>{E.classList.toggle("none"),K()})):console.error("Modal open/close buttons not found")},mt=()=>{at()};export{g as E,lt as a,ct as b,dt as c,gt as d,O as e,Ae as f,ze as g,v as i,mt as m,Pe as r,ut as s};
//# sourceMappingURL=header-modal-17297f5e.js.map
