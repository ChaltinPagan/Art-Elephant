const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const users = require('./routes/users');
const artists = require('./routes/artists');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/users', users);
app.use('/artists', artists);

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});