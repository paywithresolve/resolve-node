const API = require('../services/api');

class Payouts {
  static retrieve(id) {
    return API.get(`/payouts/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/payouts`, queryOptions);
  }
}

module.exports = Payouts;
