const pgp = require('pg-promise')({});
const connectionString = process.env.DATABASE_URLgit;
const db = pgp(connectionString);

module.exports = db;