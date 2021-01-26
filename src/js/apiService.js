// export default apiService;

const apiKey = `18623551-685e1819373a3e2d77873e072`;

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page_number}&per_page=${per_page}&key=${apiKey}`;


let query;
let page_number;
const per_page = 12;


// Тебе интересны следующие свойства:

// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок
