const fetch = require('cross-fetch');
const payments = require('../../lib/api/payments');

const Api = require('../../lib/services/api');

describe('Payments API', () => {
  const body = { amount: 38 };
  const paymentId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('create', () => {
    it('should call fetch with appropriate params', async () => {
      const response = payments.create(body);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/payments?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = payments.list({ page: 1 });

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/payments?page=1`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = payments.retrieve(paymentId);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/payments/${paymentId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
