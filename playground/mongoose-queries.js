// #8a
const {ObjectId} = require('mongodb');

// #1
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// # Challenge:
const {User} = require('../server/models/user');

var id = '592fb2d6eb84c553a5613d8d';

User.findById(id).then(user => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
// }).catch(e => console.log(e)); / or
}, e => {
  console.log(e);
});

// var id = '592fa60198e7ab03cd7390cf';
// var id = '692fa60198e7ab03cd7390cf'; // #5 increment the first num of the id.
// var id = '592fa60198e7ab03cd7390cf111';    // #7b invalid format for the id

// #8b
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id   // #2 converts string id to ObjectId
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// #3
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// #4
// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch(e => console.log(e)); // #7a
