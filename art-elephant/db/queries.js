// const pgp = require('pg-promise')({});
// const connectionString = 'postgres://localhost/artelephant';
// const db = pgp(connectionString);
const db = require('../auth/db');
const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');

const getUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
        .then((data) => {
            res.status(200)
                .send({
                    users: data
                });
        })
        .catch((err) => {
            return next(err);
        });
};

const loginUser = (req, res, next) => {
    let email = req.body.email.toLowerCase();
    db.any('SELECT password FROM users WHERE email=${email}', {email: email})
        .then(data => {
            console.log("data:", data);
            let compare = authHelpers.comparePass(req.body.password, data[0].password);
            passport.authenticate('local', (err, user, info) => {
                if (compare) {
                    res.status(200)
                        .json({
                            status: 'success',
                            data: user,
                            message: 'Logged in'
                        });
                } else if (!compare) {
                    res.status(204)
                        .json({
                            status: 'error',
                            data: user,
                            message: 'Incorrect password'
                        });
                }
            })(req, res, next);
        })
        .catch((err) => {
            console.log("Err", err);
            res.status(500)
                .json({
                    status: 'error',
                    error: err
                });
        });
};

const getSingleUser = (req, res, next) => {
    db.any('SELECT id, first_name, last_name, email FROM users WHERE email=${email}', req.params)
        .then(data => {
            res.status(200)
            .send({
                single_user: data
            });
        })
        .catch((err) => {
            return next(err);
        });
};

const registerUser = (req, res, next) => {
    return authHelpers.createUser(req)
        .then(response => {
            console.log("response:", response);
            passport.authenticate('local', (err, user, info) => {
                if (response) {
                    res.status(200)
                        .json({
                            status: 'success',
                            data: response,
                            message: 'Registered one user'
                        });
                }
            })(req, res, next);
        })
        .catch((err) => {
            res.status(500)
                .json({
                    status: 'error',
                    error: 'Error inserting user. Email already taken.'
                });
        });
};

const getArtists = (req, res, next) => {
    // Exclude users.password from query
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address,
        users.first_name, users.last_name, users.email 
        FROM artists 
        LEFT JOIN users ON artists.user_id=users.id`)
        .then((data) => {
            res.status(200)
                .send({
                    artists: data
                });
        })
        .catch((err) => {
            return next(err);
        });
};

const getSingleArtist = (req, res, next) => {
    console.log("sigle:", req.params)
    // Exclude users.password from query
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address, 
        users.first_name, users.last_name, users.email 
        FROM artists 
        LEFT JOIN users ON artists.user_id=users.id `
        + 'WHERE artists.id=${id}', req.params)
        .then((data) => {
            if (data.length) {
                res.status(200)
                    .send({
                        single_artist: data
                    });
            } else {
                res.status(404)
                    .send({
                        message: "No artist with this ID"
                    });
            }
        })
        .catch((err) => {
            return next(err);
        });
};

module.exports = {
    getUsers,
    loginUser,
    getSingleUser,
    registerUser,
    getArtists,
    getSingleArtist
};