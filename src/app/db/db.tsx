const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sulochana123',
  database: 'kodfec',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

module.exports = {
  connect,
};
