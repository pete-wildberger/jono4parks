var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  eventName: String,
  date: Date,
  time: String,
  location: String,
  url: String,
  description: String

});

module.exports = mongoose.model('Event', eventSchema);
