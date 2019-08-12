const Api = require('../services/api');

class Refunds {
  static create(data) {
    return Api.post('/refunds', data);
  }

  static retrieve(id) {
    return Api.get(`/refunds/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/refunds`, queryOptions);
  }
}

module.exports = Refunds;
