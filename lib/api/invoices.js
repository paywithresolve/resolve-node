const API = require('../services/api');

class Invoices {
  static retrieve(id) {
    return API.get(`/invoices/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/invoices`, queryOptions);
  }
}

module.exports = Invoices;
