const bcrypt = require('bcryptjs');
// var pgp = require('pg-promise')({});
// var connectionString = 'postgres://localhost/artelephant';
// var db = pgp(connectionString);
const db = require('./db');

const comparePass = (userPassword, databasePassword) => {
  console.log("comparePass:" + userPassword);
  console.log("databasepw:", databasePassword);
  let compare = bcrypt.compareSync(userPassword, databasePassword);
  console.log("compare:" + compare);
  return compare;
};

const createUser = (req) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  let email = req.body.email.toLowerCase();
  console.log("email:", email);
  return db.any(`INSERT INTO users (first_name, last_name, email, password) 
    VALUES ` + '(${first_name}, ${last_name}, ${email}, ${password})',
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: email,
      password: hash
    })
    .then( user => {
      console.log('user:', user);
      return req.body.email;
    });
};

const encryptNewPassword = (req) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.any('UPDATE users SET password=${password} WHERE id=${id}', {password: hash, id: req.body.id})
    .then( data => {
      return "Password updated.";
    });
};

module.exports = {
  comparePass,
  createUser, 
  encryptNewPassword
};