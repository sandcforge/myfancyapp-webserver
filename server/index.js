/* eslint consistent-return:0 */

const express = require('express');
const { resolve } = require('path');
const logger = require('./utils/logger');

const { serverConfig } = require('./utils/constants');
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

// Start your app if prod/dev environments.
if (!serverConfig.isTestEnv) {
  app.listen(serverConfig.port, (err) => {
    if (err) {
      return logger.error(err.message);
    }
    logger.appStarted(serverConfig.port);
  });
}

// Export 'app' for testing.
module.exports = app;
