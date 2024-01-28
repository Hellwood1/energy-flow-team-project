import"./assets/index-d902a5f8.js";import{a as u,i as f}from"./assets/vendor-c4bdd18a.js";const me=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${s}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${a}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${s[0].toUpperCase()+s.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,""),pe=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:i,popularity:o,burnedCalories:l,description:y,_id:c})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="./images/sprite.svg#icon-close-modal"></use>
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
      <form class="rating-form">
          
            <div class="rating-container">
              <div class="rating-value">${s}</div>
              <div class="rating-body">
                <div class="rating-active"></div>
                <div class="rating-items">
                  <input
                    id="rate"
                    type="radio"
                    class="rating-item"
                    value="1"
                    name="rate"
                    required
                  />
                  <input
                    id="rate"
                    type="radio"
                    class="rating-item"
                    value="2"
                    name="rate"
                    required
                  />
                  <input
                    id="rate"
                    type="radio"
                    class="rating-item"
                    value="3"
                    name="rate"
                    required
                  />
                  <input
                    id="rate"
                    type="radio"
                    class="rating-item"
                    value="4"
                    name="rate"
                    required
                  />
                  <input
                    id="rate"
                    type="radio"
                    class="rating-item"
                    value="5"
                    name="rate"
                    required
                  />
                </div>
              </div>
            </div>
        </form>
    </div>
    <ul class="exercise-tags-list">
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Target</p>
        <p class="exercise-tags-value">${n}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${a}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${i}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${o}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${l}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${y}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="./images/sprite.svg#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${c}">
        Give a rating
      </button>
    </div>
  </div>
