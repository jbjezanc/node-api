const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('592c3c2aba42cac5804a5409') // filter
  }, {
    $set: {                                       // update operator
      completed: true
    }
  }, {                                            // options: object.returnOriginal
    returnOriginal: false
  }).then((result) => {                           
    console.log(result);
  })
  // no fourth argument: callback so we need to call then() because we're returning a promise
  */
  // Challenge result:
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('592c40a7ba42cac5804a562a')
  }, {
    $set: {
      name: 'Josip'
    },
    $inc : {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});