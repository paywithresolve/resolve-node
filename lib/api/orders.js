const Api = require('../services/api');

class Orders {
  static create(data) {
    return Api.post('/orders', data);
  }

  static retrieve(id) {
    return Api.get(`/orders/${id}`);
  }

  static update(id, data) {
    return Api.put(`/orders/${id}`, data);
  }

  static list(queryOptions) {
    return Api.get(`/orders`, queryOptions);
  }

  static delete(id) {
    return Api.delete(`/orders/${id}`);
  }
}

module.exports = Orders;
