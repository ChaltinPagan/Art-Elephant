const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const http = require('http');
const port = 8000;

const users = require('./routes/users');
const artists = require('./routes/artists');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/users', users);
app.use('/artists', artists);

// Expects to recieve the error, so err is first arg in function
// app.get('*', (err, req, res) => {
//     if (!err) {
//         res.status(404).send('Error!');
//     }

//     res.status(500).send(`Error! Description: ${err}`);
// });

app.get('/', function (req, res, next) {
    res.send('Home');
});

http.createServer(app).listen(port, () => {
    console.log(`App listening on port ${port}`);
});