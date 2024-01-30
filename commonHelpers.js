import{i as v,E as p,c as me}from"./assets/quote-5164d01e.js";import{i as h}from"./assets/vendor-c4bdd18a.js";const pe=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:r})=>t+`<li
    class="category-item"
    data-filter="${n}"
    data-name="${s}"
    style="
      background: linear-gradient(
          0deg,
          rgba(16, 16, 16, 0.7) 0%,
          rgba(16, 16, 16, 0.7) 100%
        ),
        url(${r}),
        lightgray -30.771px 0px / 126.964% 107.759% no-repeat;
      background-size: cover;
    "
  >
  <div class="category-item-content">
    <h3 class="category-name">${s[0].toUpperCase()+s.slice(1)}</h3>
    <p class="category-filter">${n}</p>
    </div>
  </li>`,""),ve=({gifUrl:e,name:t,rating:s,target:n,bodyPart:r,equipment:a,popularity:g,burnedCalories:i,description:l,_id:o})=>`
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
        <p class="exercise-tags-value">${r}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Equipment</p>
        <p class="exercise-tags-value">${a}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Popular</p>
        <p class="exercise-tags-value">${g}</p>
      </li>
      <li class="exercise-tags-item">
        <p class="exercise-tags-key">Burned Calories</p>
        <p class="exercise-tags-value">${i}/3 min</p>
      </li>
    </ul>
    <p class="exercise-modal-description">
      ${l}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn">
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
`,R=()=>{h.error({message:"Ooops...Something happen. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=e=>{h.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},_=e=>{h.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=()=>{h.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ye=()=>{h.error({message:"Such email already exists",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},xe=(e,t="hidden")=>{e.classList.add(t)},we=(e,t="hidden")=>{e.classList.remove(t)};let c=1,z="test";document.querySelector(".navigation-list-form");const K=document.querySelector(".exercises-navigation-list");function Le(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function P(e,t){const s=Le(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");K.innerHTML=s,be()}function Ee(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,z=se(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?W(z):S?ie():ee()}function I(){c=1}function be(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function Se(){K.innerHTML=""}const T=document.querySelector(".exercise-modal"),x=document.querySelector(".exercise-modal-backdrop"),ke=document.querySelector("[data-modal-rating]"),F=document.querySelector("[data-modal-rating-backdrop]"),j=document.querySelector("[data-modal-rating-container]"),V=document.querySelector("[data-modal-rating-close]"),Z=()=>{x.classList.remove("backdrop-is-hidden"),T.classList.remove("modal-is-hidden"),window.addEventListener("keydown",b)},w=()=>{x.classList.add("backdrop-is-hidden"),T.classList.add("modal-is-hidden"),window.removeEventListener("keydown",b)},Ce=()=>{F.classList.remove("backdrop-rating-is-hidden"),j.classList.remove("modal-rating-is-hidden"),w(),window.removeEventListener("keydown",b),window.addEventListener("keydown",G)},L=()=>{F.classList.add("backdrop-rating-is-hidden"),j.classList.add("modal-rating-is-hidden"),Z(),window.removeEventListener("keydown",G),window.addEventListener("keydown",b)};function b(e){e.key==="Escape"&&w()}function G(e){e.key==="Escape"&&L()}const qe=()=>{V.addEventListener("click",L),ke.addEventListener("click",e=>{e.target!==F&&e.target!==V||L()})};async function Me(e){e.preventDefault();const t=new p,s=document.querySelector(".input-footer").value,n=document.querySelector(".footer-subscription");Y(s);try{const r=await t.sendSubscription(s);he(r.message),n.reset()}catch{_("The subscription has already been sent to this email")}}function Y(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return _("Please, enter the valid email :)")}const J=(e=[])=>{let t,s;e.forEach(i=>n(i));function n(i){r(i),a(),i.classList.contains("set-rating")&&g(i)}function r(i){t=i.querySelector(".rating-active"),s=i.querySelector(".rating-value")}function a(i=s.innerHTML){const l=i/.05;t.style.width=`${l}%`}function g(i){const l=i.querySelectorAll(".rating-item");for(const o of l)o.addEventListener("mouseenter",f=>{r(i),a(o.value)}),o.addEventListener("mouseleave",f=>{a()}),o.addEventListener("click",f=>{o.checked=!0,r(i),s.innerHTML=o.value.padEnd(3,".0"),a()})}},Be=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};qe();const n=async r=>{r.preventDefault();const a=t.dataset.id;new FormData(r.currentTarget).forEach((m,k)=>{s[k]=m});const i=s.rate,l=s.email,o=s.review,f=new p;Y(l);try{(await f.giveRating(a,i,l,o)).status===200&&(fe(),L())}catch{ye()}ue();function ue(){const m=document.querySelector(".set-rating");let k=m.querySelector(".rating-value"),ge=m.querySelector(".rating-active");k.textContent="0.0",ge.style.width="0%",t.reset()}};t.addEventListener("submit",n),J(e)},$e=async e=>{const t=new p;try{let r=function(){const a=document.querySelector(".exercise-modal-close-btn"),g=document.querySelectorAll(".exercise-rating-give-btn");x.addEventListener("click",i=>{i.target!==a&&i.target!==x||w()}),a.addEventListener("click",w),g.forEach(i=>i.addEventListener("click",Ce))};const s=await t.getExerciseInfoById(e);T.innerHTML=ve(s);const n=document.querySelectorAll(".rating-container");document.querySelector(".send-rating-form").dataset.id=e,Z(),J(n),r()}catch{R()}},O=document.querySelector(".categories-list"),Re=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&O.classList.add("on-animate")})});Re.observe(O);function Q(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const A=document.querySelector(".exercises-search-wrap");let q,y,X=window.innerWidth<=1440?8:9,S=!1;function ee(e){const t=new p;if(S=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;I(),q=se(e.target.dataset.filter),y=e.target.dataset.name}try{return t.getExercisesByCategory(q,y,c,X).then(s=>{const n=ne(s.results);P(s.totalPages,c),Te(te(y)),M(n),Ie(),Q(O)})}catch{R()}}function te(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Pe(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),D()}function Ie(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Fe),e.addEventListener("input",Oe)}function se(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function ne(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${te(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Ae(t.target)}</span></p>
      </div>
    </li>`).join("")}function M(e){d.classList.add("exercise-list"),d.innerHTML=e}function Te(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Fe(e){e.preventDefault(),I(),ie()}function ie(){S=!0;const e=A.firstElementChild.value;new p().getExercisesByKeyWord(q,y,e,c,X).then(s=>{if(s.results.length<=0)return Se(),M('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');P(s.totalPages,c);const n=ne(s.results);M(n)})}function Oe(){const e=A.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",D)):re()}function re(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",D)}function D(){S=!1,A.reset(),re()}function Ae(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",De);function De(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;$e(t)}}const d=document.querySelector(".categories-list"),We=document.querySelector(".category-btns-list"),ae=document.querySelector(".exercises-title"),C=document.querySelector(".exercises-path-name"),ze=document.querySelector(".navigation-list-form"),Ve=document.querySelector(".footer-subscription"),He=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>we(s,"current-category-btn")),xe(t,"current-category-btn")}))},W=async e=>{const t=new p,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);P(n.totalPages,c),d.innerHTML=pe(n),d.addEventListener("click",ee),ze.addEventListener("submit",Ee),Q(d)}catch{R()}},H=async e=>{const t=e.target.textContent.trim();I(),Ue(),await W(t),d.classList.contains("exercise-list")&&d.classList.remove("exercise-list")};function Ue(){C.textContent!==""&&(ae.textContent="Exercises",C.textContent="",C.classList.add("hidden"),Pe())}const Ne=()=>{window.addEventListener("load",He),window.addEventListener("load",W),We.addEventListener("click",H),ae.addEventListener("click",H),Ve.addEventListener("submit",Me)},_e=document.querySelector("[data-modal-open]"),Ke=document.querySelector("[data-modal-close]"),B=document.querySelector(".header__modal"),je=document.querySelector(".navigation__links--box");je.firstElementChild.classList.add("active-page");let Ze={37:1,38:1,39:1,40:1};function u(e){e.preventDefault()}function oe(e){if(Ze[e.keyCode])return u(e),!1}let ce=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ce=!0}}))}catch{}let E=ce?{passive:!1}:!1,le="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ge(){window.addEventListener("DOMMouseScroll",u,!1),window.addEventListener(le,u,E),window.addEventListener("touchmove",u,E),window.addEventListener("keydown",oe,!1)}function Ye(){window.removeEventListener("DOMMouseScroll",u,!1),window.removeEventListener(le,u,E),window.removeEventListener("touchmove",u,E),window.removeEventListener("keydown",oe,!1)}const U=()=>B.classList.contains("none")?Ye():Ge(),N=()=>{_e.addEventListener("click",()=>{B.classList.toggle("none"),U()}),Ke.addEventListener("click",()=>{B.classList.toggle("none"),U()})},Je=()=>{if(N())return N()},$=document.querySelector(".up-btn");$.addEventListener("click",Qe);window.onscroll=function(){de()};function de(){document.documentElement.scrollTop>2e3?$.style.display="block":$.style.display="none"}function Qe(){document.documentElement.scrollTop=0}Je();Ne();me();Be();de();
//# sourceMappingURL=commonHelpers.js.map
