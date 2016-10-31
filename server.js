/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
const dotEnv = require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const lyricsRouter = require('./routes/lyrics');
const saveRoute = require('./routes/save');

const app = express();
const SECRET = 'chamberOfSecrets3000';

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/lyrics', lyricsRouter);
app.use('/save', saveRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`chamber of secrets at ${port}`);
});
