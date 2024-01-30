import{i as p,E as m}from"./assets/api-service-af5b7599.js";import{i as h}from"./assets/vendor-c4bdd18a.js";const he=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:i})=>t+`<li
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
  </li>`,""),ve=({gifUrl:e,name:t,rating:s,target:n,bodyPart:i,equipment:a,popularity:l,burnedCalories:r,description:d,_id:o})=>`
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
        <p class="exercise-tags-value">${i}</p>
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
        <p class="exercise-tags-value">${r}/3 min</p>
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
`,E=()=>{h.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=e=>{h.success({message:e,messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},C=e=>{h.error({message:e,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ye=()=>{h.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},we=e=>{h.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},xe=(e,t="hidden")=>{e.classList.add(t)},Le=(e,t="hidden")=>{e.classList.remove(t)};let c=1,H="test";document.querySelector(".navigation-list-form");const K=document.querySelector(".exercises-navigation-list");function Se(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function P(e,t){const s=Se(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");K.innerHTML=s,be()}function Ee(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,H=se(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?W(H):q?re():ee()}function R(){c=1}function be(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function qe(){K.innerHTML=""}const T=document.querySelector(".exercise-modal"),w=document.querySelector(".exercise-modal-backdrop"),ke=document.querySelector("[data-modal-rating]"),D=document.querySelector("[data-modal-rating-backdrop]"),Q=document.querySelector("[data-modal-rating-container]"),N=document.querySelector("[data-modal-rating-close]"),Z=()=>{w.classList.remove("backdrop-is-hidden"),T.classList.remove("modal-is-hidden"),window.addEventListener("keydown",b)},x=()=>{w.classList.add("backdrop-is-hidden"),T.classList.add("modal-is-hidden"),window.removeEventListener("keydown",b)},Ce=()=>{D.classList.remove("backdrop-rating-is-hidden"),Q.classList.remove("modal-rating-is-hidden"),x(),window.removeEventListener("keydown",b),window.addEventListener("keydown",J)},L=()=>{D.classList.add("backdrop-rating-is-hidden"),Q.classList.add("modal-rating-is-hidden"),Z(),window.removeEventListener("keydown",J),window.addEventListener("keydown",b)};function b(e){e.key==="Escape"&&x()}function J(e){e.key==="Escape"&&L()}const Me=()=>{N.addEventListener("click",L),ke.addEventListener("click",e=>{e.target!==D&&e.target!==N||L()})},G=(e=[])=>{let t,s;e.forEach(r=>n(r));function n(r){i(r),a(),r.classList.contains("set-rating")&&l(r)}function i(r){t=r.querySelector(".rating-active"),s=r.querySelector(".rating-value")}function a(r=s.innerHTML){const d=r/.05;t.style.width=`${d}%`}function l(r){const d=r.querySelectorAll(".rating-item");for(const o of d)o.addEventListener("mouseenter",v=>{i(r),a(o.value)}),o.addEventListener("mouseleave",v=>{a()}),o.addEventListener("click",v=>{o.checked=!0,i(r),s.innerHTML=o.value.padEnd(3,".0"),a()})}},Be=()=>{const e=document.querySelectorAll(".rating-container"),t=document.querySelector(".rating-form");let s={};Me();const n=async i=>{i.preventDefault();const a=t.dataset.id;new FormData(i.currentTarget).forEach((f,pe)=>{s[pe]=f});const r=s.rate,d=s.email,o=s.review,v=new m;let ue=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(d.match(ue)===null)return C("Please, enter the valid email :)");v.giveRating(a,r,d,o).then(f=>{f.status===200?(ye(),L()):we()}).catch(f=>E());const z=document.querySelector(".set-rating");let ge=z.querySelector(".rating-value"),me=z.querySelector(".rating-active");ge.textContent="0.0",me.style.width="0%",t.reset()};t.addEventListener("submit",n),G(e)},$e=async e=>{const t=new m;try{const s=await t.getExerciseInfoById(e);T.innerHTML=ve(s),document.querySelector(".send-rating-form").dataset.id=e,Z();const n=document.querySelectorAll(".rating-container");G(n);const i=document.querySelector(".exercise-modal-close-btn");w.addEventListener("click",l=>{l.target!==i&&l.target!==w||x()}),i.addEventListener("click",x),document.querySelectorAll(".exercise-rating-give-btn").forEach(l=>l.addEventListener("click",Ce))}catch{E()}},O=document.querySelector(".categories-list"),Ie=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&O.classList.add("on-animate")})});Ie.observe(O);function Y(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const A=document.querySelector(".exercises-search-wrap");let M,y,X=window.innerWidth<=1440?8:9,q=!1;function ee(e){const t=new m;if(q=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;R(),M=se(e.target.dataset.filter),y=e.target.dataset.name}try{return t.getExercisesByCategory(M,y,c,X).then(s=>{const n=ne(s.results);P(s.totalPages,c),Te(te(y)),B(n),Re(),Y(O)})}catch{E()}}function te(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Pe(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),F()}function Re(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",De),e.addEventListener("input",Oe)}function se(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function ne(e){return e.map(t=>`<li class="exercises-card" id="${t._id}">
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
        <p class="card-exercise-name">${te(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Ae(t.target)}</span></p>
      </div>
    </li>`).join("")}function B(e){u.classList.add("exercise-list"),u.innerHTML=e}function Te(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function De(e){e.preventDefault(),R(),re()}function re(){q=!0;const e=A.firstElementChild.value;new m().getExercisesByKeyWord(M,y,e,c,X).then(s=>{if(s.results.length<=0)return qe(),B('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');P(s.totalPages,c);const n=ne(s.results);B(n)})}function Oe(){const e=A.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",F)):ie()}function ie(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",F)}function F(){q=!1,A.reset(),ie()}function Ae(e){return e.length>=9?e.slice(0,9)+"...":e}document.querySelector(".categories-list").addEventListener("click",Fe);function Fe(e){if(!document.querySelector(".exercises-path-name").classList.contains("hidden")){const t=e.target.id;$e(t)}}async function We(e){e.preventDefault();const t=new m,s=document.querySelector(".input-footer").value;let n=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(s.match(n)===null)return C("Please, enter the valid email :)");try{const i=await t.sendSubscription(s);fe(i.message)}catch{C("The subscription has already been sent to this email")}}const u=document.querySelector(".categories-list"),ze=document.querySelector(".category-btns-list"),ae=document.querySelector(".exercises-title"),k=document.querySelector(".exercises-path-name"),He=document.querySelector(".navigation-list-form"),Ne=document.querySelector(".footer-subscription"),Ve=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>Le(s,"current-category-btn")),xe(t,"current-category-btn")}))},W=async e=>{const t=new m,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);P(n.totalPages,c),u.innerHTML=he(n),u.addEventListener("click",ee),He.addEventListener("submit",Ee),Y(u)}catch{E()}},V=async e=>{const t=e.target.textContent.trim();R(),Ue(),await W(t),u.classList.contains("exercise-list")&&u.classList.remove("exercise-list")};function Ue(){k.textContent!==""&&(ae.textContent="Exercises",k.textContent="",k.classList.add("hidden"),Pe())}const je=()=>{window.addEventListener("load",Ve),window.addEventListener("load",W),ze.addEventListener("click",V),ae.addEventListener("click",V),Ne.addEventListener("submit",We)},_e=document.querySelector(".quote-text"),Ke=document.querySelector(".quote-author"),Qe=new m,Ze=async()=>{try{const e=await Qe.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},Je=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await Ze(),U()};function U(){const e=JSON.parse(localStorage.getItem("quoteObj"));_e.innerHTML=e.quote,Ke.innerHTML=e.author}const Ge=document.querySelector("[data-modal-open]"),Ye=document.querySelector("[data-modal-close]"),$=document.querySelector(".header__modal"),Xe=document.querySelector(".navigation__links--box");Xe.firstElementChild.classList.add("active-page");let et={37:1,38:1,39:1,40:1};function g(e){e.preventDefault()}function oe(e){if(et[e.keyCode])return g(e),!1}let ce=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ce=!0}}))}catch{}let S=ce?{passive:!1}:!1,le="onwheel"in document.createElement("div")?"wheel":"mousewheel";function tt(){window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener(le,g,S),window.addEventListener("touchmove",g,S),window.addEventListener("keydown",oe,!1)}function st(){window.removeEventListener("DOMMouseScroll",g,!1),window.removeEventListener(le,g,S),window.removeEventListener("touchmove",g,S),window.removeEventListener("keydown",oe,!1)}const j=()=>$.classList.contains("none")?st():tt(),_=()=>{Ge.addEventListener("click",()=>{$.classList.toggle("none"),j()}),Ye.addEventListener("click",()=>{$.classList.toggle("none"),j()})},nt=()=>{if(_())return _()},I=document.querySelector(".up-btn");I.addEventListener("click",rt);window.onscroll=function(){de()};function de(){document.documentElement.scrollTop>2e3?I.style.display="block":I.style.display="none"}function rt(){document.documentElement.scrollTop=0}nt();je();Je();Be();de();
//# sourceMappingURL=commonHelpers.js.map