`;class h{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,n){const a=new URLSearchParams({filter:t,page:s,limit:n});return(await u.get(`${this.BASE_URL}/filters?${a}`)).data}async getExercisesByCategory(t,s,n,a){const i=new URLSearchParams({[t]:s,page:n,limit:a});return(await u.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExercisesByKeyWord(t,s,n,a,i){const o=new URLSearchParams({[t]:s,keyword:n,page:a,limit:i});return(await u.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,n,a){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:n,review:a}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const I=()=>{f.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=e=>{f.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},_=e=>{f.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=()=>{f.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},V=e=>{f.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=(e,t="hidden")=>{e.classList.add(t)},ye=(e,t="hidden")=>{e.classList.remove(t)};let d=1,W="test";document.querySelector(".navigation-list-form");const K=document.querySelector(".exercises-navigation-list");function xe(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function A(e,t){const s=xe(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");K.innerHTML=s,Le()}function we(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;d=e.submitter.textContent,W=Y(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?U(W):b?ee():Z()}function D(){d=1}function Le(){const e=document.querySelectorAll(".exercises-navigation-item");if(d<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===d&&e[t].firstElementChild.classList.add("pagination-current")}function Se(){K.innerHTML=""}const Ee=async e=>{const t=new h,s=document.querySelector(".exercise-modal"),n=document.querySelector(".exercise-modal-backdrop");try{const o=await t.getExerciseInfoById(e);s.innerHTML=pe(o),document.querySelector(".send-rating-form").dataset.id=e,i();const l=document.querySelector(".exercise-modal-close-btn");n.addEventListener("click",c=>{c.target!==l&&c.target!==n||a()}),l.addEventListener("click",a),document.addEventListener("keydown",c=>{c.key==="Escape"&&a()}),document.querySelectorAll(".exercise-rating-give-btn").forEach(c=>c.addEventListener("click",()=>{const q=document.querySelector("[data-modal-rating-backdrop]"),x=document.querySelector("[data-modal-rating-container]");q.classList.remove("backdrop-rating-is-hidden"),x.classList.remove("modal-rating-is-hidden"),a()}))}catch{V()}function a(){n.classList.add("backdrop-is-hidden"),s.classList.add("modal-is-hidden")}function i(){n.classList.remove("backdrop-is-hidden"),s.classList.remove("modal-is-hidden")}},C="/energy-flow-team-project/assets/sprite-32ec9a67.svg",O=document.querySelector(".categories-list"),be=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&O.classList.add("on-animate")})});be.observe(O);function Q(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const T=document.querySelector(".exercises-search-wrap");let $,S,J=window.innerWidth<=1440?8:9,b=!1;function Z(e){const t=new h;if(b=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;D(),$=Y(e.target.dataset.filter),S=e.target.dataset.name}try{return t.getExercisesByCategory($,S,d,J).then(s=>{const n=X(s.results);A(s.totalPages,d),Ce(G(S)),R(n),ke(),Q(O)})}catch{I()}}function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),F()}function ke(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Be),e.addEventListener("input",$e)}function Y(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function X(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${C}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${C}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${C}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${G(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Re(t.target)}</span></p>
      </div>
    </li>`).join("")}function R(e){m.classList.add("exercise-list"),m.innerHTML=e}function Ce(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Be(e){e.preventDefault(),D(),ee()}function ee(){b=!0;const e=T.firstElementChild.value;new h().getExercisesByKeyWord($,S,e,d,J).then(s=>{if(s.results.length<=0)return Se(),R('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');A(s.totalPages,d);const n=X(s.results);R(n)})}function $e(){const e=T.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",F)):te()}function te(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",F)}function F(){b=!1,T.reset(),te()}function Re(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",Me);function Me(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Ee(t)}}async function Pe(e){e.preventDefault();const t=new h,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return _("Please, enter the valid email :)");try{const a=await t.sendSubscription(s);he(a.message)}catch{_("The subscription has already been sent to this email")}}const m=document.querySelector(".categories-list"),Ie=document.querySelector(".category-btns-list"),se=document.querySelector(".exercises-title"),B=document.querySelector(".exercises-path-name"),Ae=document.querySelector(".navigation-list-form"),De=document.querySelector(".footer-subscription"),Oe=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>ye(s,"current-category-btn")),fe(t,"current-category-btn")}))},U=async e=>{const t=new h,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,d,s);A(n.totalPages,d),m.innerHTML=me(n),m.addEventListener("click",Z),Ae.addEventListener("submit",we),Q(m)}catch{I()}},H=async e=>{const t=e.target.textContent.trim();D(),Te(),await U(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function Te(){B.textContent!==""&&(se.textContent="Exercises",B.textContent="",B.classList.add("hidden"),qe())}const Fe=()=>{window.addEventListener("load",Oe),window.addEventListener("load",U),Ie.addEventListener("click",H),se.addEventListener("click",H),De.addEventListener("submit",Pe)},Ue=document.querySelector(".quote-text"),_e=document.querySelector(".quote-author"),We=new h,He=async()=>{try{const e=await We.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},ze=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await He(),z()};function z(){const e=JSON.parse(localStorage.getItem("quoteObj"));Ue.innerHTML=e.quote,_e.innerHTML=e.author}const Ne=document.querySelectorAll(".rating-container"),je=()=>{let e,t;Ne.forEach(r=>s(r));function s(r){n(r),a(),r.classList.contains("set-rating")&&i(r)}function n(r){e=r.querySelector(".rating-active"),t=r.querySelector(".rating-value")}function a(r=t.innerHTML){const v=r/.05;e.style.width=`${v}%`}function i(r){const v=r.querySelectorAll(".rating-item");for(const g of v)g.addEventListener("mouseenter",w=>{n(r),a(g.value)}),g.addEventListener("mouseleave",w=>{a()}),g.addEventListener("click",w=>{g.checked=!0,n(r),t.innerHTML=g.value.padEnd(3,".0"),a()})}const o=document.querySelector(".rating-form");let l={};const y=async r=>{r.preventDefault();const v=o.dataset.id;new FormData(r.currentTarget).forEach((L,ge)=>{l[ge]=L});const w=l.rate,de=l.email,ue=l.review;new h().giveRating(v,w,de,ue).then(L=>{L.status===200?(ve(),k()):V()}).catch(L=>I()),t.innerHTML=0,a(),o.reset()};o.addEventListener("submit",y);const c=document.querySelector("[data-modal-rating-close]"),q=document.querySelector("[data-modal-rating]"),x=document.querySelector("[data-modal-rating-backdrop]"),oe=document.querySelector("[data-modal-rating-container]");le();function k(){x.classList.add("backdrop-rating-is-hidden"),oe.classList.add("modal-rating-is-hidden");const r=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.remove("backdrop-is-hidden"),r.classList.remove("modal-is-hidden")}function ce(r){r.target.key}function le(){c.addEventListener("click",k),window.addEventListener("keydown",ce),q.addEventListener("click",r=>{r.target!==x&&r.target!==c||k()})}},Ve=document.querySelector("[data-modal-open]"),Ke=document.querySelector("[data-modal-close]"),M=document.querySelector(".header__modal"),Qe=document.querySelector(".navigation__links--box");Qe.firstElementChild.classList.add("active-page");let Je={37:1,38:1,39:1,40:1};function p(e){e.preventDefault()}function ne(e){if(Je[e.keyCode])return p(e),!1}let ae=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ae=!0}}))}catch{}let E=ae?{passive:!1}:!1,re="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ze(){window.addEventListener("DOMMouseScroll",p,!1),window.addEventListener(re,p,E),window.addEventListener("touchmove",p,E),window.addEventListener("keydown",ne,!1)}function Ge(){window.removeEventListener("DOMMouseScroll",p,!1),window.removeEventListener(re,p,E),window.removeEventListener("touchmove",p,E),window.removeEventListener("keydown",ne,!1)}const N=()=>M.classList.contains("none")?Ge():Ze(),j=()=>{Ve.addEventListener("click",()=>{M.classList.toggle("none"),N()}),Ke.addEventListener("click",()=>{M.classList.toggle("none"),N()})},Ye=()=>{if(j())return j()},P=document.querySelector(".up-btn");P.addEventListener("click",Xe);window.onscroll=function(){ie()};function ie(){document.documentElement.scrollTop>2e3?P.style.display="block":P.style.display="none"}function Xe(){document.documentElement.scrollTop=0}Ye();Fe();ze();je();ie();
//# sourceMappingURL=commonHelpers.js.map
