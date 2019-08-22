const Api = require('./lib/services/api');

const Applications = require('./lib/api/applications');
const Charges = require('./lib/api/charges');
const Customers = require('./lib/api/customers');
const Invoices = require('./lib/api/invoices');
const Events = require('./lib/api/events');
const Orders = require('./lib/api/orders');
const Payments = require('./lib/api/payments');
const Payouts = require('./lib/api/payouts');
const Refunds = require('./lib/api/refunds');
const Reimbursements = require('./lib/api/reimbursements');

class Resolve {
  static init(id, secretKey) {
    Api.setCredentials(id, secretKey);
    return this;
  }
}

Resolve.applications = Applications;
Resolve.charges = Charges;
Resolve.customers = Customers;
Resolve.invoices = Invoices;
Resolve.events = Events;
Resolve.orders = Orders;
Resolve.payments = Payments;
Resolve.payouts = Payouts;
Resolve.refunds = Refunds;
Resolve.reimbursements = Reimbursements;

module.exports = Resolve;
