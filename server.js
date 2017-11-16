require('dotenv').config({
  path: './.env'
});
// requires etc
const express = require('express'),
  app = express(),
  helmet = require('helmet'),
  path = require('path'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 4000,
  session = require('express-session'),
  passport = require('./auth/passport'),
  index = require('./routes/index'),
  auth = require('./routes/auth'),
  isLoggedIn = require('./utils/auth'),
  private = require('./routes/private/index'),
  database = require('./utils/database');

database();
// uses
app.use(helmet());
app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET,
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: { maxage: 60000, secure: false }
  })
);
app.use(passport.initialize()); // passport
app.use(passport.session());

// routes
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);

app.listen(port, function() {
  console.log('server up on 4000');
});
