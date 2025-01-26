export const createGalleryCard = imgInfo => {
    return `
      <li class="gallery-card">
          <a class="img-link" href="${imgInfo.largeImageURL}">
          <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/>
          </a>
          <ul class="gallery-data-img">
          <li class="img-data">Likes: <span class="api-data">${imgInfo.likes}</span></li>
          <li class="img-data">Views: <span class="api-data">${imgInfo.views}</span></li>
          <li class="img-data">Comments: <span class="api-data">${imgInfo.comments}</span></li>
          <li class="img-data">Downloads: <span class="api-data">${imgInfo.downloads}</span></li>
          </ul>
      </li>`;
  };