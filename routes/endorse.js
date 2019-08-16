const express = require('express'),
  router = express.Router(),
  Endorse = require('../models/endorsements');

router.get('/', function(req, res) {
  console.log('pop classes hit');

  Endorse.find(function(err, people) {
    if (err) {
      console.log('no endorsements found');
      res.sendStatus(400);
    } else {
      console.log('found endorsements');

      console.log(people);
      res.send(people);
    }
  }); //end endorsements find
}); //end getendorsements

router.post('/', function(req, res) {
  console.log('body', req.body);
  Endorse(req.body).save(function(err) {
    console.log(err);
    if (err) {
      return handleError(err);
    } else {
      res.sendStatus(201);
    }
  }); //end save
}); //end post

module.exports = router;
