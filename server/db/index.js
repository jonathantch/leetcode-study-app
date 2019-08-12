const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'lsa',
  user: 'jonathan',
});

module.exports = db;