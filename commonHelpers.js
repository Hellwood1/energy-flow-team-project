import{i as y,E as v}from"./assets/api-service-af5b7599.js";import{i as x}from"./assets/vendor-c4bdd18a.js";const ue=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
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
  </li>`,""),me=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:c,popularity:d,burnedCalories:r,description:l,_id:u})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${y}#icon-close-modal"></use>
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
        <p class="exercise-tags-value">${n}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${a}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${c}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${d}</p>
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
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${y}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${u}">
        Give a rating
      </button>
    </div>
  </div>
`,b=()=>{x.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ge=e=>{x.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},F=e=>{x.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},pe=()=>{x.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=e=>{x.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=(e,t="hidden")=>{e.classList.add(t)},fe=(e,t="hidden")=>{e.classList.remove(t)};let m=1,W="test";document.querySelector(".navigation-list-form");const U=document.querySelector(".exercises-navigation-list");function ye(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function I(e,t){const s=ye(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");U.innerHTML=s,we()}function xe(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;m=e.submitter.textContent,W=Z(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?T(W):k?Y():Q()}function R(){m=1}function we(){const e=document.querySelectorAll(".exercises-navigation-item");if(m<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===m&&e[t].firstElementChild.classList.add("pagination-current")}function Le(){U.innerHTML=""}const j=(e=[])=>{let t,s;e.forEach(r=>n(r));function n(r){a(r),c(),r.classList.contains("set-rating")&&d(r)}function a(r){t=r.querySelector(".rating-active"),s=r.querySelector(".rating-value")}function c(r=s.innerHTML){const l=r/.05;t.style.width=`${l}%`}function d(r){const l=r.querySelectorAll(".rating-item");for(const u of l)u.addEventListener("mouseenter",o=>{a(r),c(u.value)}),u.addEventListener("mouseleave",o=>{c()}),u.addEventListener("click",o=>{u.checked=!0,a(r),s.innerHTML=u.value.padEnd(3,".0"),c()})}},Se=()=>{const e=document.querySelector("[data-modal-rating-close]"),t=document.querySelector("[data-modal-rating]"),s=document.querySelector("[data-modal-rating-backdrop]"),n=document.querySelector("[data-modal-rating-container]"),a=document.querySelectorAll(".rating-container"),c=document.querySelector(".rating-form");let d={};const r=async i=>{i.preventDefault();const w=c.dataset.id;new FormData(i.currentTarget).forEach((L,le)=>{d[le]=L});const ae=d.rate,ie=d.email,oe=d.review;new v().giveRating(w,ae,ie,oe).then(L=>{L.status===200?(pe(),l()):he()}).catch(L=>b());const A=document.querySelector(".set-rating");let ce=A.querySelector(".rating-value"),de=A.querySelector(".rating-active");ce.textContent="0.0",de.style.width="0%",c.reset()};c.addEventListener("submit",r),j(a),e.addEventListener("click",l),t.addEventListener("click",i=>{i.target!==s&&i.target!==e||l()});function l(){s.classList.add("backdrop-rating-is-hidden"),n.classList.add("modal-rating-is-hidden");const i=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.remove("backdrop-is-hidden"),i.classList.remove("modal-is-hidden"),window.removeEventListener("keydown",u),window.addEventListener("keydown",g)}function u(i){i.key==="Escape"&&l()}function o(){const i=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.add("backdrop-is-hidden"),i.classList.add("modal-is-hidden")}function g(i){i.key==="Escape"&&o()}},Ee=async e=>{const t=new v,s=document.querySelector(".exercise-modal"),n=document.querySelector(".exercise-modal-backdrop");try{const o=await t.getExerciseInfoById(e);s.innerHTML=me(o),document.querySelector(".send-rating-form").dataset.id=e,c();const g=document.querySelectorAll(".rating-container");j(g);const i=document.querySelector(".exercise-modal-close-btn");n.addEventListener("click",f=>{f.target!==i&&f.target!==n||a()}),i.addEventListener("click",a),document.querySelectorAll(".exercise-rating-give-btn").forEach(f=>f.addEventListener("click",u))}catch{b()}function a(){n.classList.add("backdrop-is-hidden"),s.classList.add("modal-is-hidden"),window.removeEventListener("keydown",d)}function c(){n.classList.remove("backdrop-is-hidden"),s.classList.remove("modal-is-hidden"),window.addEventListener("keydown",d)}function d(o){o.key==="Escape"&&a()}function r(o){o.key==="Escape"&&l()}function l(){const o=document.querySelector("[data-modal-rating-backdrop]"),g=document.querySelector("[data-modal-rating-container]");o.classList.add("backdrop-rating-is-hidden"),g.classList.add("modal-rating-is-hidden"),n.classList.remove("backdrop-is-hidden"),s.classList.remove("modal-is-hidden")}function u(){const o=document.querySelector("[data-modal-rating-backdrop]"),g=document.querySelector("[data-modal-rating-container]");o.classList.remove("backdrop-rating-is-hidden"),g.classList.remove("modal-rating-is-hidden"),a(),window.removeEventListener("keydown",d),window.addEventListener("keydown",r)}},P=document.querySelector(".categories-list"),be=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&P.classList.add("on-animate")})});be.observe(P);function _(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const D=document.querySelector(".exercises-search-wrap");let C,S,K=window.innerWidth<=1440?8:9,k=!1;function Q(e){const t=new v;if(k=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;R(),C=Z(e.target.dataset.filter),S=e.target.dataset.name}try{return t.getExercisesByCategory(C,S,m,K).then(s=>{const n=G(s.results);I(s.totalPages,m),Ce(J(S)),B(n),qe(),_(P)})}catch{b()}}function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ke(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),O()}function qe(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Be),e.addEventListener("input",Me)}function Z(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function G(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${y}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${y}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${y}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${J(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${$e(t.target)}</span></p>
      </div>
    </li>`).join("")}function B(e){p.classList.add("exercise-list"),p.innerHTML=e}function Ce(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Be(e){e.preventDefault(),R(),Y()}function Y(){k=!0;const e=D.firstElementChild.value;new v().getExercisesByKeyWord(C,S,e,m,K).then(s=>{if(s.results.length<=0)return Le(),B('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');I(s.totalPages,m);const n=G(s.results);B(n)})}function Me(){const e=D.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",O)):X()}function X(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",O)}function O(){k=!1,D.reset(),X()}function $e(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",Ie);function Ie(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Ee(t)}}async function Re(e){e.preventDefault();const t=new v,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return F("Please, enter the valid email :)");try{const a=await t.sendSubscription(s);ge(a.message)}catch{F("The subscription has already been sent to this email")}}const p=document.querySelector(".categories-list"),Pe=document.querySelector(".category-btns-list"),ee=document.querySelector(".exercises-title"),q=document.querySelector(".exercises-path-name"),De=document.querySelector(".navigation-list-form"),Oe=document.querySelector(".footer-subscription"),Te=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>fe(s,"current-category-btn")),ve(t,"current-category-btn")}))},T=async e=>{const t=new v,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,m,s);I(n.totalPages,m),p.innerHTML=ue(n),p.addEventListener("click",Q),De.addEventListener("submit",xe),_(p)}catch{b()}},z=async e=>{const t=e.target.textContent.trim();R(),Ae(),await T(t),p.classList.contains("exercise-list")&&p.classList.remove("exercise-list")};function Ae(){q.textContent!==""&&(ee.textContent="Exercises",q.textContent="",q.classList.add("hidden"),ke())}const Fe=()=>{window.addEventListener("load",Te),window.addEventListener("load",T),Pe.addEventListener("click",z),ee.addEventListener("click",z),Oe.addEventListener("submit",Re)},We=document.querySelector(".quote-text"),ze=document.querySelector(".quote-author"),He=new v,Ne=async()=>{try{const e=await He.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},Ve=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await Ne(),H()};function H(){const e=JSON.parse(localStorage.getItem("quoteObj"));We.innerHTML=e.quote,ze.innerHTML=e.author}const Ue=document.querySelector("[data-modal-open]"),je=document.querySelector("[data-modal-close]"),M=document.querySelector(".header__modal"),_e=document.querySelector(".navigation__links--box");_e.firstElementChild.classList.add("active-page");let Ke={37:1,38:1,39:1,40:1};function h(e){e.preventDefault()}function te(e){if(Ke[e.keyCode])return h(e),!1}let se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){se=!0}}))}catch{}let E=se?{passive:!1}:!1,ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Qe(){window.addEventListener("DOMMouseScroll",h,!1),window.addEventListener(ne,h,E),window.addEventListener("touchmove",h,E),window.addEventListener("keydown",te,!1)}function Je(){window.removeEventListener("DOMMouseScroll",h,!1),window.removeEventListener(ne,h,E),window.removeEventListener("touchmove",h,E),window.removeEventListener("keydown",te,!1)}const N=()=>M.classList.contains("none")?Je():Qe(),V=()=>{Ue.addEventListener("click",()=>{M.classList.toggle("none"),N()}),je.addEventListener("click",()=>{M.classList.toggle("none"),N()})},Ze=()=>{if(V())return V()},$=document.querySelector(".up-btn");$.addEventListener("click",Ge);window.onscroll=function(){re()};function re(){document.documentElement.scrollTop>2e3?$.style.display="block":$.style.display="none"}function Ge(){document.documentElement.scrollTop=0}Ze();Fe();Ve();Se();re();
//# sourceMappingURL=commonHelpers.js.map
