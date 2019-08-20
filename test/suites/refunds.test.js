const fetch = require('cross-fetch');
const refunds = require('../../lib/api/refunds');

const Api = require('../../lib/services/api');

describe('Refunds API', () => {
  const body = { amount: 38 };
  const refundId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('create', () => {
    it('should call fetch with appropriate params', async () => {
      const response = refunds.create(body);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/refunds?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = refunds.list({ page: 1 });

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/refunds?page=1`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = refunds.retrieve(refundId);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/refunds/${refundId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
