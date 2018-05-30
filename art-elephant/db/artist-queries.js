const db = require('../auth/db');
const authHelpers = require('../auth/helpers');

const getArtists = (req, res, next) => {
    // Exclude users.password from query
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address, artists.images,
        users.first_name, users.last_name, users.email 
        FROM artists 
        LEFT JOIN users ON artists.user_id=users.id
        ORDER BY id ASC`)
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
    // Exclude users.password from query
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address, artists.images,
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
    db.any(`SELECT artists.id, artists.user_id, artists.medium, artists.statement, artists.address, artists.images,
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
};

const addArtistProfile = (req, res, next) => {
    let bool;
    return authHelpers.createArtist(req)
        .then( res => {
            console.log("new res:", res);
            bool = res;
            if (bool) {
                res.status(200)
                    .json({
                        status: 'success',
                        message: 'Artist profile added.'
                    });
            }
        })
        .catch( err => {
            console.log("err:", err);
            res.status(500)
                .json({
                    status: 'error',
                    error: 'Error inserting artist.'
                });
        });
};

const updateArtist = (req, res, next) => {
    console.log("update artist:", req.body)
    db.any('UPDATE artists SET medium=${medium}, statement=${statement}, address=${address}, images=${images} WHERE id=${id}', req.body)
        .then( data => {
            res.status(200)
                .json({
                    status: "success",
                    message: "Artist Profile updated."
                });
        })
        .catch( err => {
            return next(err);
        });
}

const getArtistImages = (req, res, next) => {
    console.log("image user:", req.params)
    db.any('SELECT * FROM images WHERE user_id=${user_id}', req.params)
        .then( data => {
            res.status(200)
                .send({
                    images: data
                });
        })
        .catch( err => {
            res.status(500)
                .send({
                    message: "No images for this user."
                });
        });
};

module.exports = {
    getArtists,
    getSingleArtist,
    getArtistByUserID,
    addArtistProfile,
    updateArtist,
    getArtistImages
}