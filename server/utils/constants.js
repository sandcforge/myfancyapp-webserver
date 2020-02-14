const appName = 'myfancyapp';
const port = parseInt(process.env.PORT || '8080', 10);
const env = process.env.NODE_ENV;
module.exports.serverConfig = {
  appName,
  port,
  env,
  isTestEnv: env === 'test',
  isProdEnv: env === 'production',
};
