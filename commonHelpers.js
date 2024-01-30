import{i as v,E as h,a as oe,c as ce,m as le,o as de,b as O,d as F,e as ue,f as ge}from"./assets/quote-ba0fec5d.js";import{i as f}from"./assets/vendor-c4bdd18a.js";const me=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
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
  </li>`,""),pe=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:o,popularity:m,burnedCalories:r,description:c,_id:i})=>`
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
      ${c}
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
`,M=()=>{f.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},b=e=>{f.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},H=e=>{f.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=()=>{f.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=()=>{f.error({message:"Such email already exists",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=(e,t="hidden")=>{e.classList.add(t)},ye=(e,t="hidden")=>{e.classList.remove(t)};let l=1,A="test";document.querySelector(".navigation-list-form");const N=document.querySelector(".exercises-navigation-list");function xe(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function I(e,t){const s=xe(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");N.innerHTML=s,Le()}function we(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;l=e.submitter.textContent,A=Y(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?R(A):w?Q():G()}function $(){l=1}function Le(){const e=document.querySelectorAll(".exercises-navigation-item");if(l<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===l&&e[t].firstElementChild.classList.add("pagination-current")}function Ee(){N.innerHTML=""}async function be(e){e.preventDefault();const t=new h,s=document.querySelector(".input-footer").value,n=document.querySelector(".footer-subscription");U(s);try{const a=await t.sendSubscription(s);b(a.message),n.reset()}catch{H("The subscription has already been sent to this email")}}function U(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return H("Please, enter the valid email :)")}const _=(e=[])=>{let t,s;e.forEach(r=>n(r));function n(r){a(r),o(),r.classList.contains("set-rating")&&m(r)}function a(r){t=r.querySelector(".rating-active"),s=r.querySelector(".rating-value")}function o(r=s.innerHTML){const c=r/.05;t.style.width=`${c}%`}function m(r){const c=r.querySelectorAll(".rating-item");for(const i of c)i.addEventListener("mouseenter",d=>{a(r),o(i.value)}),i.addEventListener("mouseleave",d=>{o()}),i.addEventListener("click",d=>{i.checked=!0,a(r),s.innerHTML=i.value.padEnd(3,".0"),o()})}},Se=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};oe();const n=async a=>{a.preventDefault();const o=t.dataset.id;new FormData(a.currentTarget).forEach((p,L)=>{s[L]=p});const r=s.rate,c=s.email,i=s.review,d=new h;U(c);try{(await d.giveRating(o,r,c,i)).status===200&&(he(),ce())}catch{ve()}re();function re(){const p=document.querySelector(".set-rating");let L=p.querySelector(".rating-value"),ae=p.querySelector(".rating-active");L.textContent="0.0",ae.style.width="0%",t.reset()}};t.addEventListener("submit",n),_(e)},D="favoriteExerciseIds",Ce=async e=>{const t=new h;try{let a=function(){const o=document.querySelector(".exercise-modal-close-btn"),m=document.querySelectorAll(".exercise-rating-give-btn");O.addEventListener("click",i=>{i.target!==o&&i.target!==O||F()});const r=document.querySelector(".exercise-favorite-add-btn");r.addEventListener("click",()=>{const i=r.id,d=c();d.includes(i)?b("This exercise is already in favorites"):(d.push(i),localStorage.setItem(D,JSON.stringify(d)),b("This exercise is add in favorites"))});function c(){const i=localStorage.getItem(D);return i?JSON.parse(i):[]}o.addEventListener("click",F),m.forEach(i=>i.addEventListener("click",ue))};const s=await t.getExerciseInfoById(e);le.innerHTML=pe(s);const n=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,de(),_(n),a()}catch{M()}},B=document.querySelector(".categories-list"),qe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&B.classList.add("on-animate")})});qe.observe(B);function K(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const P=document.querySelector(".exercises-search-wrap");let S,y,j=window.innerWidth<=1440?8:9,w=!1;function G(e){const t=new h;if(w=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;$(),S=Y(e.target.dataset.filter),y=e.target.dataset.name}try{return t.getExercisesByCategory(S,y,l,j).then(s=>{const n=Z(s.results);I(s.totalPages,l),Ie(J(y)),C(n),Me(),K(B)})}catch{M()}}function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ke(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),T()}function Me(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",$e),e.addEventListener("input",Be)}function Y(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function Z(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${J(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Pe(t.target)}</span></p>
      </div>
    </li>`).join("")}function C(e){u.classList.add("exercise-list"),u.innerHTML=e}function Ie(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function $e(e){e.preventDefault(),$(),Q()}function Q(){w=!0;const e=P.firstElementChild.value;new h().getExercisesByKeyWord(S,y,e,l,j).then(s=>{if(s.results.length<=0)return Ee(),C('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');I(s.totalPages,l);const n=Z(s.results);C(n)})}function Be(){const e=P.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",T)):X()}function X(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",T)}function T(){w=!1,P.reset(),X()}function Pe(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",Te);function Te(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;Ce(t)}}const u=document.querySelector(".categories-list"),Re=document.querySelector(".category-btns-list"),ee=document.querySelector(".exercises-title"),E=document.querySelector(".exercises-path-name"),Oe=document.querySelector(".navigation-list-form"),Fe=document.querySelector(".footer-subscription"),Ae=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>ye(s,"current-category-btn")),fe(t,"current-category-btn")}))},R=async e=>{const t=new h,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,l,s);I(n.totalPages,l),u.innerHTML=me(n),u.addEventListener("click",G),Oe.addEventListener("submit",we),K(u)}catch{M()}},W=async e=>{const t=e.target.textContent.trim();$(),De(),await R(t),u.classList.contains("exercise-list")&&u.classList.remove("exercise-list")};function De(){E.textContent!==""&&(ee.textContent="Exercises",E.textContent="",E.classList.add("hidden"),ke())}const We=()=>{window.addEventListener("load",Ae),window.addEventListener("load",R),Re.addEventListener("click",W),ee.addEventListener("click",W),Fe.addEventListener("submit",be)},ze=document.querySelector("[data-modal-open]"),Ve=document.querySelector("[data-modal-close]"),q=document.querySelector(".header__modal"),He=document.querySelector(".navigation__links--box");He.firstElementChild.classList.add("active-page");let Ne={37:1,38:1,39:1,40:1};function g(e){e.preventDefault()}function te(e){if(Ne[e.keyCode])return g(e),!1}let se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){se=!0}}))}catch{}let x=se?{passive:!1}:!1,ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ue(){window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener(ne,g,x),window.addEventListener("touchmove",g,x),window.addEventListener("keydown",te,!1)}function _e(){window.removeEventListener("DOMMouseScroll",g,!1),window.removeEventListener(ne,g,x),window.removeEventListener("touchmove",g,x),window.removeEventListener("keydown",te,!1)}const z=()=>q.classList.contains("none")?_e():Ue(),V=()=>{ze.addEventListener("click",()=>{q.classList.toggle("none"),z()}),Ve.addEventListener("click",()=>{q.classList.toggle("none"),z()})},Ke=()=>{if(V())return V()},k=document.querySelector(".up-btn");k.addEventListener("click",je);window.onscroll=function(){ie()};function ie(){document.documentElement.scrollTop>2e3?k.style.display="block":k.style.display="none"}function je(){document.documentElement.scrollTop=0}Ke();We();ge();Se();ie();
//# sourceMappingURL=commonHelpers.js.map
