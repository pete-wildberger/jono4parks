// requires etc
const express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
port = process.env.PORT || 4000,
session = require('express-session'),
passport = require('./auth/passport'),
configs = require('./config/auth'),
index = require('./routes/index'),
auth = require('./routes/auth'),
isLoggedIn = require('./utils/auth'),
private = require('./routes/private/index'),
database = require('./utils/database');

database();
// uses
app.use(express.static ('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));
app.use(passport.initialize()); // passport
app.use(passport.session());

// routes
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);

app.listen(port, function(){
  console.log('server up on 4000');
});

// app.get('/', function(req, res){
//   console.log('base url hit');
// res.sendFile(path.resolve('public/views/index.html'));
// });
