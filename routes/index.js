const express = require('express'),
  router = express.Router(),
  path = require('path'),
  endorse = require('./endorse.js'),
  messages = require('./messages.js'),
  events = require('./events.js'),
  signs = require('./signs.js');

router.use('/endorse', endorse);
router.use('/messages', messages);
router.use('/events', events);
router.use('/signs', signs);

router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

router.get('/sierra', function(req, res) {
  res.sendFile(path.resolve('public/assets/pdf/j4pSierraClubQuestionnaire.pdf'));
});
router.get('/mydfl', function(req, res) {
  res.sendFile(path.resolve('public/assets/pdf/jonoquestionnaire.pdf'));
});

router.use(function(req, res) {
  res.sendFile('index.html', {
    root: 'public/views/'
  });
});

module.exports = router;
