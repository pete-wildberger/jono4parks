var mongoose = require('mongoose');

var endorsementSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  occupation: String,

});

module.exports = mongoose.model('Endorser', endorsementSchema);
