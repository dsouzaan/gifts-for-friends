(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function s(i){let r=!0;const o=()=>{r=!r,i.innerHTML=`Evil mode is ${r?"on 😈":"off 😊"}`};o(),i.addEventListener("click",o)}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Hello!</h1>
    <div class="card">
      <button id="switcher" type="button"></button>
    </div>
  </div>
`;s(document.querySelector("#switcher"));
