/* empty css                      */import{a as b,i as l,S as v}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const g=e=>`
      <li class="gallery-card">
          <a class="img-link" href="${e.largeImageURL}">
          <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"/>
          </a>
          <ul class="gallery-data-img">
          <li class="img-data">Likes: <span class="api-data">${e.likes}</span></li>
          <li class="img-data">Views: <span class="api-data">${e.views}</span></li>
          <li class="img-data">Comments: <span class="api-data">${e.comments}</span></li>
          <li class="img-data">Downloads: <span class="api-data">${e.downloads}</span></li>
          </ul>
      </li>`,y=(e,t)=>{const r={params:{key:"48275736-0f4ea71af3074d68213ba754e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return b.get("https://pixabay.com/api/",r)},h=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),f=document.querySelector(".loader"),i=document.querySelector(".js-load-btn"),S=()=>{f.classList.remove("is-hidden")},m=()=>{f.classList.add("is-hidden")};let n=1,d="",u;const q=async e=>{S();try{if(e.preventDefault(),d=e.currentTarget.elements.query.value.trim(),d===""){l.warning({message:"The search query cannot be empty. Please enter a keyword!",position:"topRight"}),m(),c.innerHTML="";return}n=1,i.classList.add("is-hidden");const{data:t}=await y(d,n);if(t.total===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",m(),h.reset();return}t.totalHits>t.hits.length&&(i.classList.remove("is-hidden"),i.addEventListener("click",L));const r=t.hits.map(o=>g(o)).join("");c.innerHTML=r,w(),h.reset(),u?u.refresh():u=new v(".js-gallery a",{captionsData:"alt",captionDelay:250})}catch{l.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}m()};h.addEventListener("submit",q);const L=async e=>{try{n++;const{data:t}=await y(d,n),r=t.hits.map(o=>g(o)).join("");c.insertAdjacentHTML("beforeend",r),w(),u.refresh(),n*15>=t.totalHits&&(i.classList.add("is-hidden"),i.removeEventListener("click",L),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}},w=()=>{const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
