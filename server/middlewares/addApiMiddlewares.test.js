/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../index.js');

describe('Test the /api/now endpoint', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/now');
    expect(response.statusCode).toBe(200);
  });
});
