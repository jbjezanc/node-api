var express = require('express');
var bodyParser = require('body-parser');

// Challenge - #c1:
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); 
  }, (e) => {
    res.status(400).send(e);
  });
});

// #1a GET /todos/1234
 // #1b creates id var on the req object that we can access.
app.get('/todos/:id', (req, res) => {
  // res.send(req.params);
  var id = req.params.id;

  // #c2 - Valid id using isValid
  if (!ObjectId.isValid(id)) {
    // 404 - send back empty send
    return res.status(404).send();
  }

  // findById
  Todo.findById(id).then(todo => {
    if (!todo) {
      // no todo - send back 404 with empty body
      return res.status(404).send();
    }
    // success, todo find - send back todo
    res.status(200).send({todo}); // send todo as a property of an object - that later can be modified
  }).catch(e => {
    res.status(400).send();
  });
});


app.listen(3000, () => {
  console.log('App started on port 3000');
});

module.exports = {app};