const fetch = require('cross-fetch');
const invoices = require('../../lib/api/invoices');

const API = require('../../lib/services/api');

describe('Invoices API', () => {
  const invoiceId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = invoices.list({ page: 2 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/invoices?page=2`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = invoices.retrieve(invoiceId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/invoices/${invoiceId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
