// fetch('https://pixabay.com/api/?key=48275736-0f4ea71af3074d68213ba754e&q=yellow+flowers&image_type=photo')

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCard } from './js/render-function';
import { fetchPhotoByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-btn');

const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

let page = 1;
let searchQuery = '';
let lightBox;

const onSearchFormSubmit = async event => {
  showLoader();

  try {
    event.preventDefault();

    searchQuery = event.currentTarget.elements.query.value.trim();

    if (searchQuery === '') {
      iziToast.warning({
        message: 'The search query cannot be empty. Please enter a keyword!',
        position: 'topRight',
      });
      hideLoader();
      galleryEl.innerHTML = '';

      return;
    }

    page = 1;

    loadMoreBtn.classList.add('is-hidden');

    const { data } = await fetchPhotoByQuery(searchQuery, page);

    if (data.total === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      galleryEl.innerHTML = '';
      hideLoader();
      searchFormEl.reset();

      return;
    }

    if (data.totalHits > data.hits.length) {
      loadMoreBtn.classList.remove('is-hidden');

      loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryTemplate = data.hits.map(el => createGalleryCard(el)).join('');

    galleryEl.innerHTML = galleryTemplate;

    smoothScrollToNewItems();

    searchFormEl.reset();
   
    if (lightBox) {
      lightBox.refresh();
    } else {
      lightBox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    }
  } catch (error) {
    iziToast.error({
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
  }
  hideLoader();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data } = await fetchPhotoByQuery(searchQuery, page);

    const galleryTemplate = data.hits.map(el => createGalleryCard(el)).join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    smoothScrollToNewItems();

    
    lightBox.refresh();

    if (page * 15 >= data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');

      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const smoothScrollToNewItems = () => {
  const cardHeight = document
    .querySelector('.gallery-card')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
