/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../index.js');
const { serverConfig } = require('../utils/constants.js');

jest.mock('../modules/dbManager', () => ({ getUserProfilebyUsername: jest.fn(async () => ({ id: 2 })) }));
const dbManager = require('../modules/dbManager');

// Fake timer to run async tests.
jest.useFakeTimers();

describe('Test the /api/now endpoint', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/now');
    expect(response.statusCode).toBe(200);
    expect(response.body.appName).toBe(serverConfig.appName);
  });
});

describe('Test the /api/test/db endpoint', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/test/db');
    expect(response.body).toEqual({ id: 2 });
  });
});
