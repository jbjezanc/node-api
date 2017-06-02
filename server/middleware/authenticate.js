var {User} = require('./../models/user');

// #6 the actual route is not gonna run until 'next' is called inside the middleware.
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

                         // #3
  User.findByToken(token).then((user) => {
    if (!user) {
      // #5
      return Promise.reject();
    }

    // res.send(user); // instead of sending back the response:
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => { // #5
    res.status(401).send();
  });
};

module.exports = {authenticate};