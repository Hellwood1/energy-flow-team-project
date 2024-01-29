import{i as v,E as g}from"./assets/api-service-01af4489.js";import{i as f}from"./assets/vendor-c4bdd18a.js";const me=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
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
  </li>`,""),ge=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:p,popularity:l,burnedCalories:c,description:y,_id:i})=>`
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
        <p class="exercise-tags-value">${p}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${l}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${c}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${y}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${v}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${i}">
        Give a rating
      </button>
    </div>
  </div>
`,P=()=>{f.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},pe=e=>{f.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},W=e=>{f.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=()=>{f.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},j=e=>{f.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=(e,t="hidden")=>{e.classList.add(t)},fe=(e,t="hidden")=>{e.classList.remove(t)};let o=1,H="test";document.querySelector(".navigation-list-form");const _=document.querySelector(".exercises-navigation-list");function ye(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function R(e,t){const s=ye(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");_.innerHTML=s,Le()}function xe(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;o=e.submitter.textContent,H=G(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?A(H):E?X():J()}function D(){o=1}function Le(){const e=document.querySelectorAll(".exercises-navigation-item");if(o<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===o&&e[t].firstElementChild.classList.add("pagination-current")}function we(){_.innerHTML=""}const be=async e=>{const t=new g,s=document.querySelector(".exercise-modal"),n=document.querySelector(".exercise-modal-backdrop");try{const l=await t.getExerciseInfoById(e);s.innerHTML=ge(l),document.querySelector(".send-rating-form").dataset.id=e,p();const c=document.querySelector(".exercise-modal-close-btn");n.addEventListener("click",i=>{i.target!==c&&i.target!==n||a()}),c.addEventListener("click",a),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),document.querySelectorAll(".exercise-rating-give-btn").forEach(i=>i.addEventListener("click",()=>{const q=document.querySelector("[data-modal-rating-backdrop]"),x=document.querySelector("[data-modal-rating-container]");q.classList.remove("backdrop-rating-is-hidden"),x.classList.remove("modal-rating-is-hidden"),a()}))}catch{j()}function a(){n.classList.add("backdrop-is-hidden"),s.classList.add("modal-is-hidden")}function p(){n.classList.remove("backdrop-is-hidden"),s.classList.remove("modal-is-hidden")}},O=document.querySelector(".categories-list"),Se=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&O.classList.add("on-animate")})});Se.observe(O);function K(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const T=document.querySelector(".exercises-search-wrap");let B,b,Q=window.innerWidth<=1440?8:9,E=!1;function J(e){const t=new g;if(E=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;D(),B=G(e.target.dataset.filter),b=e.target.dataset.name}try{return t.getExercisesByCategory(B,b,o,Q).then(s=>{const n=Y(s.results);R(s.totalPages,o),ke(Z(b)),M(n),qe(),K(O)})}catch{P()}}function Z(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ee(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),F()}function qe(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Ce),e.addEventListener("input",Be)}function G(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function Y(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${Z(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Me(t.target)}</span></p>
      </div>
    </li>`).join("")}function M(e){u.classList.add("exercise-list"),u.innerHTML=e}function ke(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Ce(e){e.preventDefault(),D(),X()}function X(){E=!0;const e=T.firstElementChild.value;new g().getExercisesByKeyWord(B,b,e,o,Q).then(s=>{if(s.results.length<=0)return we(),M('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');R(s.totalPages,o);const n=Y(s.results);M(n)})}function Be(){const e=T.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",F)):ee()}function ee(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",F)}function F(){E=!1,T.reset(),ee()}function Me(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",$e);function $e(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;be(t)}}async function Ie(e){e.preventDefault();const t=new g,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return W("Please, enter the valid email :)");try{const a=await t.sendSubscription(s);pe(a.message)}catch{W("The subscription has already been sent to this email")}}const u=document.querySelector(".categories-list"),Pe=document.querySelector(".category-btns-list"),te=document.querySelector(".exercises-title"),C=document.querySelector(".exercises-path-name"),Re=document.querySelector(".navigation-list-form"),De=document.querySelector(".footer-subscription"),Oe=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>fe(s,"current-category-btn")),ve(t,"current-category-btn")}))},A=async e=>{const t=new g,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,o,s);R(n.totalPages,o),u.innerHTML=me(n),u.addEventListener("click",J),Re.addEventListener("submit",xe),K(u)}catch{P()}},z=async e=>{const t=e.target.textContent.trim();D(),Te(),await A(t),u.classList.contains("exercise-list")&&u.classList.remove("exercise-list")};function Te(){C.textContent!==""&&(te.textContent="Exercises",C.textContent="",C.classList.add("hidden"),Ee())}const Fe=()=>{window.addEventListener("load",Oe),window.addEventListener("load",A),Pe.addEventListener("click",z),te.addEventListener("click",z),De.addEventListener("submit",Ie)},Ae=document.querySelector(".quote-text"),We=document.querySelector(".quote-author"),He=new g,ze=async()=>{try{const e=await He.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},Ne=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ze(),N()};function N(){const e=JSON.parse(localStorage.getItem("quoteObj"));Ae.innerHTML=e.quote,We.innerHTML=e.author}const Ue=document.querySelectorAll(".rating-container"),Ve=()=>{let e,t;Ue.forEach(r=>s(r));function s(r){n(r),a(),r.classList.contains("set-rating")&&p(r)}function n(r){e=r.querySelector(".rating-active"),t=r.querySelector(".rating-value")}function a(r=t.innerHTML){const h=r/.05;e.style.width=`${h}%`}function p(r){const h=r.querySelectorAll(".rating-item");for(const d of h)d.addEventListener("mouseenter",L=>{n(r),a(d.value)}),d.addEventListener("mouseleave",L=>{a()}),d.addEventListener("click",L=>{d.checked=!0,n(r),t.innerHTML=d.value.padEnd(3,".0"),a()})}const l=document.querySelector(".rating-form");let c={};const y=async r=>{r.preventDefault();const h=l.dataset.id;new FormData(r.currentTarget).forEach((w,ue)=>{c[ue]=w});const L=c.rate,le=c.email,de=c.review;new g().giveRating(h,L,le,de).then(w=>{w.status===200?(he(),k()):j()}).catch(w=>P()),t.innerHTML=0,a(),l.reset()};l.addEventListener("submit",y);const i=document.querySelector("[data-modal-rating-close]"),q=document.querySelector("[data-modal-rating]"),x=document.querySelector("[data-modal-rating-backdrop]"),ie=document.querySelector("[data-modal-rating-container]");ce();function k(){x.classList.add("backdrop-rating-is-hidden"),ie.classList.add("modal-rating-is-hidden");const r=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.remove("backdrop-is-hidden"),r.classList.remove("modal-is-hidden")}function oe(r){r.target.key}function ce(){i.addEventListener("click",k),window.addEventListener("keydown",oe),q.addEventListener("click",r=>{r.target!==x&&r.target!==i||k()})}},je=document.querySelector("[data-modal-open]"),_e=document.querySelector("[data-modal-close]"),$=document.querySelector(".header__modal"),Ke=document.querySelector(".navigation__links--box");Ke.firstElementChild.classList.add("active-page");let Qe={37:1,38:1,39:1,40:1};function m(e){e.preventDefault()}function se(e){if(Qe[e.keyCode])return m(e),!1}let ne=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ne=!0}}))}catch{}let S=ne?{passive:!1}:!1,re="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Je(){window.addEventListener("DOMMouseScroll",m,!1),window.addEventListener(re,m,S),window.addEventListener("touchmove",m,S),window.addEventListener("keydown",se,!1)}function Ze(){window.removeEventListener("DOMMouseScroll",m,!1),window.removeEventListener(re,m,S),window.removeEventListener("touchmove",m,S),window.removeEventListener("keydown",se,!1)}const U=()=>$.classList.contains("none")?Ze():Je(),V=()=>{je.addEventListener("click",()=>{$.classList.toggle("none"),U()}),_e.addEventListener("click",()=>{$.classList.toggle("none"),U()})},Ge=()=>{if(V())return V()},I=document.querySelector(".up-btn");I.addEventListener("click",Ye);window.onscroll=function(){ae()};function ae(){document.documentElement.scrollTop>2e3?I.style.display="block":I.style.display="none"}function Ye(){document.documentElement.scrollTop=0}Ge();Fe();Ne();Ve();ae();
//# sourceMappingURL=commonHelpers.js.map
