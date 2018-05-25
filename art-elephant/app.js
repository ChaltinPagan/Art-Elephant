const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
// const http = require('http');
const app = express();
const port = 8000;

const users = require('./routes/users');
const artists = require('./routes/artists');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
//   }));

app.use('/users', users);
app.use('/artists', artists);

app.get('/', function (req, res, next) {
    // res.send(
    //     `Home
        
    //     <br/>GET users: /users
    //     <br/>GET artists: /artists
    //     <br/>GET single artist: /artists/:id`
    // );
    res.sendFile(path.join(__dirname, 'home.html'));
});

//Expects to recieve the error, so err is first arg in function
// app.get('*', (err, req, res) => {
//     if (!err) {
//         res.status(404).send('Error!');
//     }

//     res.status(500).send(`Error! Description: ${err}`);
// });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});