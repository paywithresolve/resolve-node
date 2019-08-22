const fetch = require('cross-fetch');
const payouts = require('../../lib/api/payouts');

const API = require('../../lib/services/api');

describe('Payouts API', () => {
  const payoutId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = payouts.list({ page: 2 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/payouts?page=2`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = payouts.retrieve(payoutId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/payouts/${payoutId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
