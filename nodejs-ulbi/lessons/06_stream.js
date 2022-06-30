// readable - чтение
// writable - запись
// duplex  - для чтения и записи readable + writable
// transform - такой же как и duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname,'test.txt'),(err,data)=>{
//   if (err) {
//     throw err
//   }

//   console.log(data);
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));
// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('end', () => console.log('Закончили читать'));
stream.on('open', () => console.log('Начали читать читать'));
stream.on('error', (e) => console.log(e));

const writable = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));

for (let index = 0; index < 20; index++) {
  writable.write(index + '\n');
}

writable.end();

