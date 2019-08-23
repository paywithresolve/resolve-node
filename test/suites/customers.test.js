const fetch = require('cross-fetch');
const customers = require('../../lib/api/customers');

const API = require('../../lib/services/api');

describe('Customers API', () => {
  const customerId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = customers.list({ page: 2 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/customers?page=2`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = customers.retrieve(customerId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/customers/${customerId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
