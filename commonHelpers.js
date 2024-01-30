import{i as p,E as m,c as pe}from"./assets/quote-5164d01e.js";import{i as v}from"./assets/vendor-c4bdd18a.js";const ve=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:r})=>t+`<li
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
  </li>`,""),he=({gifUrl:e,name:t,rating:s,target:n,bodyPart:r,equipment:a,popularity:l,burnedCalories:i,description:d,_id:o})=>`
  <button type="button" class="exercise-modal-close-btn">
    <svg class="exercise-modal-close-icon" width="24" height="24">
      <use href="${p}#icon-close-modal"></use>
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
        <p class="exercise-tags-value">${l}</p>
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
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="${p}#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${o}">
        Give a rating
      </button>
    </div>
  </div>
`,b=()=>{v.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=e=>{v.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},q=e=>{v.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ye=()=>{v.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},we=e=>{v.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},xe=(e,t="hidden")=>{e.classList.add(t)},Le=(e,t="hidden")=>{e.classList.remove(t)};let c=1,H="test";document.querySelector(".navigation-list-form");const K=document.querySelector(".exercises-navigation-list");function Ee(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function R(e,t){const s=Ee(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");K.innerHTML=s,Se()}function be(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,H=te(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?W(H):k?ne():X()}function I(){c=1}function Se(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function ke(){K.innerHTML=""}const T=document.querySelector(".exercise-modal"),w=document.querySelector(".exercise-modal-backdrop"),Ce=document.querySelector("[data-modal-rating]"),O=document.querySelector("[data-modal-rating-backdrop]"),j=document.querySelector("[data-modal-rating-container]"),V=document.querySelector("[data-modal-rating-close]"),Z=()=>{w.classList.remove("backdrop-is-hidden"),T.classList.remove("modal-is-hidden"),window.addEventListener("keydown",S)},x=()=>{w.classList.add("backdrop-is-hidden"),T.classList.add("modal-is-hidden"),window.removeEventListener("keydown",S)},qe=()=>{O.classList.remove("backdrop-rating-is-hidden"),j.classList.remove("modal-rating-is-hidden"),x(),window.removeEventListener("keydown",S),window.addEventListener("keydown",G)},L=()=>{O.classList.add("backdrop-rating-is-hidden"),j.classList.add("modal-rating-is-hidden"),Z(),window.removeEventListener("keydown",G),window.addEventListener("keydown",S)};function S(e){e.key==="Escape"&&x()}function G(e){e.key==="Escape"&&L()}const Me=()=>{V.addEventListener("click",L),Ce.addEventListener("click",e=>{e.target!==O&&e.target!==V||L()})},Y=(e=[])=>{let t,s;e.forEach(i=>n(i));function n(i){r(i),a(),i.classList.contains("set-rating")&&l(i)}function r(i){t=i.querySelector(".rating-active"),s=i.querySelector(".rating-value")}function a(i=s.innerHTML){const d=i/.05;t.style.width=`${d}%`}function l(i){const d=i.querySelectorAll(".rating-item");for(const o of d)o.addEventListener("mouseenter",h=>{r(i),a(o.value)}),o.addEventListener("mouseleave",h=>{a()}),o.addEventListener("click",h=>{o.checked=!0,r(i),s.innerHTML=o.value.padEnd(3,".0"),a()})}},Be=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Me();const n=async r=>{r.preventDefault();const a=t.dataset.id;new FormData(r.currentTarget).forEach((f,me)=>{s[me]=f});const i=s.rate,d=s.email,o=s.review,h=new m;let de=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(d.match(de)===null)return q("Please, enter the valid email :)");h.giveRating(a,i,d,o).then(f=>{f.status===200?(ye(),L()):we()}).catch(f=>b());const z=document.querySelector(".set-rating");let ue=z.querySelector(".rating-value"),ge=z.querySelector(".rating-active");ue.textContent="0.0",ge.style.width="0%",t.reset()};t.addEventListener("submit",n),Y(e)},$e=async e=>{const t=new m;try{const s=await t.getExerciseInfoById(e);T.innerHTML=he(s),document.querySelector(".send-rating-form").dataset.id=e,Z();const n=document.querySelectorAll(".rating-container");Y(n);const r=document.querySelector(".exercise-modal-close-btn");w.addEventListener("click",l=>{l.target!==r&&l.target!==w||x()}),r.addEventListener("click",x),document.querySelectorAll(".exercise-rating-give-btn").forEach(l=>l.addEventListener("click",qe))}catch{b()}},A=document.querySelector(".categories-list"),Pe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&A.classList.add("on-animate")})});Pe.observe(A);function J(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const F=document.querySelector(".exercises-search-wrap");let M,y,Q=window.innerWidth<=1440?8:9,k=!1;function X(e){const t=new m;if(k=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;I(),M=te(e.target.dataset.filter),y=e.target.dataset.name}try{return t.getExercisesByCategory(M,y,c,Q).then(s=>{const n=se(s.results);R(s.totalPages,c),Te(ee(y)),B(n),Ie(),J(A)})}catch{b()}}function ee(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Re(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),D()}function Ie(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Oe),e.addEventListener("input",Ae)}function te(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function se(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">

            <use href="${p}#icon-star"></use></svg>

          </span></div>
        </div>
        <button type="button" class="card-start">Start <span>
          <svg class="start-icon" width="14" height="14">

          <use href="${p}#icon-right-arrow"></use></svg>

        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">

          <use href="${p}#icon-runing-man"></use></svg>


        </div>
        <p class="card-exercise-name">${ee(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Fe(t.target)}</span></p>
      </div>
    </li>`).join("")}function B(e){u.classList.add("exercise-list"),u.innerHTML=e}function Te(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Oe(e){e.preventDefault(),I(),ne()}function ne(){k=!0;const e=F.firstElementChild.value;new m().getExercisesByKeyWord(M,y,e,c,Q).then(s=>{if(s.results.length<=0)return ke(),B('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');R(s.totalPages,c);const n=se(s.results);B(n)})}function Ae(){const e=F.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",D)):ie()}function ie(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",D)}function D(){k=!1,F.reset(),ie()}function Fe(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",De);function De(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;$e(t)}}async function We(e){e.preventDefault();const t=new m,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return q("Please, enter the valid email :)");try{const r=await t.sendSubscription(s);fe(r.message)}catch{q("The subscription has already been sent to this email")}}const u=document.querySelector(".categories-list"),ze=document.querySelector(".category-btns-list"),re=document.querySelector(".exercises-title"),C=document.querySelector(".exercises-path-name"),He=document.querySelector(".navigation-list-form"),Ve=document.querySelector(".footer-subscription"),Ue=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>Le(s,"current-category-btn")),xe(t,"current-category-btn")}))},W=async e=>{const t=new m,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);R(n.totalPages,c),u.innerHTML=ve(n),u.addEventListener("click",X),He.addEventListener("submit",be),J(u)}catch{b()}},U=async e=>{const t=e.target.textContent.trim();I(),Ne(),await W(t),u.classList.contains("exercise-list")&&u.classList.remove("exercise-list")};function Ne(){C.textContent!==""&&(re.textContent="Exercises",C.textContent="",C.classList.add("hidden"),Re())}const _e=()=>{window.addEventListener("load",Ue),window.addEventListener("load",W),ze.addEventListener("click",U),re.addEventListener("click",U),Ve.addEventListener("submit",We)},Ke=document.querySelector("[data-modal-open]"),je=document.querySelector("[data-modal-close]"),$=document.querySelector(".header__modal"),Ze=document.querySelector(".navigation__links--box");Ze.firstElementChild.classList.add("active-page");let Ge={37:1,38:1,39:1,40:1};function g(e){e.preventDefault()}function ae(e){if(Ge[e.keyCode])return g(e),!1}let oe=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){oe=!0}}))}catch{}let E=oe?{passive:!1}:!1,ce="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ye(){window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener(ce,g,E),window.addEventListener("touchmove",g,E),window.addEventListener("keydown",ae,!1)}function Je(){window.removeEventListener("DOMMouseScroll",g,!1),window.removeEventListener(ce,g,E),window.removeEventListener("touchmove",g,E),window.removeEventListener("keydown",ae,!1)}const N=()=>$.classList.contains("none")?Je():Ye(),_=()=>{Ke.addEventListener("click",()=>{$.classList.toggle("none"),N()}),je.addEventListener("click",()=>{$.classList.toggle("none"),N()})},Qe=()=>{if(_())return _()},P=document.querySelector(".up-btn");P.addEventListener("click",Xe);window.onscroll=function(){le()};function le(){document.documentElement.scrollTop>2e3?P.style.display="block":P.style.display="none"}function Xe(){document.documentElement.scrollTop=0}Qe();_e();pe();Be();le();
//# sourceMappingURL=commonHelpers.js.map
