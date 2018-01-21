export default class Fetch {
  
  constructor() {
    this.param = {
      method: 'POST',
      credentials: 'include',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: ''
    };
  }
  
  async get_data(url) {
    this.param.body = url;
    const responce = await fetch(url, this.param);
    return responce.json();
  }

  async ins_data(url, param) {
    
  }

  async del_data(url, param) {
    
  }
}