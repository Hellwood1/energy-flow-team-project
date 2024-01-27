import axios from 'axios';

export default class EnergyFlowApiSevice {
  constructor() {
    axios.defaults.headers.common['Content-type'] = 'application/json';
    this.BASE_URL = 'https://energyflow.b.goit.study/api';
  }

  async getCategoriesByFilter(filterName, page, perPage) {
    const searchParams = new URLSearchParams({
      filter: filterName,
      page: page,
      limit: perPage,
    });
    const response = await axios.get(
      `${this.BASE_URL}/filters?${searchParams}`
    );
    return response.data;
  }
  async getExercisesByCategory(filter, category, page, perPage) {
    const searchParams = new URLSearchParams({
      [filter]: category,
      page: page,
      limit: perPage,
    });
    const response = await axios.get(
      `${this.BASE_URL}/exercises?${searchParams}`
    );
    return response.data;
  }
  async getExercisesByKeyWord(filter, category, keyword, page, perPage) {
    const searchParams = new URLSearchParams({
      [filter]: category,
      keyword: keyword,
      page: page,
      limit: perPage,
    });
    const response = await axios.get(
      `${this.BASE_URL}/exercises?${searchParams}`
    );
    return response.data;
  }
  async getExerciseInfoById(id) {
    const response = await axios.get(`${this.BASE_URL}/exercises/${id}`);
    return response.data;
  }
  async giveRating(id, rating, email, comment) {
    const response = await axios({
      method: 'patch',
      url: `${this.BASE_URL}/exercises/${id}/rating`,
      data: {
        rate: Number(rating),
        email: email,
        review: comment,
      },
    });
    return response;
  }
  async getAllExercises() {
    const response = await axios.get(`${this.BASE_URL}/exercises?&limit=9999`);
    return response.data;
  }
  async getQuote() {
    const response = await axios.get(`${this.BASE_URL}/quote`);
    return response.data;
  }
  async sendSubscription(email) {
    const response = await axios({
      method: 'post',
      url: `${this.BASE_URL}/subscription`,
      data: {
        email: email,
      },
    });
    return response.data;
  }
}
