import css from "./css/style.css";
import apiService from './js/apiService.js'
import markupTemplate from './js/markupTemplate.js'
import refs from './js/refs.js';



// const loadMoreBtn = new LoadMoreBtn({
//   selector: 'button[data-action="load-more"]',
//   hidden: true,
// });

refs.searchForm.addEventListener('submit', searchPhotoCardsbyFormInput);
// loadMoreBtn.refs.button.addEventListener('click', fetchHits);

function searchPhotoCardsbyFormInput(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.query.value;  //???????????//

  clearUlGallery();
  apiService.resetPage();
  fetchHits();
  form.reset();
}

function fetchHits() {
//   loadMoreBtn.disable();

  apiService.fetchHits().then(hits => {
    markupTemplate(hits);
    // loadMoreBtn.show();
    // loadMoreBtn.enable();
  });
}

function clearUlGallery() {
  refs.ulGallery.innerHTML = '';
}







// ========================================================================
// const loadMoreBtn = new LoadMoreBtn({
//   selector: 'button[data-action="load-more"]',
//   hidden: true,
// });

// refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function searchFormSubmitHandler(event) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   newsService.query = form.elements.query.value;

//   clearArticlesContainer();
//   newsService.resetPage();
//   fetchArticles();
//   form.reset();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();

//   newsService.fetchArticles().then(articles => {
//     updateArticlesMarkup(articles);
//     loadMoreBtn.show();
//     loadMoreBtn.enable();
//   });
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }
// ========================================================================