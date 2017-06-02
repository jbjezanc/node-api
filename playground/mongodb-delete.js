const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

// deleteMany - delete every single todo inside Todos with
// a property text value of 'Eat lunch'
// db.collection('Todos')
// .deleteMany({text: 'Eat lunch'})
// .then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos')
// .deleteOne({text: 'Eat lunch'})
// .then((result) => {
//   console.log(result);
// });

// findOneAndDelete - finds, deletes and returns value
//  db.collection('Todos')
//   .findOneAndDelete({completed: false})
//   .then((result) => {
//     console.log(result);
//   });

// Challenge result #1
db.collection('Users')
  .deleteMany({name: 'Josip'})
  .then((result) => {
    console.log(result);
  });
// Challenge result #2
db.collection('Users')
  .findOneAndDelete({_id: new ObjectID('592c1abd0364350ff06a42db')})
  .then((result) => {
    console.log(result);
  });

  // db.close();
});