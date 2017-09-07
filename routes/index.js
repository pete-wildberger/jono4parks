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

router.get('/', function (req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
