const passport = require('passport');
var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/artelephant';
var db = pgp(connectionString);

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one('SELECT email, password FROM users WHERE email=$1', [email])
      .then((user) => { done(null, user); })
      .catch((err) => { done(err,null); });
  });

};
