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

module.exports.dbConfig = {
  host: 'test-database.cjn9z9zzyyxs.us-east-1.rds.amazonaws.com',
  user: 'myfancyapp',
  password: 'myfancyapp',
  database: 'myfancyapp',
  port: 3306,
};
