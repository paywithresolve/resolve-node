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

class ResolveNode {
  static init(id, secretKey) {
    Api.setCredentials(id, secretKey);
    return this;
  }
}

ResolveNode.applications = Applications;
ResolveNode.charges = Charges;
ResolveNode.customers = Customers;
ResolveNode.invoices = Invoices;
ResolveNode.events = Events;
ResolveNode.orders = Orders;
ResolveNode.payments = Payments;
ResolveNode.payouts = Payouts;
ResolveNode.refunds = Refunds;
ResolveNode.reimbursements = Reimbursements;

module.exports = ResolveNode;
