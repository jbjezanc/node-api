// #1
const expect = require('expect');
const request = require('supertest');

// #3
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// #7a make sure the db is empty before running every single test.
beforeEach((done) => {
  Todo.remove({}) // #7b wipe out all of our todos - async
    .then(() => done());
});

// #4
describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    // #5a
    request(app)
      .post('/todos')
      .send({text}) // #5b send object, it will be converted to JSON by supertest
      .expect(200)  // #5c expect successful request, and
      .expect((res) => { // #5c custom assertion on response,
        expect(res.body.text).toBe(text); // expect response body to be equal to the text string defined above
      })
      .end((err, res) => {  // #6a 
        if (err) {
          return done(err);
        } // #6b if there is no error fetch all todos
        Todo.find()
          .then((todos) => {
            expect(todos.length).toBe(1); // #6c expect that there is at least one todo, as a result of adding to collection
            expect(todos[0].text).toBe(text); // #6d our todo has a text prop equal to our text variable (contents)
            done();
          }).catch(e => done(e));  // 6#e tack on any error that might happen in our res callback
      });
  });
  // #8
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then(todos => {
          expect(todos.length).toBe(0);
          done();
        }).catch(e => done(e));
      });
  });
});
