import{a as l,S as d,i}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="52825058-9c2b701d3fa996d89232a6d0f";function u(s){return l("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horisontal",safesearch:!0}}).then(o=>o.data).catch(o=>{throw console.log(o.message),o})}const m=document.querySelector(".gallery"),h=new d(".gallery a"),c=document.querySelector(".loader");function p(s){if(!s){console.error("Expected array, got:",s);return}const o=[...s].map(t=>`
    <li class="photo-card"> 
    <a href="${t.largeImageURL}">
    <img class="imgs" src="${t.webformatURL}" alt="${t.tags}" />
    </a>
          <div class="info">
          <p class="likes"> <b>Likes</b> ${t.likes}</p>
           <p class="views"> <b>Views</b>${t.views}</p>
            <p class="comments"> <b>Comments</b>${t.comments}</p>
             <p class="downloads"> <b>Downloads</b>${t.downloads}</p>
          </div>
    </li>`).join("");m.innerHTML=o,h.refresh()}function g(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();g(),u(o).then(t=>{t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",theme:"light",maxWidth:"330px",color:"white"}):p(t.hits)}).catch(t=>{console.error("Something went wrong"),i.error({message:"Something went wrong",backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",maxWidth:"330px"})}).finally(()=>{s.target.reset(),y()})}
//# sourceMappingURL=index.js.map
