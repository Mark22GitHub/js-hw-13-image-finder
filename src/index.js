import css from "./css/style.css";
import apiService from './js/apiService.js'
import markupTemplate from './js/markupTemplate.js'
import refs from './js/refs.js';
import lightBox from './js/lightBox.js';
import intersectionObserver from './js/intersectionObserver.js'


refs.searchForm.addEventListener('submit', searchPhotoCardsbyInputForm);

function searchPhotoCardsbyInputForm(event) {
  event.preventDefault();

  const inputForm = event.currentTarget;
  apiService.query = inputForm.query.value;

  clearUlGallery();
  apiService.resetPage();
  inputForm.reset();

  intersectionObserver();
}

export function fetchHits() {
  apiService.fetchHits().then(hits => {
    markupTemplate(hits);
  });
}

function clearUlGallery() {
  refs.ulGallery.innerHTML = '';
}