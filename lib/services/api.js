const fetch = require('cross-fetch');
const qs = require('qs');

const { toBase64 } = require('../util/crypto');
const { errorTypes } = require('../util/error');

class Api {
  static setApiUrl(apiUrl) {
    this._apiUrl = apiUrl;
  }

  static setCredentials(user = this._credentials.user, password = this._credentials.password) {
    this._credentials.user = user;
    this._credentials.password = password;
  }

  static get(url, queryOptions) {
    return this._requestPromise({ url, queryOptions, method: 'GET' });
  }

  static post(url, body = {}, queryOptions) {
    return this._requestPromise({ url, queryOptions, method: 'POST', data: body });
  }

  static put(url, body = {}, queryOptions) {
    return this._requestPromise({ url, queryOptions, method: 'PUT', data: body });
  }

  static delete(url, body = {}, queryOptions) {
    return this._requestPromise({ url, queryOptions, method: 'DELETE', data: body });
  }

  static _buildUri(url, options = {}) {
    const queryString = qs.stringify(options);
    return `${this._apiUrl}/${url}?${queryString}`.replace(/(?<!https?:)\/+/g, '/');
  }

  static _handleNetworkError(error) {
    if (error.code === 'ECONNREFUSED') {
      throw ({
        message: error.message,
        code: error.code,
        type: errorTypes.CONNECTION_ERROR,
      });
    }
    throw error;
  }

  static _requestPromise({ url, data, method, queryOptions }) {
    const options = {
      method,
      headers: {
        ...this._headers,
        'Authorization': `Basic ${toBase64(`${this._credentials.user}:${this._credentials.password}`)}`,
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    return fetch(this._buildUri(url, queryOptions), {
      ...options
    }).then((response) =>
      response
        .text()
        .then(JSON.parse)
        .catch(body => body)
        .then((json) => {
          const { error } = json;

          if (error) {
            throw error;
          }

          return json;
        }),
    ).catch(this._handleNetworkError);
  }
}

Api._credentials = {
  user: null,
  password: null,
};

Api._headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Pragma': 'no-cache',
};

Api._apiUrl = 'http://localhost:3000/api/v2';

module.exports = Api;
