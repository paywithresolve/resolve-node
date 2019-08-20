const { Response } = jest.requireActual('cross-fetch');

function mockFetch() {
  const mockBody = { data: [1, 2, 3], success: true };
  return jest.fn(() => Promise.resolve(new Response(JSON.stringify(mockBody), { status: 200 })));
}

module.exports = { mockFetch };
