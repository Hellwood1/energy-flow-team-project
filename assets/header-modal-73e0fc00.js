import{a as u,i as y}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const v="/energy-flow-team-project/assets/sprite-32ec9a67.svg",fe=({results:e=[]})=>e.reduce((t,{name:s,filter:r,imgUrl:n})=>t+`<li
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
  </li>`,""),ve=({gifUrl:e,name:t,rating:s,target:r,bodyPart:n,equipment:a,popularity:c,burnedCalories:i,description:d,_id:o})=>`
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
        <p class="exercise-tags-value">${a}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${c}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${i}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${d}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn" id="${o}">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${v}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${o}">
        Give a rating
      </button>
    </div>
  </div>
`;class h{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,r){const n=new URLSearchParams({filter:t,page:s,limit:r});return(await u.get(`${this.BASE_URL}/filters?${n}`)).data}async getExercisesByCategory(t,s,r,n){const a=new URLSearchParams({[t]:s,page:r,limit:n});return(await u.get(`${this.BASE_URL}/exercises?${a}`)).data}async getExercisesByKeyWord(t,s,r,n,a){const c=new URLSearchParams({[t]:s,keyword:r,page:n,limit:a});return(await u.get(`${this.BASE_URL}/exercises?${c}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,r,n){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:r,review:n}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const I=()=>{y.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},$=e=>{y.success({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},Q=e=>{y.error({message:e,backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ye=()=>{y.success({message:"Thank you for your feedback",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},xe=()=>{y.error({message:"Such email already exists",backgroundColor:"rgba(246, 246, 246, 0.6)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},Le=(e,t="hidden")=>{e.classList.add(t)},we=(e,t="hidden")=>{e.classList.remove(t)};let l=1,W="test";document.querySelector(".navigation-list-form");const G=document.querySelector(".exercises-navigation-list");function be(e,t){let s=[];if(e<5)for(let r=1;r<=e;r++)s.push(r);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function P(e,t,s){const r=be(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");G.innerHTML=r,Ee(s)}function Se(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(l=e.submitter.textContent,W=ie(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?N(W):C?ce():re())}function O(){l=1}function Ee(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function qe(){G.innerHTML=""}const A=document.querySelector(".exercise-modal"),L=document.querySelector(".exercise-modal-backdrop"),Ce=document.querySelector("[data-modal-rating]"),T=document.querySelector("[data-modal-rating-backdrop]"),Y=document.querySelector("[data-modal-rating-container]"),_=document.querySelector("[data-modal-rating-close]"),Z=()=>{L.classList.remove("backdrop-is-hidden"),A.classList.remove("modal-is-hidden"),window.addEventListener("keydown",q)},w=()=>{L.classList.add("backdrop-is-hidden"),A.classList.add("modal-is-hidden"),window.removeEventListener("keydown",q)},ke=()=>{T.classList.remove("backdrop-rating-is-hidden"),Y.classList.remove("modal-rating-is-hidden"),w(),window.removeEventListener("keydown",q),window.addEventListener("keydown",X)},b=()=>{T.classList.add("backdrop-rating-is-hidden"),Y.classList.add("modal-rating-is-hidden"),Z(),window.removeEventListener("keydown",X),window.addEventListener("keydown",q)};function q(e){e.key==="Escape"&&w()}function X(e){e.key==="Escape"&&b()}const Re=()=>{_.addEventListener("click",b),Ce.addEventListener("click",e=>{e.target!==T&&e.target!==_||b()})};async function $e(e){e.preventDefault();const t=new h,s=document.querySelector(".input-footer").value,r=document.querySelector(".footer-subscription");ee(s);try{const n=await t.sendSubscription(s);$(n.message),r.reset()}catch{Q("The subscription has already been sent to this email")}}function ee(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return Q("Please, enter the valid email :)")}const te=(e=[])=>{let t,s;e.forEach(i=>r(i));function r(i){n(i),a(),i.classList.contains("set-rating")&&c(i)}function n(i){t=i.querySelector(".rating-active"),s=i.querySelector(".rating-value")}function a(i=s.innerHTML){const d=i/.05;t.style.width=`${d}%`}function c(i){const d=i.querySelectorAll(".rating-item");for(const o of d)o.addEventListener("mouseenter",g=>{n(i),a(o.value)}),o.addEventListener("mouseleave",g=>{a()}),o.addEventListener("click",g=>{o.checked=!0,n(i),s.innerHTML=o.value.padEnd(3,".0"),a()})}},Xe=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Re();const r=async n=>{n.preventDefault();const a=t.dataset.id;new FormData(n.currentTarget).forEach((f,k)=>{s[k]=f});const i=s.rate,d=s.email,o=s.review,g=new h;ee(d);try{(await g.giveRating(a,i,d,o)).status===200&&(ye(),b())}catch{xe()}pe();function pe(){const f=document.querySelector(".set-rating");let k=f.querySelector(".rating-value"),he=f.querySelector(".rating-active");k.textContent="0.0",he.style.width="0%",t.reset()}};t.addEventListener("submit",r),te(e)},H="favoriteExerciseIds",Be=async e=>{const t=new h;try{let n=function(){const a=document.querySelector(".exercise-modal-close-btn"),c=document.querySelectorAll(".exercise-rating-give-btn");L.addEventListener("click",o=>{o.target!==a&&o.target!==L||w()});const i=document.querySelector(".exercise-favorite-add-btn");i.addEventListener("click",()=>{const o=i.id,g=d();g.includes(o)?$("This exercise is already in favorites"):(g.push(o),localStorage.setItem(H,JSON.stringify(g)),$("This exercise is add in favorites"))});function d(){const o=localStorage.getItem(H);return o?JSON.parse(o):[]}a.addEventListener("click",w),c.forEach(o=>o.addEventListener("click",ke))};const s=await t.getExerciseInfoById(e);A.innerHTML=ve(s);const r=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,Z(),te(r),n()}catch{I()}};function se(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const F=document.querySelector(".exercises-search-wrap");let B,x,ne=window.innerWidth<=1440?8:9,C=!1;function re(e){const t=new h;if(C=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;O(),B=ie(e.target.dataset.filter),x=e.target.dataset.name}try{return t.getExercisesByCategory(B,x,l,ne).then(s=>{const r=oe(s.results);P(s.totalPages,l,l),Pe(ae(x)),M(r),Ie(),se(U)})}catch{I()}}function ae(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Me(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),D()}function Ie(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Oe),e.addEventListener("input",Ae)}function ie(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function oe(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${ae(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Te(t.target)}</span></p>
      </div>
    </li>`).join("")}function M(e){m.classList.add("exercise-list"),m.innerHTML=e}function Pe(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Oe(e){e.preventDefault(),O(),ce()}function ce(){C=!0;const e=F.firstElementChild.value;new h().getExercisesByKeyWord(B,x,e,l,ne).then(s=>{if(s.results.length<=0)return qe(),M('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');P(s.totalPages,l,l);const r=oe(s.results);M(r)})}function Ae(){const e=F.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",D)):le()}function le(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",D)}function D(){C=!1,F.reset(),le()}function Te(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",Fe);function Fe(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Be(t)}}const m=document.querySelector(".categories-list"),De=document.querySelector(".category-btns-list"),de=document.querySelector(".exercises-title"),R=document.querySelector(".exercises-path-name"),Ue=document.querySelector(".navigation-list-form"),Ne=document.querySelector(".footer-subscription"),U=document.querySelector(".categories-list"),We=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>we(s,"current-category-btn")),Le(t,"current-category-btn")}))},_e=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&U.classList.add("on-animate")})}),N=async e=>{const t=new h,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const r=await t.getCategoriesByFilter(e,l,s);P(r.totalPages,l,l),m.innerHTML=fe(r),m.addEventListener("click",re),Ue.addEventListener("submit",Se),se(m),_e.observe(U)}catch{I()}},z=async e=>{const t=e.target.textContent.trim();O(),He(),await N(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function He(){R.textContent!==""&&(de.textContent="Exercises",R.textContent="",R.classList.add("hidden"),Me())}const et=()=>{window.addEventListener("load",We),window.addEventListener("load",N),De.addEventListener("click",z),de.addEventListener("click",z),Ne.addEventListener("submit",$e)},ze=document.querySelector(".quote-text"),je=document.querySelector(".quote-author"),Ke=new h,Ve=async()=>{try{const e=await Ke.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},tt=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await Ve(),j()};function j(){const e=JSON.parse(localStorage.getItem("quoteObj"));ze.innerHTML=e.quote,je.innerHTML=e.author}const K=document.querySelector("[data-modal-open]"),V=document.querySelector("[data-modal-close]"),S=document.querySelector(".mobile-menu-wrapper"),st=()=>{const e=document.querySelector(".home-page"),t=document.querySelector(".home-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))},nt=()=>{const e=document.querySelector(".favorites-page"),t=document.querySelector(".favorites-mobile-page");e&&t&&(e.classList.add("active-page"),t.classList.add("active-page"))};let Je={37:1,38:1,39:1,40:1};function p(e){e.preventDefault()}function ue(e){if(Je[e.keyCode])return p(e),!1}let ge=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ge=!0}}))}catch{}let E=ge?{passive:!1}:!1,me="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Qe(){window.addEventListener("DOMMouseScroll",p,!1),window.addEventListener(me,p,E),window.addEventListener("touchmove",p,E),window.addEventListener("keydown",ue,!1)}function Ge(){window.removeEventListener("DOMMouseScroll",p,!1),window.removeEventListener(me,p,E),window.removeEventListener("touchmove",p,E),window.removeEventListener("keydown",ue,!1)}const J=()=>{S&&S.classList.contains("none")?Ge():Qe()},Ye=()=>{K&&V?(K.addEventListener("click",()=>{S.classList.toggle("none"),J()}),V.addEventListener("click",()=>{S.classList.toggle("none"),J()})):console.error("Modal open/close buttons not found")},rt=()=>{Ye()};export{h as E,et as a,Xe as b,tt as c,nt as d,I as e,Be as f,v as i,rt as m,P as r,st as s};
//# sourceMappingURL=header-modal-73e0fc00.js.map
