import{i as h,E as p}from"./assets/api-service-af5b7599.js";import{i as v}from"./assets/vendor-c4bdd18a.js";const le=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:i})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${s}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${i}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${s[0].toUpperCase()+s.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,""),de=({gifUrl:e,name:t,rating:s,target:n,bodyPart:i,equipment:o,popularity:l,burnedCalories:r,description:c,_id:d})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${h}#icon-close-modal"></use>
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
        <p class="exercise-tags-value">${i}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${o}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${l}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${r}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${c}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${h}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${d}">
        Give a rating
      </button>
    </div>
  </div>
`,w=()=>{v.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ue=e=>{v.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},T=e=>{v.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ge=()=>{v.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},me=e=>{v.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},pe=(e,t="hidden")=>{e.classList.add(t)},he=(e,t="hidden")=>{e.classList.remove(t)};let u=1,A="test";document.querySelector(".navigation-list-form");const N=document.querySelector(".exercises-navigation-list");function ve(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function B(e,t){const s=ve(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");N.innerHTML=s,ye()}function fe(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;u=e.submitter.textContent,A=Q(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?R(A):S?Z():_()}function M(){u=1}function ye(){const e=document.querySelectorAll(".exercises-navigation-item");if(u<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===u&&e[t].firstElementChild.classList.add("pagination-current")}function xe(){N.innerHTML=""}const V=(e=[])=>{let t,s;e.forEach(r=>n(r));function n(r){i(r),o(),r.classList.contains("set-rating")&&l(r)}function i(r){t=r.querySelector(".rating-active"),s=r.querySelector(".rating-value")}function o(r=s.innerHTML){const c=r/.05;t.style.width=`${c}%`}function l(r){const c=r.querySelectorAll(".rating-item");for(const d of c)d.addEventListener("mouseenter",a=>{i(r),o(d.value)}),d.addEventListener("mouseleave",a=>{o()}),d.addEventListener("click",a=>{d.checked=!0,i(r),s.innerHTML=d.value.padEnd(3,".0"),o()})}},Le=()=>{const e=document.querySelector("[data-modal-rating-close]"),t=document.querySelector("[data-modal-rating]"),s=document.querySelector("[data-modal-rating-backdrop]"),n=document.querySelector("[data-modal-rating-container]"),i=document.querySelectorAll(".rating-container"),o=document.querySelector(".rating-form");let l={};const r=async a=>{a.preventDefault();const f=o.dataset.id;new FormData(a.currentTarget).forEach((y,ce)=>{l[ce]=y});const ne=l.rate,re=l.email,ae=l.review;new p().giveRating(f,ne,re,ae).then(y=>{y.status===200?(ge(),c()):me()}).catch(y=>w());const O=document.querySelector(".set-rating");let ie=O.querySelector(".rating-value"),oe=O.querySelector(".rating-active");ie.textContent="0.0",oe.style.width="0%",o.reset()};o.addEventListener("submit",r),V(i),e.addEventListener("click",c),window.addEventListener("keydown",d),t.addEventListener("click",a=>{a.target!==s&&a.target!==e||c()});function c(){s.classList.add("backdrop-rating-is-hidden"),n.classList.add("modal-rating-is-hidden");const a=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.remove("backdrop-is-hidden"),a.classList.remove("modal-is-hidden")}function d(a){a.key==="Escape"&&c()}},we=async e=>{const t=new p,s=document.querySelector(".exercise-modal"),n=document.querySelector(".exercise-modal-backdrop");try{const l=await t.getExerciseInfoById(e);s.innerHTML=de(l),document.querySelector(".send-rating-form").dataset.id=e,o();const r=document.querySelectorAll(".rating-container");V(r);const c=document.querySelector(".exercise-modal-close-btn");n.addEventListener("click",a=>{a.target!==c&&a.target!==n||i()}),c.addEventListener("click",i),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()}),document.querySelectorAll(".exercise-rating-give-btn").forEach(a=>a.addEventListener("click",()=>{const f=document.querySelector("[data-modal-rating-backdrop]"),D=document.querySelector("[data-modal-rating-container]");f.classList.remove("backdrop-rating-is-hidden"),D.classList.remove("modal-rating-is-hidden"),i()}))}catch{w()}function i(){n.classList.add("backdrop-is-hidden"),s.classList.add("modal-is-hidden")}function o(){n.classList.remove("backdrop-is-hidden"),s.classList.remove("modal-is-hidden")}},$=document.querySelector(".categories-list"),Se=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&$.classList.add("on-animate")})});Se.observe($);function U(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const I=document.querySelector(".exercises-search-wrap");let E,x,j=window.innerWidth<=1440?8:9,S=!1;function _(e){const t=new p;if(S=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;M(),E=Q(e.target.dataset.filter),x=e.target.dataset.name}try{return t.getExercisesByCategory(E,x,u,j).then(s=>{const n=J(s.results);B(s.totalPages,u),qe(K(x)),q(n),Ee(),U($)})}catch{w()}}function K(e){return e.charAt(0).toUpperCase()+e.slice(1)}function be(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),P()}function Ee(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",ke),e.addEventListener("input",Ce)}function Q(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function J(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${h}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${h}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${h}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${K(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Be(t.target)}</span></p>
      </div>
    </li>`).join("")}function q(e){g.classList.add("exercise-list"),g.innerHTML=e}function qe(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function ke(e){e.preventDefault(),M(),Z()}function Z(){S=!0;const e=I.firstElementChild.value;new p().getExercisesByKeyWord(E,x,e,u,j).then(s=>{if(s.results.length<=0)return xe(),q('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');B(s.totalPages,u);const n=J(s.results);q(n)})}function Ce(){const e=I.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",P)):G()}function G(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",P)}function P(){S=!1,I.reset(),G()}function Be(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",Me);function Me(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;we(t)}}async function $e(e){e.preventDefault();const t=new p,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return T("Please, enter the valid email :)");try{const i=await t.sendSubscription(s);ue(i.message)}catch{T("The subscription has already been sent to this email")}}const g=document.querySelector(".categories-list"),Ie=document.querySelector(".category-btns-list"),Y=document.querySelector(".exercises-title"),b=document.querySelector(".exercises-path-name"),Pe=document.querySelector(".navigation-list-form"),Re=document.querySelector(".footer-subscription"),De=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>he(s,"current-category-btn")),pe(t,"current-category-btn")}))},R=async e=>{const t=new p,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,u,s);B(n.totalPages,u),g.innerHTML=le(n),g.addEventListener("click",_),Pe.addEventListener("submit",fe),U(g)}catch{w()}},F=async e=>{const t=e.target.textContent.trim();M(),Oe(),await R(t),g.classList.contains("exercise-list")&&g.classList.remove("exercise-list")};function Oe(){b.textContent!==""&&(Y.textContent="Exercises",b.textContent="",b.classList.add("hidden"),be())}const Te=()=>{window.addEventListener("load",De),window.addEventListener("load",R),Ie.addEventListener("click",F),Y.addEventListener("click",F),Re.addEventListener("submit",$e)},Ae=document.querySelector(".quote-text"),Fe=document.querySelector(".quote-author"),We=new p,ze=async()=>{try{const e=await We.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},He=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ze(),W()};function W(){const e=JSON.parse(localStorage.getItem("quoteObj"));Ae.innerHTML=e.quote,Fe.innerHTML=e.author}const Ne=document.querySelector("[data-modal-open]"),Ve=document.querySelector("[data-modal-close]"),k=document.querySelector(".header__modal"),Ue=document.querySelector(".navigation__links--box");Ue.firstElementChild.classList.add("active-page");let je={37:1,38:1,39:1,40:1};function m(e){e.preventDefault()}function X(e){if(je[e.keyCode])return m(e),!1}let ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch{}let L=ee?{passive:!1}:!1,te="onwheel"in document.createElement("div")?"wheel":"mousewheel";function _e(){window.addEventListener("DOMMouseScroll",m,!1),window.addEventListener(te,m,L),window.addEventListener("touchmove",m,L),window.addEventListener("keydown",X,!1)}function Ke(){window.removeEventListener("DOMMouseScroll",m,!1),window.removeEventListener(te,m,L),window.removeEventListener("touchmove",m,L),window.removeEventListener("keydown",X,!1)}const z=()=>k.classList.contains("none")?Ke():_e(),H=()=>{Ne.addEventListener("click",()=>{k.classList.toggle("none"),z()}),Ve.addEventListener("click",()=>{k.classList.toggle("none"),z()})},Qe=()=>{if(H())return H()},C=document.querySelector(".up-btn");C.addEventListener("click",Je);window.onscroll=function(){se()};function se(){document.documentElement.scrollTop>2e3?C.style.display="block":C.style.display="none"}function Je(){document.documentElement.scrollTop=0}Qe();Te();He();Le();se();
//# sourceMappingURL=commonHelpers.js.map
