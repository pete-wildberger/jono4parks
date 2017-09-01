var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  message: String

});

module.exports = mongoose.model('Message', messageSchema);
