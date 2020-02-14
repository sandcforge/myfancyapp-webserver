/* eslint consistent-return:0 */

const express = require('express');
const { resolve } = require('path');
const logger = require('./utils/logger');

const argv = require('./utils/argv');
const port = require('./utils/port');
const setup = require('./middlewares/frontendMiddleware');
const addApiMiddlewares = require('./middlewares/addApiMiddlewares');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
addApiMiddlewares(app);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app if prod/dev environments.
const isTest = process.env.NODE_ENV === 'test';
if (!isTest) {
  app.listen(port, host, (err) => {
    if (err) {
      return logger.error(err.message);
    }
    logger.appStarted(port, prettyHost);
  });
}

// Export 'app' for testing.
module.exports = app;
