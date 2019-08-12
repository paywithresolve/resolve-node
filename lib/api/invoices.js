const Api = require('../services/api');

class Invoices {
  static retrieve(id) {
    return Api.get(`/invoices/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/invoices`, queryOptions);
  }
}

module.exports = Invoices;
