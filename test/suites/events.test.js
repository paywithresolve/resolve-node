const fetch = require('cross-fetch');
const events = require('../../lib/api/events');

const API = require('../../lib/services/api');

describe('Events API', () => {
  const eventId = 'sdfgsdg';

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('list', () => {
    it('should call fetch with appropriate params', async () => {
      const response = events.list({ page: 2 });

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/events?page=2`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });

  describe('retrieve', () => {
    it('should call fetch with appropriate params', async () => {
      const response = events.retrieve(eventId);

      expect(fetch).toHaveBeenCalledWith(`${API._apiUrl}/events/${eventId}?`, {
        method: 'GET',
        headers: expect.any(Object),
      });
    });
  });
});
