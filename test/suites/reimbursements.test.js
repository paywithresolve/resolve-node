const fetch = require('cross-fetch');
const reimbursements = require('../../lib/api/reimbursements');

const API = require('../../lib/services/api');

describe('reimbursements API', () => {
  const reimbursementId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = reimbursements.list({ page: 2 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/reimbursements?page=2`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = reimbursements.retrieve(reimbursementId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/reimbursements/${reimbursementId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
