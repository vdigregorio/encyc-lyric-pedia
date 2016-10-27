require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home');
const lyricsRoute = require('./routes/lyrics');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', homeRoute);
app.use('/lyrics', lyricsRoute);

app.listen(port, () => console.log('Server is listening on port ', port));
