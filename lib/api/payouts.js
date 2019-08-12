const Api = require('../services/api');

class Payouts {
  static retrieve(id) {
    return Api.get(`/payouts/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/payouts`, queryOptions);
  }
}

module.exports = Payouts;
