const Api = require('../services/api');

class Payments {
  static create(data) {
    return Api.post('/payments', data);
  }

  static retrieve(id) {
    return Api.get(`/payments/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/payments`, queryOptions);
  }
}

module.exports = Payments;
