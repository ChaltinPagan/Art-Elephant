const express = require('express');
const router = express.Router();
const db = require('../db/artist-queries');

// router.get('/', function (req, res, next) {
//     res.send('Home');
// });

router.get('/', db.getArtists);
router.get('/:id', db.getSingleArtist);
router.get('/images/:user_id', db.getArtistImages);
router.post('/new', db.addArtistProfile);
router.post('/:user_id', db.getArtistByUserID);
router.put('/:user_id', db.updateArtist);

module.exports = router;