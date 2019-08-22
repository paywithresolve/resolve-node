const API = require('../services/api');

class Reimbursements {
  static retrieve(id) {
    return API.get(`/reimbursements/${id}`);
  }

  static list(queryOptions) {
    return API.get(`/reimbursements`, queryOptions);
  }
}

module.exports = Reimbursements;
