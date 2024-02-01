import{a as u,i as x}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const v="/energy-flow-team-project/assets/sprite-32ec9a67.svg",Le=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
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
  </li>`,""),be=({gifUrl:e,name:t,rating:s,target:r,bodyPart:n,equipment:o,popularity:i,burnedCalories:a,description:d,_id:c})=>`
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
`;class g{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await u.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const o=new URLSearchParams({[t]:s,page:r,limit:n});return(await u.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,s,r,n,o){const i=new URLSearchParams({[t]:s,keyword:r,page:n,limit:o});return(await u.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,r,n){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:r,review:n}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const A=()=>{x.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Q=e=>{x.success({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},G=e=>{x.error({message:e,backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Se=()=>{x.success({message:"Thank you for your feedback",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},Ee=()=>{x.error({message:"Such email already exists",backgroundColor:"rgb(255, 102, 102)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})},qe=(e,t="hidden")=>{e.classList.add(t)},Ce=(e,t="hidden")=>{e.classList.remove(t)};let l=1,H="test";document.querySelector(".navigation-list-form");const Y=document.querySelector(".exercises-navigation-list");function ke(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function O(e,t,s){const r=ke(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");Y.innerHTML=r,Be(s)}function Ie(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(l=e.submitter.textContent,H=ue(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?N(H):I?me():le())}function P(){l=1}function Be(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function Re(){Y.innerHTML=""}const T=document.querySelector(".exercise-modal"),b=document.querySelector(".exercise-modal-backdrop"),$e=document.querySelector("[data-modal-rating]"),F=document.querySelector("[data-modal-rating-backdrop]"),Z=document.querySelector("[data-modal-rating-container]"),W=document.querySelector("[data-modal-rating-close]"),h=document.querySelector(".up-btn"),X=()=>{b.classList.remove("backdrop-is-hidden"),T.classList.remove("modal-is-hidden"),h&&(h.style.display="none"),window.addEventListener("keydown",k)},S=()=>{b.classList.add("backdrop-is-hidden"),T.classList.add("modal-is-hidden"),window.removeEventListener("keydown",k),h&&(h.style.display="flex")},Me=()=>{F.classList.remove("backdrop-rating-is-hidden"),Z.classList.remove("modal-rating-is-hidden"),S(),h&&(h.style.display="none"),window.removeEventListener("keydown",k),window.addEventListener("keydown",ee)},E=()=>{F.classList.add("backdrop-rating-is-hidden"),Z.classList.add("modal-rating-is-hidden"),X(),window.removeEventListener("keydown",ee),window.addEventListener("keydown",k)};function k(e){e.key==="Escape"&&S()}function ee(e){e.key==="Escape"&&E()}const Ae=()=>{W.addEventListener("click",E),$e.addEventListener("click",e=>{e.target!==F&&e.target!==W||E()})};async function Oe(e){e.preventDefault();const t=new g,s=document.querySelector(".input-footer").value,r=document.querySelector(".footer-subscription");te(s);try{const n=await t.sendSubscription(s);Q(n.message),r.reset()}catch(n){if(n.response.status===400)return;G("The subscription has already been sent to this email")}}function te(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return G("Please, enter the valid email :)")}const se=(e=[])=>{let t,s;e.forEach(a=>r(a));function r(a){n(a),o(),a.classList.contains("set-rating")&&i(a)}function n(a){t=a.querySelector(".rating-active"),s=a.querySelector(".rating-value")}function o(a=s.innerHTML){const d=a/.05;t.style.width=`${d}%`}function i(a){const d=a.querySelectorAll(".rating-item");for(const c of d)c.addEventListener("mouseenter",w=>{n(a),o(c.value)}),c.addEventListener("mouseleave",w=>{o()}),c.addEventListener("click",w=>{c.checked=!0,n(a),s.innerHTML=c.value.padEnd(3,".0"),o()})}},lt=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Ae();const r=async n=>{n.preventDefault();const o=t.dataset.id;new FormData(n.currentTarget).forEach((f,B)=>{s[B]=f});const a=s.rate,d=s.email,c=s.review,w=new g;te(d);try{(await w.giveRating(o,a,d,c)).status===200&&(Se(),E())}catch{Ee()}xe();function xe(){const f=document.querySelector(".set-rating");let B=f.querySelector(".rating-value"),we=f.querySelector(".rating-active");B.textContent="0.0",we.style.width="0%",t.reset()}};t.addEventListener("submit",r),se(e)},Pe="/energy-flow-team-project/assets/dumbbell-71edb8d8.png",y="favoriteExerciseInfo",ne=document.querySelector(".favorites-list"),Te=async e=>{const t=new g;try{let n=function(){const o=document.querySelector(".exercise-modal-close-btn"),i=document.querySelectorAll(".exercise-rating-give-btn");b.addEventListener("click",a=>{a.target!==o&&a.target!==b||S()}),Fe(),_e(e),o.addEventListener("click",S),i.forEach(a=>a.addEventListener("click",Me))};const s=await t.getExerciseInfoById(e);T.innerHTML=be(s);const r=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,X(),se(r),n()}catch{A()}};async function Fe(){const e=new g,t=document.querySelector('[data-name="exercise-favorite-btn"]');t.addEventListener("click",async()=>{const s=t.id;try{const r=await e.getExerciseInfoById(s),n=re(),o=n.some(i=>i._id===r._id);if(Ue(t),!o)n.push(r),localStorage.setItem(y,JSON.stringify(n)),Q("This exercise is added to favorites");else{let i=await e.getExerciseInfoById(s),d=JSON.parse(localStorage.getItem(y)).filter(c=>c._id!==i._id);localStorage.setItem(y,JSON.stringify(d)),ne&&De(s)}}catch(r){console.error("Error fetching exercise info:",r)}})}function De(e){const t=document.querySelector(`.div-with-li[id="${e}"]`);if(t&&t.remove(),JSON.parse(localStorage.getItem(y)).length===0){ne.innerHTML=`<div class="favorites-no-results"><img
    class="favorites-div-without-cards-img"
    src="${Pe}"
    alt="dumbbell"
    width="85"
    height="52"
  />
  <p class="favorites-div-without-cards-text">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p></div>`,document.querySelector(".exercises-navigation-list").innerHTML="";return}}function re(){const e=localStorage.getItem(y);return e?JSON.parse(e):[]}function oe(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.firstElementChild.textContent="Remove from"}function ae(){const e=document.querySelector('[data-name="exercise-favorite-btn"]');e.firstElementChild.textContent="Add to favotites"}function Ue(e){e.firstElementChild.textContent==="Add to favotites"?oe():ae()}async function _e(e){const s=await new g().getExerciseInfoById(e);re().some(o=>o._id===s._id)?oe():ae()}function ie(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const D=document.querySelector(".exercises-search-wrap");let $,L,ce=window.innerWidth<=1440?8:9,I=!1;function le(e){const t=new g;if(I=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;P(),$=ue(e.target.dataset.filter),L=e.target.dataset.name}try{return t.getExercisesByCategory($,L,l,ce).then(s=>{const r=ge(s.results);O(s.totalPages,l,l),We(de(L)),M(r),He(),ie(_)})}catch{A()}}function de(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ne(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),U()}function He(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",je),e.addEventListener("input",ze)}function ue(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function ge(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${de(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Je(t.target)}</span></p>
      </div>
    </li>`).join("")}function M(e){m.classList.add("exercise-list"),m.innerHTML=e}function We(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function je(e){e.preventDefault(),P(),me()}function me(){I=!0;const e=D.firstElementChild.value;new g().getExercisesByKeyWord($,L,e,l,ce).then(s=>{if(s.results.length<=0)return Re(),M('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');O(s.totalPages,l,l);const r=ge(s.results);M(r)})}function ze(){const e=D.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",U)):pe()}function pe(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",U)}function U(){I=!1,D.reset(),pe()}function Je(e){return e.length>=9?e.slice(0,5)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",Ke);function Ke(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Te(t)}}const m=document.querySelector(".categories-list"),Ve=document.querySelector(".category-btns-list"),fe=document.querySelector(".exercises-title"),R=document.querySelector(".exercises-path-name"),Qe=document.querySelector(".navigation-list-form"),Ge=document.querySelector(".footer-subscription"),_=document.querySelector(".categories-list"),Ye=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>Ce(s,"current-category-btn")),qe(t,"current-category-btn")}))},Ze=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&_.classList.add("on-animate")})}),N=async e=>{const t=new g,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,l,s);O(r.totalPages,l,l),m.innerHTML=Le(r),m.addEventListener("click",le),Qe.addEventListener("submit",Ie),ie(m),Ze.observe(_)}catch{A()}},j=async e=>{const t=e.target.textContent.trim();P(),Xe(),await N(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function Xe(){R.textContent!==""&&(fe.textContent="Exercises",R.textContent="",R.classList.add("hidden"),Ne())}const dt=()=>{window.addEventListener("load",Ye),window.addEventListener("load",N),Ve.addEventListener("click",j),fe.addEventListener("click",j),Ge.addEventListener("submit",Oe)},et=document.querySelector(".quote-text"),tt=document.querySelector(".quote-author"),st=new g,nt=async()=>{try{const e=await st.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},ut=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await nt(),z()};function z(){const e=JSON.parse(localStorage.getItem("quoteObj"));et.innerHTML=e.quote,tt.innerHTML=e.author}const J=document.querySelector("[data-modal-open]"),K=document.querySelector("[data-modal-close]"),q=document.querySelector(".mobile-menu-wrapper"),gt=()=>{const e=document.querySelector(".home-page"),t=document.querySelector(".home-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))},mt=()=>{const e=document.querySelector(".favorites-page"),t=document.querySelector(".favorites-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))};let rt={37:1,38:1,39:1,40:1};function p(e){e.preventDefault()}function he(e){if(rt[e.keyCode])return p(e),!1}let ve=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ve=!0}}))}catch{}let C=ve?{passive:!1}:!1,ye="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ot(){window.addEventListener("DOMMouseScroll",p,!1),window.addEventListener(ye,p,C),window.addEventListener("touchmove",p,C),window.addEventListener("keydown",he,!1)}function at(){window.removeEventListener("DOMMouseScroll",p,!1),window.removeEventListener(ye,p,C),window.removeEventListener("touchmove",p,C),window.removeEventListener("keydown",he,!1)}const V=()=>{q&&q.classList.contains("none")?at():ot()},it=()=>{J&&K?(J.addEventListener("click",()=>{q.classList.toggle("none"),V()}),K.addEventListener("click",()=>{q.classList.toggle("none"),V()})):console.error("Modal open/close buttons not found")},pt=()=>{it()};export{g as E,dt as a,lt as b,ut as c,mt as d,O as e,Pe as f,Je as g,v as i,pt as m,Te as r,gt as s};
//# sourceMappingURL=header-modal-073e898e.js.map
