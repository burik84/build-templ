const os=require('os')

// const user = require('./test');
const { userName: user, sayHi } = require('./test');
const name = 'Tommy';

// console.log(user);
// console.log(sayHi(name));

console.log(os.platform(),os.release());

module.exports = name;
