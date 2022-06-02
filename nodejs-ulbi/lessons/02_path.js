const path = require('path');

console.log(path.join('first', 'second'));
console.log(__dirname, __filename);
console.log(path.resolve('first','second','third.js'));

const fullPath=path.resolve('first','second','third')

// console.log('Parsing path', path.parse(fullPath));
console.log('Name File',path.basename(fullPath));
console.log('Extension file', path.extname(fullPath));

const siteUrl='http://localhost:3000/user&id=3201';
const url=new URL(siteUrl);
console.log(url);