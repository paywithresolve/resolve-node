# Resolve NodeJS library

Resolve offers automated net terms for B2B. The Resolve NodeJS library is a wrapper around the Resolve API.

To better understand how this library works, read the <a href="https://app.resolvepay.com/docs/api">Resolve API docs</a>.

## Installation

With npm

```bash
npm install resolve-node --save
```

With Yarn

```bash
yarn add resolve-node
```

## Configuration

The client is authenticated using your Merchant ID and secret key. You can find these details in your dashboard under _Settings > Integrations_.

**Basic usage**

```javascript
const resolve = require('resolve-node');

resolve.init('merchant_id', 'secret_key');

await resolve.charges.create({
  amount: 100,
  customer_id: 'jetpJPb4D8',
  order_id: 'jDZi2Bdx8x',
  captured: true,
  po_number: 'PO9999',
  terms: 'net60'
});
```
