const API = require('../services/api');

class Applications {
  static create(data) {
    return API.post('/applications', data);
  }

  static retrieve(id) {
    return API.get(`/applications/${id}`);
  }

  static update(id, data) {
    return API.put(`/applications/${id}`, data);
  }

  static submit(id) {
    return API.post(`/applications/${id}/submit`);
  }

  static list(queryOptions) {
    return API.get(`/applications`, queryOptions);
  }
}

module.exports = Applications;
