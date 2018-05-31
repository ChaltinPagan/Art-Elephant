const express = require('express');
const router = express.Router();
const db = require('../db/user-queries');

// router.get('/', function (req, res, next) {
//     res.send('Home');
// });

router.get('/', db.getUsers);
router.post('/new', db.registerUser);
router.post('/:email', db.getSingleUser);
router.post('/', db.loginUser);
router.put('/update-pw', db.updatePassword);
router.put('/update', db.updateUser);

module.exports = router;