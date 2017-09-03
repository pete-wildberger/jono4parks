const express = require('express'),
router = express.Router(),
path = require('path'),
Messages = require('../../models/messages');

router.delete('/:id', function(req, res) {
  console.log('delete hit', req.params.id);
  Messages.remove({
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
