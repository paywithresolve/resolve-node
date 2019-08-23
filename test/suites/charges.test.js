const fetch = require('cross-fetch');
const charges = require('../../lib/api/charges');

const API = require('../../lib/services/api');

describe('Charges API', () => {
  const body = { amount: 100 };
  const chargeId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('create', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.create(body);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('update', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.update(chargeId, body);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges/${chargeId}?`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('capture', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.capture(chargeId, body);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges/${chargeId}/capture?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.list({ page: 3 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges?page=3`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.retrieve(chargeId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges/${chargeId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('cancel', () => {
    it('should call fetch with appropriate params', async () => {
      const response = charges.cancel(chargeId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/charges/${chargeId}?`, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: expect.any(Object),
      });
    });
  });
});
