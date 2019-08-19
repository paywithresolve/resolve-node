const Api = require('../services/api');

class Events {
  static retrieve(id) {
    return Api.get(`/events/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/events`, queryOptions);
  }
}

module.exports = Events;
