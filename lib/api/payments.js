const API = require('../services/api');

class Payments {
  static create(data) {
    return API.post('/payments', data);
  }

  static retrieve(id) {
    return API.get(`/payments/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/payments`, queryOptions);
  }
}

module.exports = Payments;
