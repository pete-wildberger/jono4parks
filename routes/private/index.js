var express = require('express');
var router  = express.Router();
var endorse = require('./endorse');
var messages = require('./messages');
var events = require('./events');

router.use('/endorse', endorse);
router.use('/messages', messages);
router.use('/events', events);

router.get('/', function (req, res) {
  res.redirect('/'); // they made it!
});

module.exports = router;
