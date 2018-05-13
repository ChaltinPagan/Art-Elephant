const express = require('express');
const router = express.Router();
const db = require('../db/queries');

// router.get('/', function (req, res, next) {
//     res.send('Home');
// });

router.get('/', db.getUsers);
router.post('/', db.loginUser);
router.post('/new', db.registerUser);

module.exports = router;