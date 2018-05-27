const db = require('../auth/db');

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

const getArtistByUserID = (req, res, next) => {
    console.log("params:", req.params);
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address, 
        users.first_name, users.last_name, users.email 
        FROM artists 
        LEFT JOIN users ON artists.user_id=users.id `
        + 'WHERE artists.user_id=${user_id}', req.params)
        .then((data) => {
            if (data.length) {
                res.status(200)
                    .send({
                        artist: data
                    });
            } else {
                res.status(404)
                    .send({
                        message: "No artist profile with this user_id."
                    });
            }
        })
        .catch((err) => {
            return next(err);
        });
}

module.exports = {
    getArtists,
    getSingleArtist,
    getArtistByUserID
}