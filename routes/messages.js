const express = require('express'),
router = express.Router(),
path = require('path'),
Messages = require('../models/messages');

router.get('/', function (req, res) {
  console.log('pop message hit');

    Messages.find(function(err, messages) {
      if (err) {
        console.log('no messages found');
        res.sendStatus(400);
      } else {
        console.log('found messages');

      console.log(messages);
      res.send(messages);
    }
    }); //end endorsements find
  }); //end getendorsements

router.post('/', function(req, res){
  console.log('body', req.body);
  Messages(req.body).save(function(err) {
    console.log(err);
    if (err){
       return handleError(err);
     } else {
       res.sendStatus(201);
     }
  }); //end save
});//end post

module.exports = router;
