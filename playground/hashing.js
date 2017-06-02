const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// #1 https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs');

// #2
var password = "123abc";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

// #3
var hashedPassword = "$2a$10$yNjMBYmWEYmaXPxwFHZ0ieKjOevYoTlXfzIYdPX.wUszHn4xSH7x6";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
/*
// var data = {
//   id: 10
// };
// this value is gonna get send back to the user upon sign-up or login
// var token = jwt.sign(data, '123abc');

// var decoded = jwt.verify(token, '123abc');
// var decoded = jwt.verify(token + '1', '123abc');
// var decoded = jwt.verify(token, '123abcBLABLA');


console.log('decoded', decoded);

console.log(token); 
*/
/*
var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
  // Data wasn't manipulated
  console.log('Data was not changed');
} else {
  console.log('Data was changed. Do not trust!');
}
*/

