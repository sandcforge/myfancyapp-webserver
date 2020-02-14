/* eslint-disable global-require */
const { serverConfig } = require('../utils/constants');

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  if (serverConfig.isProdEnv) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
