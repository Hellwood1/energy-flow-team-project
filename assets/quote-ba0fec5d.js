import{a as n}from"./vendor-c4bdd18a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b="/energy-flow-team-project/assets/sprite-32ec9a67.svg";class w{constructor(){n.defaults.headers.common["Content-type"]="application/json",this.BASE_URL="https://energyflow.b.goit.study/api"}async getCategoriesByFilter(t,r,a){const e=new URLSearchParams({filter:t,page:r,limit:a});return(await n.get(`${this.BASE_URL}/filters?${e}`)).data}async getExercisesByCategory(t,r,a,e){const o=new URLSearchParams({[t]:r,page:a,limit:e});return(await n.get(`${this.BASE_URL}/exercises?${o}`)).data}async getExercisesByKeyWord(t,r,a,e,o){const i=new URLSearchParams({[t]:r,keyword:a,page:e,limit:o});return(await n.get(`${this.BASE_URL}/exercises?${i}`)).data}async getExerciseInfoById(t){return(await n.get(`${this.BASE_URL}/exercises/${t}`)).data}async giveRating(t,r,a,e){return await n({method:"patch",url:`${this.BASE_URL}/exercises/${t}/rating`,data:{rate:Number(r),email:a,review:e}})}async getAllExercises(){return(await n.get(`${this.BASE_URL}/exercises?&limit=9999`)).data}async getQuote(){return(await n.get(`${this.BASE_URL}/quote`)).data}async sendSubscription(t){return(await n({method:"post",url:`${this.BASE_URL}/subscription`,data:{email:t}})).data}}const p=document.querySelector(".exercise-modal"),g=document.querySelector(".exercise-modal-backdrop"),L=document.querySelector("[data-modal-rating]"),l=document.querySelector("[data-modal-rating-backdrop]"),y=document.querySelector("[data-modal-rating-container]"),u=document.querySelector("[data-modal-rating-close]"),E=()=>{g.classList.remove("backdrop-is-hidden"),p.classList.remove("modal-is-hidden"),window.addEventListener("keydown",c)},f=()=>{g.classList.add("backdrop-is-hidden"),p.classList.add("modal-is-hidden"),window.removeEventListener("keydown",c)},k=()=>{l.classList.remove("backdrop-rating-is-hidden"),y.classList.remove("modal-rating-is-hidden"),f(),window.removeEventListener("keydown",c),window.addEventListener("keydown",h)},d=()=>{l.classList.add("backdrop-rating-is-hidden"),y.classList.add("modal-rating-is-hidden"),E(),window.removeEventListener("keydown",h),window.addEventListener("keydown",c)};function c(s){s.key==="Escape"&&f()}function h(s){s.key==="Escape"&&d()}const A=()=>{u.addEventListener("click",d),L.addEventListener("click",s=>{s.target!==l&&s.target!==u||d()})},S=document.querySelector(".quote-text"),v=document.querySelector(".quote-author"),x=new w,R=async()=>{try{const s=await x.getQuote();if(s&&s.quote&&s.author){const t=new Date().toDateString();localStorage.setItem("quoteObj",JSON.stringify(s)),localStorage.setItem("currentDate",t)}}catch(s){console.error("Помилка при отриманні цитати:",s)}},U=async()=>{const s=new Date().toDateString(),t=localStorage.getItem("currentDate");(!t||s!==t)&&await R(),m()};function m(){const s=JSON.parse(localStorage.getItem("quoteObj"));S.innerHTML=s.quote,v.innerHTML=s.author}export{w as E,A as a,g as b,d as c,f as d,k as e,U as f,b as i,p as m,E as o};
//# sourceMappingURL=quote-ba0fec5d.js.map
