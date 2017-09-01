const express = require('express'),
router = express.Router(),
path = require('path'),
Endorse = require('../../models/endorsements');

router.put('/:id', function(req, res) {
  console.log('put hit', req.params.id);
  Endorse.findOneAndUpdate({
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
  Endorse.remove({
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
