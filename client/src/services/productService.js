import { http } from './http-common';

export default {
  async get() {
    const data = await http.get('/products')
      .then(response => response.data).catch(error => error.response);
    return data;
  },

};
