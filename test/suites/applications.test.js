const fetch = require('cross-fetch');
const applications = require('../../lib/api/applications');

const Api = require('../../lib/services/api');

describe('Applications API', () => {
  const body = { business_address: 'xyz' };
  const appId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('create', () => {
    it('should call fetch with appropriate params', async () => {
      const response = applications.create(body);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/applications?`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('update', () => {
    it('should call fetch with appropriate params', async () => {
      const response = applications.update(appId, body);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/applications/${appId}?`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: expect.any(Object),
      });
    });
  });

  describe('submit', () => {
    it('should call fetch with appropriate params', async () => {
      const response = applications.submit(appId);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/applications/${appId}/submit?`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: expect.any(Object),
      });
    });
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = applications.list({ page: 1 });

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/applications?page=1`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = applications.retrieve(appId);

      expect(fetch).toHaveBeenCalledWith(`${Api._apiUrl}/applications/${appId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
