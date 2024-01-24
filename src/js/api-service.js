export default class EnergyFlowApiSevice {
  constructor() {
    this.BASE_URL = 'https://energyflow.b.goit.study/api';
    this.getOptions = {
      headers: {
        'Content-type': 'application/json',
      },
    };
  }
  getCategoriesByFilter(filterName, page, perPage) {
    const url = `${this.BASE_URL}/filters?filter=${filterName}&page=${page}&limit=${perPage}`;
    return fetch(url, this.getOptions).then(r => {
      return r.json();
    });
  }
  getExercisesByCategory(filter, category, page, perPage) {
    const url = `${this.BASE_URL}/exercises?${filter}=${category}&page=${page}&limit=${perPage}`;
    return fetch(url, this.getOptions).then(r => {
      return r.json();
    });
  }
  getExercisesByKeyWord(filter, category, keyword, page, perPage) {
    const url = `${this.BASE_URL}/exercises?${filter}=${category}&keyword=${keyword}&page=${page}&limit=${perPage}`;
    return fetch(url, this.getOptions).then(r => {
      return r.json();
    });
  }
  getExerciseInfoById(id) {
    const url = `${this.BASE_URL}/exercises/${id}`;
    return fetch(url, this.getOptions).then(r => {
      return r.json();
    });
  }
  getAllExercises() {
    const url = `${this.BASE_URL}/exercises?&limit=9999`;
    const options = {
      'Content-type': 'application/json',
    };
    return fetch(url, options).then(r => {
      return r.json();
    });
  }
  getQuote() {
    const url = `${this.BASE_URL}/quote `;
    return fetch(url, this.getOptions).then(r => {
      return r.json();
    });
  }
  sendSubscription(email) {
    const url = `${this.BASE_URL}/subscription `;
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    };
    return fetch(url, options).then(r => {
      return r.json();
    });
  }
}
