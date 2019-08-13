const Api = require('../services/api');

class Charges {
  static create(data) {
    return Api.post('/charges', data);
  }

  static retrieve(id) {
    return Api.get(`/charges/${id}`);
  }

  static update(id, data) {
    return Api.put(`/charges/${id}`, data);
  }

  static capture(id, data) {
    return Api.post(`/charges/${id}/capture`, data);
  }

  static list(queryOptions) {
    return Api.get(`/charges`, queryOptions);
  }

  static cancel(id) {
    return Api.delete(`/charges/${id}`);
  }
}

module.exports = Charges;
