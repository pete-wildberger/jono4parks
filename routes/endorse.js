const express = require('express'),
router = express.Router(),
path = require('path'),
Endorse = require('../models/endorsements');

router.get('/', function (req, res) {
  console.log('pop classes hit');

    let foundEndorsements = [];

    Endorse.find(function(err, people) {
      if (err) {
        console.log('no classes found');
        res.sendStatus(400);
      } else {
        console.log('found classes');
        foundClasses.push(people);
      } //end else
      console.log(foundEndorsements);
      res.send(foundEndorsements);
    }); //end endorsements find
  }); //end getendorsements

router.post('/', function(req, res){
  console.log('body', req.body);
  Endorse(req.body).save(function(err) {
    console.log(err);
    if (err){
       return handleError(err);
     } else {
       res.sendStatus(201);
     }
  }); //end save
});//end post

module.exports = router;
