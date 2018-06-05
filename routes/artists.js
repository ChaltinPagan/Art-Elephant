const express = require('express');
const router = express.Router();
const db = require('../db/artist-queries');

router.get('/', db.getArtists);
router.get('/:id', db.getSingleArtist);
router.post('/new', db.addArtistProfile);
router.post('/:user_id', db.getArtistByUserID);
router.put('/:id', db.updateArtist);

module.exports = router;