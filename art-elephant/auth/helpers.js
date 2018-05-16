const bcrypt = require('bcryptjs');
// var pgp = require('pg-promise')({});
// var connectionString = 'postgres://localhost/artelephant';
// var db = pgp(connectionString);
const db = require('./db');

function comparePass(userPassword, databasePassword) {
  console.log("comparePass:"+ userPassword);
  console.log("databasepw:", databasePassword);
  let compare = bcrypt.compareSync(userPassword, databasePassword);
  console.log("compare:"+ compare);
  return compare;
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(`INSERT INTO users (first_name, last_name, email, password) 
    VALUES ` + '(${first_name}, ${last_name}, ${email}, ${password})', 
    {   first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash});
}

module.exports = {
  comparePass,
  createUser
};