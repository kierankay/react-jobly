import axios from 'axios';
import jwt from 'jsonwebtoken'

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {

    paramsOrData._token = localStorage.token;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(query) {
    let res;
    if (query) {
      res = await this.request(`companies`, {search: query});
    } else {
      res = await this.request(`companies`);
    } 
    return res.companies;
  }

  static async searchJobs(query) {
    let res;
    if (query) {
      res = await this.request(`jobs`, {search: query});
    } else {
      res = await this.request(`jobs`);
    }
    return res.jobs;
  }

  static async login(username, password) {
    let res = await this.request(`login`, {username, password} ,"post");
    return res;
  }

  static async register(username, password, first_name, last_name, email) {
    let res = await this.request('users', {username, password, first_name, last_name, email}, "post");
    return res;
  }

  static async checkToken(token) {
    let username = jwt.decode(token).username
    let res = await this.request(`users/${username}`)
    return res;
  }

  static async editUser(username, password, first_name, last_name, photo_url, email) {
    let res = await this.request(`users/${username}`, {username, password, first_name, last_name, photo_url, email}, "patch")
    return res;
  }
}

export default JoblyApi;