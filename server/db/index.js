const pgp = require('pg-promise')();
const port = process.env.PORT || 5000;


const db = pgp({
  host: 'localhost',
  port: port,
  database: 'leetcode-study-app',
  user: 'jonathan',
});
