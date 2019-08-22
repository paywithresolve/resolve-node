const API = require('../services/api');

class Charges {
  static create(data) {
    return API.post('/charges', data);
  }

  static retrieve(id) {
    return API.get(`/charges/${id}`);
  }

  static update(id, data) {
    return API.put(`/charges/${id}`, data);
  }

  static capture(id, data) {
    return API.post(`/charges/${id}/capture`, data);
  }

  static list(queryOptions) {
    return API.get(`/charges`, queryOptions);
  }

  static cancel(id) {
    return API.delete(`/charges/${id}`);
  }
}

module.exports = Charges;
