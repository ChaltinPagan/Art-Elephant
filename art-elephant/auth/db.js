const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/elephant';
const db = pgp(connectionString);

module.exports = db;