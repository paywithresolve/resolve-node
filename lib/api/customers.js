const Api = require('../services/api');

class Customers {
  static retrieve(id) {
    return Api.get(`/customers/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/customers`, queryOptions);
  }
}

module.exports = Customers;
