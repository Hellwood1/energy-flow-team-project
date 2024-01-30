import{i as v,E as f,a as oe,c as ce,m as le,o as de,b as O,d as F,e as ue,f as ge}from"./assets/quote-53c236f5.js";import{i as h}from"./assets/vendor-c4bdd18a.js";const me=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
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
  </li>`,""),pe=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:o,popularity:m,burnedCalories:r,description:l,_id:i})=>`
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
        <p class="exercise-tags-value">${n}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Body Part</p>
        <p class="exercise-tags-value">${a}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${o}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${m}</p>
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
      <button type="button" class="exercise-favorite-add-btn" id="${i}">
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
`,M=()=>{h.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},E=e=>{h.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},N=e=>{h.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=()=>{h.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=()=>{h.error({message:"Such email already exists",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=(e,t="hidden")=>{e.classList.add(t)},ye=(e,t="hidden")=>{e.classList.remove(t)};let c=1,A="test";document.querySelector(".navigation-list-form");const V=document.querySelector(".exercises-navigation-list");function xe(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function I(e,t,s){const n=xe(e,t).map(a=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${a}">${a}</button>
      </li>`).join("");V.innerHTML=n,Le(s)}function we(e){e.preventDefault();const t=document.querySelector(".exercises-path-name");parseInt(e.submitter.textContent)&&(c=e.submitter.textContent,A=Z(document.querySelector(".current-category-btn").textContent).trim(),t.classList.contains("hidden")?T(A):w?Q():J())}function $(){c=1}function Le(e){const t=document.querySelectorAll(".exercises-navigation-item");if(e<=1)t[0].firstElementChild.classList.add("pagination-current");else for(let s=0;s<t.length;s++)t[s].firstElementChild.classList.contains("pagination-current")?t[s].firstElementChild.classList.remove("pagination-current"):t[s].firstElementChild.textContent===e&&t[s].firstElementChild.classList.add("pagination-current")}function be(){V.innerHTML=""}async function Ee(e){e.preventDefault();const t=new f,s=document.querySelector(".input-footer").value,n=document.querySelector(".footer-subscription");U(s);try{const a=await t.sendSubscription(s);E(a.message),n.reset()}catch{N("The subscription has already been sent to this email")}}function U(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return N("Please, enter the valid email :)")}const K=(e=[])=>{let t,s;e.forEach(r=>n(r));function n(r){a(r),o(),r.classList.contains("set-rating")&&m(r)}function a(r){t=r.querySelector(".rating-active"),s=r.querySelector(".rating-value")}function o(r=s.innerHTML){const l=r/.05;t.style.width=`${l}%`}function m(r){const l=r.querySelectorAll(".rating-item");for(const i of l)i.addEventListener("mouseenter",d=>{a(r),o(i.value)}),i.addEventListener("mouseleave",d=>{o()}),i.addEventListener("click",d=>{i.checked=!0,a(r),s.innerHTML=i.value.padEnd(3,".0"),o()})}},Se=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};oe();const n=async a=>{a.preventDefault();const o=t.dataset.id;new FormData(a.currentTarget).forEach((p,L)=>{s[L]=p});const r=s.rate,l=s.email,i=s.review,d=new f;U(l);try{(await d.giveRating(o,r,l,i)).status===200&&(fe(),ce())}catch{ve()}re();function re(){const p=document.querySelector(".set-rating");let L=p.querySelector(".rating-value"),ae=p.querySelector(".rating-active");L.textContent="0.0",ae.style.width="0%",t.reset()}};t.addEventListener("submit",n),K(e)},D="favoriteExerciseIds",Ce=async e=>{const t=new f;try{let a=function(){const o=document.querySelector(".exercise-modal-close-btn"),m=document.querySelectorAll(".exercise-rating-give-btn");O.addEventListener("click",i=>{i.target!==o&&i.target!==O||F()});const r=document.querySelector(".exercise-favorite-add-btn");r.addEventListener("click",()=>{const i=r.id,d=l();d.includes(i)?E("This exercise is already in favorites"):(d.push(i),localStorage.setItem(D,JSON.stringify(d)),E("This exercise is add in favorites"))});function l(){const i=localStorage.getItem(D);return i?JSON.parse(i):[]}o.addEventListener("click",F),m.forEach(i=>i.addEventListener("click",ue))};const s=await t.getExerciseInfoById(e);le.innerHTML=pe(s);const n=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,de(),K(n),a()}catch{M()}};function j(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const B=document.querySelector(".exercises-search-wrap");let S,y,G=window.innerWidth<=1440?8:9,w=!1;function J(e){const t=new f;if(w=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;$(),S=Z(e.target.dataset.filter),y=e.target.dataset.name}try{return t.getExercisesByCategory(S,y,c,G).then(s=>{const n=_(s.results);I(s.totalPages,c,c),Me(Y(y)),C(n),ke(),j(R)})}catch{M()}}function Y(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),P()}function ke(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Ie),e.addEventListener("input",$e)}function Z(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function _(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${Y(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Be(t.target)}</span></p>
      </div>
    </li>`).join("")}function C(e){u.classList.add("exercise-list"),u.innerHTML=e}function Me(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Ie(e){e.preventDefault(),$(),Q()}function Q(){w=!0;const e=B.firstElementChild.value;new f().getExercisesByKeyWord(S,y,e,c,G).then(s=>{if(s.results.length<=0)return be(),C('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');I(s.totalPages,c,c);const n=_(s.results);C(n)})}function $e(){const e=B.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",P)):X()}function X(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",P)}function P(){w=!1,B.reset(),X()}function Be(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list")&&document.querySelector(".categories-list").addEventListener("click",Pe);function Pe(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Ce(t)}}const u=document.querySelector(".categories-list"),Re=document.querySelector(".category-btns-list"),ee=document.querySelector(".exercises-title"),b=document.querySelector(".exercises-path-name"),Te=document.querySelector(".navigation-list-form"),Oe=document.querySelector(".footer-subscription"),R=document.querySelector(".categories-list"),Fe=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>ye(s,"current-category-btn")),he(t,"current-category-btn")}))},Ae=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&R.classList.add("on-animate")})}),T=async e=>{const t=new f,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);I(n.totalPages,c,c),u.innerHTML=me(n),u.addEventListener("click",J),Te.addEventListener("submit",we),j(u),Ae.observe(R)}catch{M()}},W=async e=>{const t=e.target.textContent.trim();$(),De(),await T(t),u.classList.contains("exercise-list")&&u.classList.remove("exercise-list")};function De(){b.textContent!==""&&(ee.textContent="Exercises",b.textContent="",b.classList.add("hidden"),qe())}const We=()=>{window.addEventListener("load",Fe),window.addEventListener("load",T),Re.addEventListener("click",W),ee.addEventListener("click",W),Oe.addEventListener("submit",Ee)},ze=document.querySelector("[data-modal-open]"),He=document.querySelector("[data-modal-close]"),q=document.querySelector(".mobile-menu-wrapper"),Ne=document.querySelector(".home-page");Ne.classList.add("active-page");let Ve={37:1,38:1,39:1,40:1};function g(e){e.preventDefault()}function te(e){if(Ve[e.keyCode])return g(e),!1}let se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){se=!0}}))}catch{}let x=se?{passive:!1}:!1,ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ue(){window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener(ne,g,x),window.addEventListener("touchmove",g,x),window.addEventListener("keydown",te,!1)}function Ke(){window.removeEventListener("DOMMouseScroll",g,!1),window.removeEventListener(ne,g,x),window.removeEventListener("touchmove",g,x),window.removeEventListener("keydown",te,!1)}const z=()=>q.classList.contains("none")?Ke():Ue(),H=()=>{ze.addEventListener("click",()=>{q.classList.toggle("none"),z()}),He.addEventListener("click",()=>{q.classList.toggle("none"),z()})},je=()=>{if(H())return H()},k=document.querySelector(".up-btn");k.addEventListener("click",Ge);window.onscroll=function(){ie()};function ie(){document.documentElement.scrollTop>2e3?k.style.display="block":k.style.display="none"}function Ge(){document.documentElement.scrollTop=0}je();We();ge();Se();ie();
//# sourceMappingURL=commonHelpers.js.map
