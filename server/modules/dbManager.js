const mysql = require('mysql');
const { dbConfig } = require('../utils/constants');

const dbConnection = mysql.createConnection(dbConfig);

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
