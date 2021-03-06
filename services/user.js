
var User = require('../models/user');

var UserService = {
  findUserById: function(id, callback) {
    User.findById(id, function(err, user) {
      if (err) {
        console.log(err);
        return callback(err, null);
      }

      return callback(null, user);
    });
  },

  findUserByGoogleId: function(id, callback) {
    User.findOne({
      googleId: id
    }, function(err, user) {

      if (err) {
        return callback(err, null);
      }

      return callback(null, user);
    });
  },

  createGoogleUser: function(id, token, name, email, callback) {
    var user = new User();

    user.googleId = id;
    user.googleToken = token;
    user.googleName = name;
    user.googleEmail = email;

    user.save(function(err) {
      if (err) {
        return callback(err, null);
      }

      return callback(null, user);
    });
  },
  findUserByEmail: function(email, callback) {
    console.log(email);
    User.findOne({
        googleEmail: email
      },
      function(err, user) {
        if (user === null || err) {
          console.log(user, err);
          return callback(user, err);
        }
        console.log('callback', user);
        return callback(null, user);
      }
    );
  }
};

module.exports = UserService;
