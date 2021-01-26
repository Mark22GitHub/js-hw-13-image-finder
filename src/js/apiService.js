
export default {
  queryHits: '',
  page: 1,
  per_page: 12,
  
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



// =======================================================
// const apiKey = '4330ebfabc654a6992c2aa792f3173a3';

// export default {
//   searchQuery: '',
//   page: 1,
//   fetchArticles() {
//     const url = `http://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=5&page=${this.page}`;
//     const options = {
//       headers: { Authorization: apiKey },
//     };

//     return fetch(url, options)
//       .then(res => res.json())
//       .then(({ articles }) => {
//         this.incrementPage();

//         return articles;
//       });
//   },
//   resetPage() {
//     this.page = 1;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
//   get query() {
//     return this.searchQuery;
//   },
//   set query(value) {
//     this.searchQuery = value;
//   },
// };
// =======================================================
