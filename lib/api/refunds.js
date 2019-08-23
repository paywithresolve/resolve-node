const API = require('../services/api');

class Refunds {
  static create(data) {
    return API.post('/refunds', data);
  }

  static retrieve(id) {
    return API.get(`/refunds/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/refunds`, queryOptions);
  }
}

module.exports = Refunds;
