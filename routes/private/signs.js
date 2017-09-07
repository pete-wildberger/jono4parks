const express = require('express'),
  router = express.Router(),
  path = require('path'),
  Signs = require('../../models/signs');

router.get('/', function(req, res) {
  console.log('pop classes hit');

  Signs.find(function(err, people) {
    if (err) {
      console.log('no signs found');
      res.sendStatus(400);
    } else {
      console.log('found signs');

      console.log(people);
      res.send(people);
    }
  }); //end signs find
}); //end getsigns

router.delete('/:id', function(req, res) {
  console.log('delete hit', req.params.id);
  Signs.remove({
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
