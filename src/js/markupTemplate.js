import refs from './refs.js';
import template from '../templates/template.hbs';


function markupTemplate(hits) {
  const markup = template(hits);
  refs.ulGallery.insertAdjacentHTML('beforeend', markup);
}

export default markupTemplate;
