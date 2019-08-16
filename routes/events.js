const express = require('express'),
  router = express.Router(),
  path = require('path'),
  Events = require('../models/events');

router.get('/', function(req, res) {
  Events.find(function(err, people) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(people);
    }
  }); //end endorsements find
}); //end getendorsements

module.exports = router;
