// const pgp = require('pg-promise')({});
// const connectionString = 'postgres://localhost/artelephant';
// const db = pgp(connectionString);
const db = require('../auth/db');
const authHelpers = require('../auth/helpers');
const passport = require('../auth/local');

const getUsers = (req, res, next) => {
    db.any('SELECT * FROM users ORDER BY id ASC')
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
    db.any('SELECT * FROM users WHERE email=${email}', {email: email})
        .then(data => {
            console.log("data:", data);
            let compare = authHelpers.comparePass(req.body.password, data[0].password);
            passport.authenticate('local', (err, user, info) => {
                if (compare) {
                    res.status(200)
                        .json({
                            status: 'success',
                            user: data[0].email,
                            message: 'Logged in'
                        });
                } else if (!compare) {
                    res.status(204)
                        .json({
                            status: 'error',
                            user: data[0].email,
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
    console.log("get params:", req.params);
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

const updateUser = (req, res, next) => {
    db.any('UPDATE users SET first_name=${first_name}, last_name=${last_name}, email=${email} WHERE id=${id}', req.body)
        .then( data => {
            res.status(200)
                .json({
                    status: "success",
                    message: "Profile updated."
                });
        })
        .catch( err => {
            return next(err);
        });
};

const updatePassword = (req, res, next) => {
    return authHelpers.encryptNewPassword(req)
        .then( data => {
            res.status(200)
                .json({
                    status: "success",
                    message: data
                });
        })
        .catch( err => {
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



module.exports = {
    getUsers,
    loginUser,
    getSingleUser,
    updateUser,
    updatePassword,
    registerUser
};