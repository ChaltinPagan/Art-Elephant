const express = require('express');
const router = express.Router();
const db = require('../db/artist-queries');

// router.get('/', function (req, res, next) {
//     res.send('Home');
// });

router.get('/', db.getArtists);
router.get('/:id', db.getSingleArtist);

module.exports = router;