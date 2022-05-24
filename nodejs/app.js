const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (error, data) => {
  // console.log(data.toString());
  console.log(data);

  // fs.mkdir('./folder',()=>{
  //   fs.writeFile('./folder/test3.txt', `${data} New Text`, (error) => {
  //     error?console.log(error):null;
  //   });
  // })
  if (!fs.existsSync('./folder')) {
    fs.mkdirSync('./folder', () => {});
  }
  // fs.mkdirSync('./folder', () => {});
  fs.writeFileSync('./folder/test3.txt', `${data} New Text 3`, (error) => {
    error ? console.log(error) : null;
  });
  fs.writeFile('./test2.txt', `${data} New Text 2`, (error) => {
    error ? console.log(error) : null;
  });
});

console.log('Just test!');

setTimeout(() => {
  if (fs.existsSync('./folder/test3.txt')) {
    fs.unlink('./folder/test3.txt', () => {});
  }
}, 4000);

setTimeout(() => {
  // fs.rmdir('./folder', () => {});
  if (fs.existsSync('./folder')) {
    fs.rmdir('./folder', () => {});
  }
}, 6000);
