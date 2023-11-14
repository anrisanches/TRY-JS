import axios from 'axios';

const BASE_URL = 'https://the-one-api.dev/v2';
// const API_KEY = 'Access token: qFLwDJcYNKcN6zfSWmYb';
const END_POINT = '/character';

const containerCharRef = document.querySelector('.character-container');
const guardRef = document.querySelector('.js-guard');
const btnRef = document.querySelector('.container-button');

btnRef.hidden = true;

///character/{id}/quote

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = 'Bearer qFLwDJcYNKcN6zfSWmYb';

let page = 1;

// const optionsAxios = {
//   params: {
//     limit: 20,
//     page,
//   },
// };

function getDataAxios() {
  axios
    .get(`${END_POINT}?limit=20&page=${page}`)
    .then(response => {
      if (response.statusText !== 'OK') return;
      ///////////////////////////////////////////////////////////////////////////////////////////////
      // containerCharRef.insertAdjacentHTML('beforeend', renderMarkup(response.data));

      observer.observe(targetObserve);
      // btnRef.hidden = false;

      if (page === response.data.pages) {
        // btnRef.hidden = true;
        console.log(1);
      }
    })
    .catch(console.log);
}

getDataAxios();

let targetObserve = document.querySelector('.js-guard');

let optionsObserver = {
  // root: document.querySelector(".js-guard"),
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onObserveCallback, optionsObserver);

function onObserveCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      getDataAxios();
      console.log(entry.isIntersecting);
    }
  });
}

//   btnRef.addEventListener('click', onBtnClick);

//   function onBtnClick () {
//     page +=1;
//     getDataAxios()
//   }

function renderMarkup(objCharacters) {
  allArr = objCharacters.docs;
  return allArr
    .map(
      el => `<article class="char-article" id="${el._id}">
    <h2 class="char-name">${el.name}</h2>
    <h3 class="char-race">${el.race}</h3>
    <h3 class="char-gender">${el.gender}</h3>
</article>`
    )
    .join('');
}

//--------------------------------------------------------------------------------
import NewsApiService from "./components/news-api-service";



const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articleContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService()

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onFormSubmit(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value
  
  newsApiService.resetPage()
  newsApiService.fetchArticles().then(articles=>{
    clearArticleContainer()
    markupArticle(articles)
  })
  // newsApiService.fetchArticles().then(markupArticle)
  // newsApiService.fetchArticles().then(articles => console.log(articles))

}

function onLoadMore () {
  newsApiService.fetchArticles().then(markupArticle)
}


function markupArticle (article) {
  const markup = article.map(item=>{
    return `<li>
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
        <article>
            <img src="${item.urlToImage}" alt="${item.title}" width="480">
            <h2>${item.author}</h2>
            <p>Poster by: ${item.description}</p>
            <p>${item.content}</p>
        </article>
    </a>
  </li>`
  }).join('')
  
  refs.articleContainer.insertAdjacentHTML('beforeend', markup)
}

function clearArticleContainer () {
  refs.articleContainer.innerHTML = ''
}
