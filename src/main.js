// fetch('https://pixabay.com/api/?key=48275736-0f4ea71af3074d68213ba754e&q=yellow+flowers&image_type=photo')

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCard } from './js/render-function';
import { fetchPhotoByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.query.value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      message: 'The search query cannot be empty. Please enter a keyword!',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  fetchPhotoByQuery(searchQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCard(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;

      searchFormEl.reset();
      const lightBox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightBox.refresh();
    })
    .catch(err => {
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    })

    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
