// #6
var mongoose = require('mongoose');
// #4
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  }
});

// #7
module.exports = {User};