require('dotenv').config({
  path: './.env'
});
// requires etc
const express = require('express'),
  app = express(),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 4000,
  session = require('express-session'),
  passport = require('./auth/passport'),
  index = require('./routes/index'),
  auth = require('./routes/auth'),
  isLoggedIn = require('./utils/auth'),
  private = require('./routes/private/index'),
  database = require('./utils/database');

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
database();
// uses
app.use(requireHTTPS);
app.use(helmet());
app.use(compression());
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
