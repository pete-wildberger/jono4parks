const express = require('express'),
router = express.Router(),
path = require('path');

router.get('/', function (req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router;
