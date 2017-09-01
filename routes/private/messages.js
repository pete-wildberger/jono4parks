const express = require('express'),
router = express.Router(),
path = require('path'),
Messages = require('../../models/messages');

// router.put('/', function (req, res) {
//   console.log('pop message hit');
//
//     Messages.find(function(err, messages) {
//       if (err) {
//         console.log('no messages found');
//         res.sendStatus(400);
//       } else {
//         console.log('found messages');
//
//       console.log(messages);
//       res.send(messages);
//     }
//     }); //end endorsements find
//   }); //end getendorsements


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
