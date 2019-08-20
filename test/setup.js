const { mockFetch } = require('./mocks');

jest.mock('cross-fetch', () => mockFetch());
