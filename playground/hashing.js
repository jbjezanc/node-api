// #1
const {SHA256} = require('crypto-js');
// #8
const jwt = require('jsonwebtoken');

// #9
var data = {
  id: 10
};
// this value is gonna get send back to the user upon sign-up or login
var token = jwt.sign(data, '123abc');

// #10a
var decoded = jwt.verify(token, '123abc');
// var decoded = jwt.verify(token + '1', '123abc'); // #10b
// var decoded = jwt.verify(token, '123abcBLABLA'); // #10c


console.log('decoded', decoded);

console.log(token); 
/* Use jwt library instead.
// #2
var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 4
};

var token = {
  data,
  // #5
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

// #7
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

// #6
var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
  // Data wasn't manipulated
  console.log('Data was not changed');
} else {
  console.log('Data was changed. Do not trust!');
}
*/

