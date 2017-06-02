// #1 
const validator = require('validator');
const mongoose = require('mongoose');
// #6
const jwt = require('jsonwebtoken');
// #11
const _ = require('lodash');


// #2 
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  }, 
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// #10
UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// #4
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  // #5
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({
    access,
    token
  });

  // # 8 save() returns a Promise / grab the token from the promise
  return user.save().then(() => {
    return token;           // return the token, the variable defined above
  });   
};

// #3
var User = mongoose.model('User', UserSchema);

module.exports = {User};