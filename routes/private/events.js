const express = require('express'),
router = express.Router(),
path = require('path'),
Events = require('../../models/events');

router.post('/', function(req, res){
  console.log('body', req.body);
  Events(req.body).save(function(err) {
    console.log(err);
    if (err){
       return handleError(err);
     } else {
       res.sendStatus(201);
     }
  }); //end save
});//end post

router.put('/:id', function(req, res) {
  console.log('put hit', req.params.id);
  Events.findOneAndUpdate({
    _id: req.params.id
  }, req.body).then(function(err) {
    if (!err) {
      res.send('something worked');
    } else {
      res.send('error');
    } //end else
  });
});

router.delete('/:id', function(req, res) {
  console.log('delete hit', req.params.id);
  Events.remove({
    _id: req.params.id
  }).then(function(err) {
    if (!err) {
      res.send('something worked');
    } else {
      res.send('error');
    } //end else
  }); //end then
}); //end delete



module.exports = router;
