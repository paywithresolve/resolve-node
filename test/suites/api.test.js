const fetch = require('cross-fetch');

const API = require('../../lib/services/api');
const { errorTypes } = require('../../lib/util/error');

describe('API service', () => {

  const HOST = 'http://localhost:5000';

  describe('setCredentials', () => {
    it('should set credentials', () => {
      API.setCredentials('John Doe', 'qwerty');

      expect(API._credentials.user).toBe('John Doe');
      expect(API._credentials.password).toBe('qwerty');
    });
  });

  describe('setApiUrl', () => {
    it('should set API url', () => {
      API.setApiUrl(HOST);

      expect(API._apiUrl).toBe(HOST);
    });
  });

  describe('setApiVersion', () => {
    it('should set API version header', () => {
      const version = '2019-07-01';
      API.setApiVersion(version);

      expect(API._headers['RESOLVE-API-VERSION']).toBe(version);
    });
  });

  describe('_getBasicAuthHeader', () => {
    it('should generate correct Authorization: Basic header', () => {
      const header = API._getBasicAuthHeader(API._credentials);

      expect(header).toBe('Basic Sm9obiBEb2U6cXdlcnR5');
    });
  });

  describe('_buildUrl', () => {
    it('should compose correct URL from host and path', () => {
      const path = 'checkout/data';

      const url = API._buildUri(path);

      expect(url).toBe(`${HOST}/${path}?`);
    });

    it('should compose correct URL from host, path and options', () => {
      const path = 'checkout/data';
      const options = { page: 1, limit: 1, search: 'swedf' };

      const url = API._buildUri(path, options);

      expect(url).toBe(`${HOST}/${path}?page=1&limit=1&search=swedf`);
    });

    it('should replace two or more slashes with one except ones following the [http:|https:] protocol', () => {
      const path = '//checkout//data';
      const options = { page: 1, limit: 1, search: 'swedf' };

      const url = API._buildUri(path, options);

      expect(url).toBe(`${HOST}/checkout/data?page=1&limit=1&search=swedf`);
    });
  });

  describe('_requestPromise', () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    const options = {
      url: '/checkout/data',
      data: { a: 1 },
      method: 'POST',
      queryOptions: { page: 2 },
    };

    it('should call fetch with passed options', async () => {
      const response = await API._requestPromise(options);

      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(
        `${HOST}${options.url}?page=2`,
        {
          body: JSON.stringify(options.data),
          method: options.method,
          headers: expect.any(Object),
        }
      );
    });

    it('should return JSON response', async () => {

      const response = await API._requestPromise(options);

      expect(response).toMatchObject({ data: [1, 2, 3], success: true });
    });

    it('should handle CONNECTION_REFUSED errors', async () => {

      const error = {
        code: 'ECONNREFUSED',
        errno: 'ECONNREFUSED',
        type: 'system',
        message: 'Connection refused'
      };

      fetch.mockImplementationOnce(() => {
        return Promise.reject(error);
      });

      const response = await API._requestPromise(options);

      expect(response).toMatchObject({
        code: error.code,
        message: error.message,
        type: errorTypes.CONNECTION_ERROR,
      })
    });

    it('should unwrap error object', async () => {
      const { Response } = jest.requireActual('cross-fetch');

      const error = {
        error: {
          code: 'INVALID_PARAM',
          type: 'validation_error',
          message: 'Validation error',
          details: [{
            path: 'x',
            message: '`x` is required',
          }]
        }
      };

      fetch.mockImplementationOnce(() => Promise.resolve(new Response(JSON.stringify(error))));

      const response = await API._requestPromise(options);

      expect(response).toMatchObject({
        ...error.error,
      })
    });
  });

  describe('API methods', () => {
    const url = '/applications/data';
    const options = { page: 1, limit: 1 };
    const data = { a: 1 };

    beforeEach(() => {
      fetch.mockClear();
    });

    describe('GET', () => {
      it('should call fetch with appropriate params', async () => {
        const response = await API.get(url, options);

        expect(fetch).toHaveBeenCalledWith(
          `${HOST}${url}?page=1&limit=1`,
          {
            method: 'GET',
            headers: expect.any(Object),
          }
        );
      });
    });

    describe('POST', () => {
      it('should call fetch with appropriate params', async () => {
        const response = await API.post(url, data);

        expect(fetch).toHaveBeenCalledWith(
          `${HOST}${url}?`,
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: expect.any(Object),
          }
        );
      });
    });

    describe('PUT', () => {
      it('should call fetch with appropriate params', async () => {
        const response = await API.put(url, data);

        expect(fetch).toHaveBeenCalledWith(
          `${HOST}${url}?`,
          {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: expect.any(Object),
          }
        );
      });
    });

    describe('DELETE', () => {
      it('should call fetch with appropriate params', async () => {
        const response = await API.delete(url, data);

        expect(fetch).toHaveBeenCalledWith(
          `${HOST}${url}?`,
          {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: expect.any(Object),
          }
        )
      });
    });
  });
});
