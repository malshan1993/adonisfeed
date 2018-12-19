const Parser = require('rss-parser');
let parser = new Parser();

class Feed {

    async parseFeed(url) {
      const response = await parser.parseURL(url);
      return response;
    }
  
    async getMultiple(data){
      
      const pArray = data.map(async item => {
        const response = await this.parseFeed(item);
        return response;
      });
      const datas = await Promise.all(pArray);
      return datas;
      
    }
  
    async getOne(data){
  
      const response = await this.parseFeed(data);
      return response;
      
    }
  
    async make(feed = []){
      if(Array.isArray(feed)){
        const response = await this.getMultiple(feed);
        return response;
      } else {
        const response = await this.getOne(feed);
        return response;
      }
    }
  
}

module.exports = Feed;