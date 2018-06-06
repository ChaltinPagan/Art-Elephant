const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
const db = require('./db');
const authHelpers = require('./helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (email, done) => {
  console.log("email:", email)
  db.one('SELECT * FROM users WHERE email=${email}', { email: email })
    .then((user) => {
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
