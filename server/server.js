// #1 Load in the mongoose:
var mongoose = require('mongoose');

// #3 Use built-in JS promise library:
mongoose.Promise = global.Promise;
// #2 Connect to the db:
mongoose.connect('mongodb://localhost:27017/TodoApp');

// #4 Create a mongoose model:
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    // #1 value must exist
    required: true,
    // #2 minimum length of the string
    minlength: 1,
    // #3 trim whitespaces
    trim: true
  },
  completed: {
    type: Boolean,
    // #5a smart default
    default: false
  },
  completedAt: {
    type: Number,
    // #5b
    default: null
  }
});

// Challenge - model:
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  // password: {
  //   type: String,
  //   default: ''
  // }
});

// Challenge - object 1:
var user = new User({
  email: 'joe@example.com'
});

// Challenge - object 2:
// var user = new User({

// });

// Challenge - save the user
user.save().then((doc) => {
  console.log(`User saved: ${doc}`);
}, (err) => {
  console.log('Unable to save user', err);
}); 

// #5 Create new Todo object
var newTodo = new Todo({
  text: 'Cook a meal'
});

// #6 Save it to the mongodb database
// newTodo.save().then((doc) => {
//   console.log(`Saved todo: ${doc}`);
// }, (err) => {
//   console.log('Unable to save todo.');
// });

// Challenge result:
var myTodo = new Todo({
  //#2b will not pass - min length is 1.
  // text: ''
  // #3b will not pass - will remove emtpy spaces but leaving the empty string:
  // text: '       '
  // #4 But if we provide a value with at least one char:
  text: "     Edit this video     "
  // completed: true,
  // completedAt: new Date().getTime()
});

// myTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save todo.', err);
// });