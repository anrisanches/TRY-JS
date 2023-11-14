import axios from 'axios';
export default class NewsApiService{
    constructor(){
      this.searchQuery = '';
      this.page = null;
    }

    async fetchArticles(){
      console.log(this);
      const KEY_NEWS = '74809e3919564616bf5c6e5a9eb06cf9';

        const options = {
            headers: {
              Authorization: KEY_NEWS,
            },
          };
        
          const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
        
          return await axios(url, options)
          .then(res => {
            this.incrementPage()
            
            return res.data.articles 
          })
    }

    get query(){
      return this.searchQuery
    }

    set query(newQuery){
      this.searchQuery = newQuery 
    }

    resetPage(){
      this.page = 1;
    }

    incrementPage(){
      this.page +=1
    }
}

