const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'test-database.cjn9z9zzyyxs.us-east-1.rds.amazonaws.com',
  user: 'myfancyapp',
  password: 'myfancyapp',
  database: 'myfancyapp',
  port: 3306,
});

const dbQuery = (sql) => new Promise((resolve, reject) => {
  dbConnection.query(sql, (err, results, fields) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

const getUserProfilebyUsername = async (username) => {
  const result = await dbQuery(`SELECT * FROM users WHERE username = '${username}';`);
  return result;
};

module.exports = {
  getUserProfilebyUsername,
};
