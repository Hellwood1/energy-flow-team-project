import{a as u,i as x}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const v="/energy-flow-team-project/assets/sprite-32ec9a67.svg",be=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
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
  </li>`,""),Se=({gifUrl:e,name:t,rating:s,target:r,bodyPart:n,equipment:o,popularity:i,burnedCalories:a,description:d,_id:c})=>`
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
      ${d}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn" data-name="exercise-favorite-btn" id="${c}">
        <p>Add to favorites</p>
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
`;class g{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await u.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const o=new URLSearchParams({[t]:s,page:r,limit:n});return(await u.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,s,r,n,o){const i=new URLSearchParams({[t]:s,keyword:r,page:n,limit:o});return(await u.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,r,n){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:r,review:n}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const O=()=>{x.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},G=e=>{x.success({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Y=e=>{x.error({message:e,backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Ee=()=>{x.success({message:"Thank you for your feedback",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},qe=()=>{x.error({message:"Such email already exists",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Ce=(e,t="hidden")=>{e.classList.add(t)},ke=(e,t="hidden")=>{e.classList.remove(t)};let l=1,W="test";document.querySelector(".navigation-list-form");const Z=document.querySelector(".exercises-navigation-list");function Ie(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function P(e,t,s){const r=Ie(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");Z.innerHTML=r,Re(s)}function Be(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(l=e.submitter.textContent,W=ge(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?H(W):B?pe():de())}function T(){l=1}function Re(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function $e(){Z.innerHTML=""}const F=document.querySelector(".exercise-modal"),b=document.querySelector(".exercise-modal-backdrop"),Me=document.querySelector("[data-modal-rating]"),D=document.querySelector("[data-modal-rating-backdrop]"),X=document.querySelector("[data-modal-rating-container]"),j=document.querySelector("[data-modal-rating-close]"),h=document.querySelector(".up-btn"),k=document.querySelector("body"),ee=()=>{k.classList.add("modal-open"),b.classList.remove("backdrop-is-hidden"),F.classList.remove("modal-is-hidden"),h&&(h.style.display="none"),window.addEventListener("keydown",I)},S=()=>{k.classList.remove("modal-open"),b.classList.add("backdrop-is-hidden"),F.classList.add("modal-is-hidden"),window.removeEventListener("keydown",I),h&&(h.style.display="flex")},Ae=()=>{D.classList.remove("backdrop-rating-is-hidden"),X.classList.remove("modal-rating-is-hidden"),S(),k.classList.add("modal-open"),h&&(h.style.display="none"),window.removeEventListener("keydown",I),window.addEventListener("keydown",te)},E=()=>{k.classList.remove("modal-open"),D.classList.add("backdrop-rating-is-hidden"),X.classList.add("modal-rating-is-hidden"),ee(),window.removeEventListener("keydown",te),window.addEventListener("keydown",I)};function I(e){e.key==="Escape"&&S()}function te(e){e.key==="Escape"&&E()}const Oe=()=>{j.addEventListener("click",E),Me.addEventListener("click",e=>{e.target!==D&&e.target!==j||E()})};async function Pe(e){e.preventDefault();const t=new g,s=document.querySelector(".input-footer").value,r=document.querySelector(".footer-subscription");se(s);try{const n=await t.sendSubscription(s);G(n.message),r.reset()}catch(n){if(n.response.status===400)return;Y("The subscription has already been sent to this email")}}function se(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return Y("Please, enter the valid email :)")}const ne=(e=[])=>{let t,s;e.forEach(a=>r(a));function r(a){n(a),o(),a.classList.contains("set-rating")&&i(a)}function n(a){t=a.querySelector(".rating-active"),s=a.querySelector(".rating-value")}function o(a=s.innerHTML){const d=a/.05;t.style.width=`${d}%`}function i(a){const d=a.querySelectorAll(".rating-item");for(const c of d)c.addEventListener("mouseenter",w=>{n(a),o(c.value)}),c.addEventListener("mouseleave",w=>{o()}),c.addEventListener("click",w=>{c.checked=!0,n(a),s.innerHTML=c.value.padEnd(3,".0"),o()})}},dt=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Oe();const r=async n=>{n.preventDefault();const o=t.dataset.id;new FormData(n.currentTarget).forEach((f,R)=>{s[R]=f});const a=s.rate,d=s.email,c=s.review,w=new g;se(d);try{(await w.giveRating(o,a,d,c)).status===200&&(Ee(),E())}catch{qe()}we();function we(){const f=document.querySelector(".set-rating");let R=f.querySelector(".rating-value"),Le=f.querySelector(".rating-active");R.textContent="0.0",Le.style.width="0%",t.reset()}};t.addEventListener("submit",r),ne(e)},Te="/energy-flow-team-project/assets/dumbbell-71edb8d8.png",y="favoriteExerciseInfo",re=document.querySelector(".favorites-list"),Fe=async e=>{const t=new g;try{let n=function(){const o=document.querySelector(".exercise-modal-close-btn"),i=document.querySelectorAll(".exercise-rating-give-btn");b.addEventListener("click",a=>{a.target!==o&&a.target!==b||S()}),De(),Ne(e),o.addEventListener("click",S),i.forEach(a=>a.addEventListener("click",Ae))};const s=await t.getExerciseInfoById(e);F.innerHTML=Se(s);const r=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,ee(),ne(r),n()}catch{O()}};async function De(){const e=new g,t=document.querySelector('[data-name="exercise-favorite-btn"]');t.addEventListener("click",async()=>{const s=t.id;try{const r=await e.getExerciseInfoById(s),n=oe(),o=n.some(i=>i._id===r._id);if(_e(t),!o)n.push(r),localStorage.setItem(y,JSON.stringify(n)),G("This exercise is added to favorites");else{let i=await e.getExerciseInfoById(s),d=JSON.parse(localStorage.getItem(y)).filter(c=>c._id!==i._id);localStorage.setItem(y,JSON.stringify(d)),re&&Ue(s)}}catch(r){console.error("Error fetching exercise info:",r)}})}function Ue(e){const t=document.querySelector(`.div-with-li[id="${e}"]`);if(t&&t.remove(),JSON.parse(localStorage.getItem(y)).length===0){re.innerHTML=`<div class="favorites-no-results"><img
    class="favorites-div-without-cards-img"
    src="${Te}"
    alt="dumbbell"
    width="85"
    height="52"
  />
  <p class="favorites-div-without-cards-text">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p></div>`,document.querySelector(".exercises-navigation-list").innerHTML="";return}}function oe(){const e=localStorage.getItem(y);return e?JSON.parse(e):[]}function ae(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.firstElementChild.textContent="Remove from"}function ie(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.firstElementChild.textContent="Add to favotites"}function _e(e){e.firstElementChild.textContent==="Add to favotites"?ae():ie()}async function Ne(e){const s=await new g().getExerciseInfoById(e);oe().some(o=>o._id===s._id)?ae():ie()}function ce(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const U=document.querySelector(".exercises-search-wrap");let M,L,le=window.innerWidth<=1440?8:9,B=!1;function de(e){const t=new g;if(B=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;T(),M=ge(e.target.dataset.filter),L=e.target.dataset.name}try{return t.getExercisesByCategory(M,L,l,le).then(s=>{const r=me(s.results);P(s.totalPages,l,l),je(ue(L)),A(r),We(),ce(N)})}catch{O()}}function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}function He(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),_()}function We(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",ze),e.addEventListener("input",Je)}function ge(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function me(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${ue(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Ke(t.target)}</span></p>
      </div>
    </li>`).join("")}function A(e){m.classList.add("exercise-list"),m.innerHTML=e}function je(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function ze(e){e.preventDefault(),T(),pe()}function pe(){B=!0;const e=U.firstElementChild.value;new g().getExercisesByKeyWord(M,L,e,l,le).then(s=>{if(s.results.length<=0)return $e(),A('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');P(s.totalPages,l,l);const r=me(s.results);A(r)})}function Je(){const e=U.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",_)):fe()}function fe(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",_)}function _(){B=!1,U.reset(),fe()}function Ke(e){return e.length>=9?e.slice(0,5)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",Ve);function Ve(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Fe(t)}}const m=document.querySelector(".categories-list"),Qe=document.querySelector(".category-btns-list"),he=document.querySelector(".exercises-title"),$=document.querySelector(".exercises-path-name"),Ge=document.querySelector(".navigation-list-form"),Ye=document.querySelector(".footer-subscription"),N=document.querySelector(".categories-list"),Ze=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>ke(s,"current-category-btn")),Ce(t,"current-category-btn")}))},Xe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&N.classList.add("on-animate")})}),H=async e=>{const t=new g,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,l,s);P(r.totalPages,l,l),m.innerHTML=be(r),m.addEventListener("click",de),Ge.addEventListener("submit",Be),ce(m),Xe.observe(N)}catch{O()}},z=async e=>{const t=e.target.textContent.trim();T(),et(),await H(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function et(){$.textContent!==""&&(he.textContent="Exercises",$.textContent="",$.classList.add("hidden"),He())}const ut=()=>{window.addEventListener("load",Ze),window.addEventListener("load",H),Qe.addEventListener("click",z),he.addEventListener("click",z),Ye.addEventListener("submit",Pe)},tt=document.querySelector(".quote-text"),st=document.querySelector(".quote-author"),nt=new g,rt=async()=>{try{const e=await nt.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},gt=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await rt(),J()};function J(){const e=JSON.parse(localStorage.getItem("quoteObj"));tt.innerHTML=e.quote,st.innerHTML=e.author}const K=document.querySelector("[data-modal-open]"),V=document.querySelector("[data-modal-close]"),q=document.querySelector(".mobile-menu-wrapper"),mt=()=>{const e=document.querySelector(".home-page"),t=document.querySelector(".home-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))},pt=()=>{const e=document.querySelector(".favorites-page"),t=document.querySelector(".favorites-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))};let ot={37:1,38:1,39:1,40:1};function p(e){e.preventDefault()}function ve(e){if(ot[e.keyCode])return p(e),!1}let ye=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ye=!0}}))}catch{}let C=ye?{passive:!1}:!1,xe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function at(){window.addEventListener("DOMMouseScroll",p,!1),window.addEventListener(xe,p,C),window.addEventListener("touchmove",p,C),window.addEventListener("keydown",ve,!1)}function it(){window.removeEventListener("DOMMouseScroll",p,!1),window.removeEventListener(xe,p,C),window.removeEventListener("touchmove",p,C),window.removeEventListener("keydown",ve,!1)}const Q=()=>{q&&q.classList.contains("none")?it():at()},ct=()=>{K&&V?(K.addEventListener("click",()=>{q.classList.toggle("none"),Q()}),V.addEventListener("click",()=>{q.classList.toggle("none"),Q()})):console.error("Modal open/close buttons not found")},ft=()=>{ct()};export{g as E,ut as a,dt as b,gt as c,pt as d,P as e,Te as f,Ke as g,v as i,ft as m,Fe as r,mt as s};
//# sourceMappingURL=header-modal-11929834.js.map
