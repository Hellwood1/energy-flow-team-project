import"./assets/index-73f048ee.js";import{a as u,i as w}from"./assets/vendor-c4bdd18a.js";const ge=({results:e=[]})=>e.reduce((t,{name:s,filter:n,imgUrl:a})=>t+`<li
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
  </li>`,""),pe=({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:i,popularity:o,burnedCalories:l,description:f,_id:g})=>`
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
      ${f}
    </p>
    <div class="exercise-modal-buttons">
      <button type="button" class="exercise-favorite-add-btn">
        Add to favorites
        <svg class="exercise-heart-icon" width="18" height="18">
          <use href="./images/sprite.svg#icon-heart"></use>
        </svg>
      </button>
      <button type="button" data-modal-rating-open class="exercise-rating-give-btn" data-modal-rating-open
      data-id="${g}">
        Give a rating
      </button>
    </div>
  </div>
`;class v{constructor(){u.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,s,n){const a=new URLSearchParams({filter:t,page:s,limit:n});return(await u.get(`${this.BASE_URL}/filters?${a}`)).data}async getExercisesByCategory(t,s,n,a){const i=new URLSearchParams({[t]:s,page:n,limit:a});return(await u.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExercisesByKeyWord(t,s,n,a,i){const o=new URLSearchParams({[t]:s,keyword:n,page:a,limit:i});return(await u.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExerciseInfoById(t){return(await u.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,s,n,a){return await u({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(s),email:n,review:a}})}async getAllExercises(){return(await u.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await u.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await u({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const L=()=>{w.error({message:"Sorry, something went wrong. Please, try again later",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},he=()=>{w.success({message:"Thanks for subscribing",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ve=()=>{w.error({message:"The subscription has already been sent to this email",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},fe=()=>{w.success({message:"Thank you for your feedback",backgroundColor:"green",messageColor:"white",maxWidth:300,position:"center",timeout:4e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},ye=e=>{w.error({message:"Sorry, you have already leave a review",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"center",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},xe=(e,t="hidden")=>{e.classList.add(t)},we=(e,t="hidden")=>{e.classList.remove(t)};let c=1,_="test";document.querySelector(".navigation-list-form");const K=document.querySelector(".exercises-navigation-list");function Le(e,t){let s=[];if(e<5)for(let n=1;n<=e;n++)s.push(n);else e>=5&&t<=3?s=[1,2,3,4,"...",e]:e>=5&&e-t<=2?s=[1,"...",e-3,e-2,e-1,e]:s=[1,"...",t-1,t,parseInt(t)+1,"...",e];return s}function M(e,t){const s=Le(e,t).map(n=>`<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${n}">${n}</button>
      </li>`).join("");K.innerHTML=s,be()}function Se(e){if(e.preventDefault(),!parseInt(e.submitter.textContent))return;c=e.submitter.textContent,_=Y(document.querySelector(".current-category-btn").textContent).trim(),document.querySelector(".exercises-path-name").classList.contains("hidden")?F(_):k?ee():J()}function A(){c=1}function be(){const e=document.querySelectorAll(".exercises-navigation-item");if(c<=1)e[0].firstElementChild.classList.add("pagination-current");else for(let t=0;t<e.length;t++)e[t].firstElementChild.classList.contains("pagination-current")?e[t].firstElementChild.classList.remove("pagination-current"):e[t].firstElementChild.textContent===c&&e[t].firstElementChild.classList.add("pagination-current")}function Ee(){K.innerHTML=""}const qe=document.querySelectorAll(".rating-container"),V=()=>{let e,t;qe.forEach(r=>s(r));function s(r){n(r),a(),r.classList.contains("set-rating")&&i(r)}function n(r){e=r.querySelector(".rating-active"),t=r.querySelector(".rating-value")}function a(r=t.innerHTML){const y=r/.05;e.style.width=`${y}%`}function i(r){const y=r.querySelectorAll(".rating-item");for(const p of y)p.addEventListener("mouseenter",S=>{n(r),a(p.value)}),p.addEventListener("mouseleave",S=>{a()}),p.addEventListener("click",S=>{p.checked=!0,n(r),t.innerHTML=p.value.padEnd(3,".0"),a()})}const o=document.querySelector(".rating-form");let l={};const f=async r=>{r.preventDefault();const y=o.dataset.id;new FormData(r.currentTarget).forEach((b,me)=>{l[me]=b});const S=l.rate,de=l.email,ue=l.review;new v().giveRating(y,S,de,ue).then(b=>{b.status===200?(fe(),x()):ye()}).catch(b=>L()),t.innerHTML=0,a(),o.reset()};o.addEventListener("submit",f);const g=document.querySelector("[data-modal-rating-close]"),U=document.querySelector("[data-modal-rating]"),d=document.querySelector("[data-modal-rating-backdrop]"),C=document.querySelector("[data-modal-rating-container]");le();function x(){d.classList.add("backdrop-rating-is-hidden"),C.classList.add("modal-rating-is-hidden");const r=document.querySelector(".exercise-modal");document.querySelector(".exercise-modal-backdrop").classList.remove("backdrop-is-hidden"),r.classList.remove("modal-is-hidden")}function ce(r){r.target.key}function le(){g.addEventListener("click",x),window.addEventListener("keydown",ce),U.addEventListener("click",r=>{r.target!==d&&r.target!==g||x()})}},ke=async e=>{const t=document.querySelector(".exercise-modal");if(e.target.nodeName!=="BUTTON")return;const s=new v,n=e.target.dataset.exerciseId,a=document.querySelector(".exercise-modal"),i=document.querySelector(".exercise-modal-backdrop");try{const f=await s.getExerciseInfoById(n);t.innerHTML=pe(f),document.querySelector(".send-rating-form").dataset.id=n,l();const g=document.querySelector(".exercise-modal-close-btn");i.addEventListener("click",d=>{d.target!==g&&d.target!==i||o()}),g.addEventListener("click",o),document.addEventListener("keydown",d=>{d.key==="Escape"&&o()}),V(),document.querySelectorAll(".exercise-rating-give-btn").forEach(d=>d.addEventListener("click",()=>{const C=document.querySelector("[data-modal-rating-backdrop]"),x=document.querySelector("[data-modal-rating-container]");C.classList.remove("backdrop-rating-is-hidden"),x.classList.remove("modal-rating-is-hidden"),o()}))}catch{L()}function o(){i.classList.add("backdrop-is-hidden"),a.classList.add("modal-is-hidden")}function l(){i.classList.remove("backdrop-is-hidden"),a.classList.remove("modal-is-hidden")}},T=document.querySelector(".categories-list"),Ce=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&T.classList.add("on-animate")})});Ce.observe(T);function Q(e){e.classList.add("on-animate"),setTimeout(()=>{e.classList.remove("on-animate")},1e3)}const D=document.querySelector(".exercises-search-wrap");let R,E,Z=window.innerWidth<=1440?8:9,k=!1;function J(e){const t=new v;if(k=!1,document.querySelector(".exercises-path-name").classList.contains("hidden")){if(e.target.nodeName!=="LI")return;A(),R=Y(e.target.dataset.filter),E=e.target.dataset.name}try{return t.getExercisesByCategory(R,E,c,Z).then(s=>{const n=X(s.results);M(s.totalPages,c),$e(G(E)),$(n),Re(),m.addEventListener("click",ke),Q(T)})}catch{L()}}function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Be(){document.querySelector(".exercises-search-wrap").classList.add("hidden"),O()}function Re(){const e=document.querySelector(".exercises-search-wrap");e.classList.remove("hidden"),e.addEventListener("submit",Pe),e.addEventListener("input",Ie)}function Y(e){return e==="Body parts"?e="bodypart":e.toLowerCase()}function X(e){return e.map(t=>`<li class="exercises-card">
      <div class="exercises-card-upper-part">
        <div class="div-rating-or-delete-button">
          <div class="workout-text">WORKOUT</div>
          <div class="card-rating">${t.rating.toFixed(1)}<span>
            <svg class="rating-icon" width="18" height="18">
            <use href="/images/sprite.svg#icon-star"></use></svg>
          </span></div>
        </div>
        <button type="button" class="card-start open-modal-exercise" data-exercise-id="${t._id}">Start <span>
          <svg class="start-icon" width="14" height="14">
          <use href="/images/sprite.svg#icon-right-arrow"></use></svg>
        </span></button>
      </div>
      <div class="exercises-card-midle-part">
        <div class="exercises-card-midle-part-svg">
          <svg class="runing-man-icon" width="24" height="24">
          <use href="/images/sprite.svg#icon-runing-man"></use></svg>
        </div>
        <p class="card-exercise-name">${G(t.name)}</p>
      </div>
      <div class="exercises-card-lower-part">
        <p>Burned calories: <span class="exercises-card-lower-part-span">${t.burnedCalories} / 3 min</span></p>
        <p>Body part: <span class="exercises-card-lower-part-span">${t.bodyPart}</span></p>
        <p>Target: <span class="exercises-card-lower-part-span">${Me(t.target)}</span></p>
      </div>
    </li>`).join("")}function $(e){m.classList.add("exercise-list"),m.innerHTML=e}function $e(e){const t=document.querySelector(".exercises-title"),s=document.querySelector(".exercises-path-name");t.textContent="Exercises /",s.textContent=e,s.classList.remove("hidden")}function Pe(e){e.preventDefault(),A(),ee()}function ee(){k=!0;const e=D.firstElementChild.value;new v().getExercisesByKeyWord(R,E,e,c,Z).then(s=>{if(s.results.length<=0)return Ee(),$('<li class="exercises-not-found-msg">Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</li>');M(s.totalPages,c);const n=X(s.results);$(n)})}function Ie(){const e=D.firstElementChild.value,t=document.querySelector(".exercises-search-close-btn");e?(t.classList.remove("hidden"),t.addEventListener("click",O)):te()}function te(){const e=document.querySelector(".exercises-search-close-btn");e.classList.add("hidden"),e.removeEventListener("click",O)}function O(){k=!1,D.reset(),te()}function Me(e){return e.length>=9?e.slice(0,9)+"...":e}const m=document.querySelector(".categories-list"),Ae=document.querySelector(".category-btns-list"),se=document.querySelector(".exercises-title"),B=document.querySelector(".exercises-path-name"),Te=document.querySelector(".navigation-list-form"),De=()=>{const e=document.querySelectorAll(".category-btn");e.forEach(t=>t.addEventListener("click",()=>{e.forEach(s=>we(s,"current-category-btn")),xe(t,"current-category-btn")}))},F=async e=>{const t=new v,s=window.innerWidth<768?8:12;e=document.querySelector(".current-category-btn").textContent.trim();try{const n=await t.getCategoriesByFilter(e,c,s);M(n.totalPages,c),m.innerHTML=ge(n),m.addEventListener("click",J),Te.addEventListener("submit",Se),Q(m)}catch{L()}},W=async e=>{const t=e.target.textContent.trim();A(),Oe(),await F(t),m.classList.contains("exercise-list")&&m.classList.remove("exercise-list")};function Oe(){B.textContent!==""&&(se.textContent="Exercises",B.textContent="",B.classList.add("hidden"),Be())}const Fe=()=>{window.addEventListener("load",De),window.addEventListener("load",F),Ae.addEventListener("click",W),se.addEventListener("click",W)},Ue=document.querySelector(".quote-text"),_e=document.querySelector(".quote-author"),We=new v,ze=async()=>{try{const e=await We.getQuote();if(e&&e.quote&&e.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(e)),localStorage.setItem("currentDate",t)}}catch(e){console.error("Помилка при отриманні цитати:",e)}},He=async()=>{const e=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||e!==t)&&await ze(),z()};function z(){const e=JSON.parse(localStorage.getItem("quoteObj"));Ue.innerHTML=e.quote,_e.innerHTML=e.author}const Ne=document.querySelector("[data-modal-open]"),je=document.querySelector("[data-modal-close]"),P=document.querySelector(".header__modal");var Ke={37:1,38:1,39:1,40:1};function h(e){e.preventDefault()}function ne(e){if(Ke[e.keyCode])return h(e),!1}var re=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){re=!0}}))}catch{}var q=re?{passive:!1}:!1,ae="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Ve(){window.addEventListener("DOMMouseScroll",h,!1),window.addEventListener(ae,h,q),window.addEventListener("touchmove",h,q),window.addEventListener("keydown",ne,!1)}function Qe(){window.removeEventListener("DOMMouseScroll",h,!1),window.removeEventListener(ae,h,q),window.removeEventListener("touchmove",h,q),window.removeEventListener("keydown",ne,!1)}const H=()=>P.classList.contains("none")?Qe():Ve(),N=()=>{Ne.addEventListener("click",()=>{P.classList.toggle("none"),H()}),je.addEventListener("click",()=>{P.classList.toggle("none"),H()})},Ze=()=>{if(N())return N()},Je=document.querySelector(".footer-subscription"),j=document.querySelector(".input-footer");Je.addEventListener("submit",ie);async function ie(e){e.preventDefault();const t=j.value.trim(),s=new v;if(!Ge(t)){alert("Please enter a valid email address");return}if(t===""){alert("Please enter an email address");return}try{const n=await s.sendSubscription(t);console.log("Data sent successfully"),j.value="",he()}catch(n){console.error("There was a problem with the fetch operation:",n),n.response&&n.response.status===409?ve():L()}}function Ge(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}const I=document.querySelector(".up-btn");I.addEventListener("click",Ye);window.onscroll=function(){oe()};function oe(){document.documentElement.scrollTop>2e3?I.style.display="block":I.style.display="none"}function Ye(){document.documentElement.scrollTop=0}Ze();Fe();He();V();ie();oe();
//# sourceMappingURL=commonHelpers.js.map
