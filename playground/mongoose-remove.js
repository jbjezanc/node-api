const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('../server/models/user');

// #1
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// #2
var todo = Todo.findOneAndRemove()
Todo.findByIdAndRemove('593011a3eb84c553a5615595').then((todo) => {
  console.log(todo);
});

// #3
// Todo.findOneAndRemove({_id: '593011a3eb84c553a5615595'}).then((todo) => {
//   console.log(todo);
// });