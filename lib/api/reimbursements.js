const Api = require('../services/api');

class Reimbursements {
  static retrieve(id) {
    return Api.get(`/reimbursements/${id}`);
  }

  static list(queryOptions) {
    return Api.get(`/reimbursements`, queryOptions);
  }
}

module.exports = Reimbursements;
