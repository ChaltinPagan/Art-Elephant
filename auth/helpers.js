const bcrypt = require('bcryptjs');
const db = require('./db');

// Compare password entered upon login to password stored in database.
const comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
};

const createUser = (req) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  // Store all emails as lowercase. Users table has unique constraint on email. 
  // Constraint is case-sensitive.
  let email = req.body.email.toLowerCase();
  return db.any(`INSERT INTO users (first_name, last_name, email, password) 
    VALUES ` + '(${first_name}, ${last_name}, ${email}, ${password})',
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: email,
      password: hash
    })
    .then( user => {
      return req.body.email;
    });
};

// When user updates password, salt and hash new password and store in database.
const encryptNewPassword = (req) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.any('UPDATE users SET password=${password} WHERE id=${id}', {password: hash, id: req.body.id})
    .then( data => {
      return "Password updated.";
    });
};

const createArtist = (req) => {
  return db.any('INSERT INTO artists (user_id, medium, statement, address, images) VALUES (${user_id}, ${medium}, ${statement}, ${address}, ${images})', req.body)
  .then( data => {
      return "Artist profile added.";
  });
};

module.exports = {
  comparePass,
  createUser, 
  encryptNewPassword,
  createArtist
};