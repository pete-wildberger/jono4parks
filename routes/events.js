const express = require('express'),
router = express.Router(),
path = require('path'),
Events = require('../models/events');

router.get('/', function (req, res) {
  console.log('pop classes hit');

    Events.find(function(err, people) {
      if (err) {
        console.log('no events found');
        res.sendStatus(400);
      } else {
        console.log('found events');

      console.log(people);
      res.send(people);
    }
    }); //end endorsements find
  }); //end getendorsements



module.exports = router;
