const express = require('express');
const router = express.Router();
const db = require('../db/queries');

// router.get('/', function (req, res, next) {
//     res.send('Home');
// });

router.get('/', db.getUsers);

module.exports = router;