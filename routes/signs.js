const express = require('express'),
router = express.Router(),
path = require('path'),
Signs = require('../models/signs');


router.post('/', function(req, res){
  console.log('body', req.body);
Signs(req.body).save(function(err) {
    console.log(err);
    if (err){
       return handleError(err);
     } else {
       res.sendStatus(201);
     }
  }); //end save
});//end post

module.exports = router;
