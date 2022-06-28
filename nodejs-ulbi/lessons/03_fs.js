console.log('File system');
const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname,'dir','dir2'),{recursive:true})
// fs.mkdir(path.resolve(__dirname,'dir'),(err)=>{
//   if (err) {
//     console.error(err);
//     return
//   }
//   console.log('Folder created');
// })
// console.log('Finished');

// fs.rmdir(path.resolve(__dirname,'dir'),(err)=>{
//   if (err) throw err
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Hi Everybody', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('file created');

//   fs.appendFile(
//     path.resolve(__dirname, 'text.txt'),
//     'Good Evening Everybody',
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log('file changed');
//     }
//   );
// });

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};
// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'Good evening boys')
//   .then(() =>
//     appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Good night boys')
//   )
//   .then(() =>
//     appendFileAsync(path.resolve(__dirname, 'text.txt'), 'Good night girls')
//   )
//   .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then((data) => console.log(data))
//   .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
//   .then(() => console.log('File was removing'))
//   .catch((err) => console.error(err));

const text = process.env.TEXT || '';
writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then((data) => data.split(' ').length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, 'count.txt'),
      `Количество слов ${count}`
    )
  ).then(()=>removeFileAsync(path.resolve(__dirname, 'text.txt')))
