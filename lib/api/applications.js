const Api = require('../services/api');

class Applications {
  static create(data) {
    return Api.post('/applications', data);
  }

  static retrieve(id) {
    return Api.get(`/applications/${id}`);
  }

  static update(id, data) {
    return Api.put(`/applications/${id}`, data);
  }

  static submit(id) {
    return Api.post(`/applications/${id}/submit`);
  }

  static list(queryOptions) {
    return Api.get(`/applications`, queryOptions);
  }
}

module.exports = Applications;
