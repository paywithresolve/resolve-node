const API = require('../services/api');

class Customers {
  static retrieve(id) {
    return API.get(`/customers/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/customers`, queryOptions);
  }
}

module.exports = Customers;
