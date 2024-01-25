import axios from 'axios';

export default class EnergyFlowApiSevice {
  constructor() {
    axios.defaults.headers.common['Content-type'] = 'application/json';
    this.BASE_URL = 'https://energyflow.b.goit.study/api';
  }

  getCategoriesByFilter(filterName, page, perPage) {
    const searchParams = new URLSearchParams({
      filter: filterName,
      page: page,
      limit: perPage,
    });
    return axios.get(`${this.BASE_URL}/filters?${searchParams}`);
  }
  getExercisesByCategory(filter, category, page, perPage) {
    const searchParams = new URLSearchParams({
      [filter]: category,
      page: page,
      limit: perPage,
    });
    return axios.get(`${this.BASE_URL}/exercises?${searchParams}`);
  }
  getExercisesByKeyWord(filter, category, keyword, page, perPage) {
    const searchParams = new URLSearchParams({
      [filter]: category,
      keyword: keyword,
      page: page,
      limit: perPage,
    });
    return axios.get(`${this.BASE_URL}/exercises?${searchParams}`);
  }
  getExerciseInfoById(id) {
    return axios.get(`${this.BASE_URL}/exercises/${id}`);
  }
  getAllExercises() {
    return axios.get(`${this.BASE_URL}/exercises?&limit=9999`);
  }
  getQuote() {
    return axios.get(`${this.BASE_URL}/quote`);
  }
  sendSubscription(email) {
    return axios({
      method: 'post',
      url: `${this.BASE_URL}/subscription`,
      data: {
        email: email,
      },
    });
  }
}
