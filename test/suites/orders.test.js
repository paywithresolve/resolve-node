const fetch = require('cross-fetch');
const orders = require('../../lib/api/orders');

const API = require('../../lib/services/api');

describe('Orders API', () => {
  const body = { total_amount: 38 };
  const orderId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('create', () => {
    it('should call fetch with appropriate params', async () => {
      const response = orders.create(body);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/orders?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('update', () => {
    it('should call fetch with appropriate params', async () => {
      const response = orders.update(orderId, body);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/orders/${orderId}?`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = orders.list({ page: 1 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/orders?page=1`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = orders.retrieve(orderId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/orders/${orderId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('delete', () => {
    it('should call fetch with appropriate params', async () => {
      const response = orders.delete(orderId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/orders/${orderId}?`, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: expect.any(Object),
      });
    });
  });
});
