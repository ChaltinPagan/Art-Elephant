const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
// var pgp = require('pg-promise')({});
// var connectionString = 'postgres://localhost/artelephant';
// var db = pgp(connectionString);
const db = require('./db');
const authHelpers = require('./helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (email, done) => {
  console.log("email:", email)
  db.one('SELECT * FROM users WHERE email=${email}', { email: email })
    .then((user) => {
      console.log("user:", user)
      if (!user) {
        return done(null, false);
      } 
      
      if (!authHelpers.comparePass(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => {
      return done(err);
    })
}))

module.exports = passport;
