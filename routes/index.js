const express = require('express'),
router = express.Router(),
path = require('path'),
endorse = require('./endorse.js'),
messages = require('./messages.js');

router.use('/endorse', endorse);
router.use('/messages', messages);

router.get('/', function (req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
