const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/artelephant';
const db = pgp(connectionString);

const getUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
        .then( (data) => {
            res.status(200)
                .send({
                    users: data
                });
        })
        .catch( (err) => {
            return next(err);
        });
};

const getArtists = (req, res, next) => {
    db.any('SELECT * FROM artists LEFT JOIN users ON artists.user_id=users.id')
        .then( (data) => {
            res.status(200)
                .send({
                    artists: data
                });
        })
        .catch( (err) => {
            return next(err);
        });
};

module.exports = {
    getUsers,
    getArtists
};