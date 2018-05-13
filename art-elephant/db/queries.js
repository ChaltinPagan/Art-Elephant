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

const getSingleArtist = (req, res, next) => {
    console.log("sigle:", req.params)
    db.any('SELECT * FROM artists LEFT JOIN users ON artists.user_id=users.id WHERE artists.id=${id}', req.params)
        .then( (data) => {
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
        .catch( (err) => {
            return next(err);
        });
};

module.exports = {
    getUsers,
    getArtists, 
    getSingleArtist
};