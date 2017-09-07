
var mongoose = require('mongoose');

var signsSchema = mongoose.Schema({
  firstSign: String,
  lastSign: String,
  address: String,
  signPhone: String
});

module.exports = mongoose.model('Signs', signsSchema);
