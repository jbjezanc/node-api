// #1 Load in the mongoose:
var mongoose = require('mongoose');

// #3 Use built-in JS promise library:
mongoose.Promise = global.Promise;
// #2 Connect to the db:
mongoose.connect('mongodb://localhost:27017/TodoApp');

// #4 Create a mongoose model:
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
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
  text: 'Take a nap',
  completed: true,
  completedAt: new Date().getTime()
});

myTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save todo.', err);
});