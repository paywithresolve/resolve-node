const Api = require('./services/api');

const Applications = require('./api/applications');
const Charges = require('./api/charges');
const Customers = require('./api/customers');
const Invoices = require('./api/invoices');
const Orders = require('./api/orders');
const Payouts = require('./api/payouts');
const Refunds = require('./api/refunds');


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
ResolveNode.orders = Orders;
ResolveNode.payouts = Payouts;
ResolveNode.refunds = Refunds;
