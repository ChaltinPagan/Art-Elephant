const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/artelephant';
const db = pgp(connectionString);

module.exports = {
    db
};