// #9
var express = require('express');
var bodyParser = require('body-parser');
// #2 
var {mongoose} = require('./db/mongoose');
// #8
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// #10a
var app = express();

// #12 use an express middleware (body-parser module -
// takes JSON and converts it to object):
app.use(bodyParser.json());

// #11a configure routes:
app.post('/todos', (req, res) => {
  // #13 send JSON to express
  // console.log(req.body);
  // #14 create
  var todo = new Todo({
    text: req.body.text
  });
  // #15 save to the database
  todo.save().then((doc) => {
    res.send(doc); // #16a this is the part where postman gives back the response
  }, (e) => {
    res.status(400).send(e); // #16b or we get the error
  });
});

// #10b
app.listen(3000, () => {
  console.log('App started on port 3000');
});