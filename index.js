/* empty css                      */import{i as l,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=r=>`
      <li class="gallery-card">
          <a class="img-link" href="${r.largeImageURL}">
          <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}"/>
          </a>
          <ul class="gallery-data-img">
          <li class="img-data">Likes: <span class="api-data">${r.likes}</span></li>
          <li class="img-data">Views: <span class="api-data">${r.views}</span></li>
          <li class="img-data">Comments: <span class="api-data">${r.comments}</span></li>
          <li class="img-data">Downloads: <span class="api-data">${r.downloads}</span></li>
          </ul>
      </li>`,p=r=>{const s=new URLSearchParams({key:"48275736-0f4ea71af3074d68213ba754e",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${s}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),h=()=>{d.classList.remove("is-hidden")},g=()=>{d.classList.add("is-hidden")},y=r=>{r.preventDefault();const s=r.currentTarget.elements.query.value.trim();if(s===""){l.warning({message:"The search query cannot be empty. Please enter a keyword!",position:"topRight"});return}h(),p(s).then(a=>{if(a.total===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const o=a.hits.map(t=>m(t)).join("");c.innerHTML=o,n.reset(),new u(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(a=>{l.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{g()})};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
