const API = require('../services/api');

class Orders {
  static create(data) {
    return API.post('/orders', data);
  }

  static retrieve(id) {
    return API.get(`/orders/${id}`);
  }

  static update(id, data) {
    return API.put(`/orders/${id}`, data);
  }

  static list(queryOptions) {
    return API.get(`/orders`, queryOptions);
  }

  static delete(id) {
    return API.delete(`/orders/${id}`);
  }
}

module.exports = Orders;
