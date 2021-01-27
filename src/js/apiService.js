
export default {
  queryHits: '',
  page: 1,
  per_page: 6,
  
  fetchHits() {
    const apiKey = '18623551-685e1819373a3e2d77873e072';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.per_page}&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
    },
  
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  
  get query() {
    return this.queryHits;
  },
  set query(value) {
    this.queryHits = value;
  },
};