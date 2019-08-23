const API = require('../services/api');

class Events {
  static retrieve(id) {
    return API.get(`/events/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/events`, queryOptions);
  }
}

module.exports = Events;
