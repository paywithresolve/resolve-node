const Api = require('./services/api');

const Applications = require('./api/applications');
const Charges = require('./api/charges');
const Customers = require('./api/customers');
const Invoices = require('./api/invoices');
const Events = require('./api/events');
const Orders = require('./api/orders');
const Payments = require('./api/payments');
const Payouts = require('./api/payouts');
const Refunds = require('./api/refunds');
const Reimbursements = require('./api/reimbursements');

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
