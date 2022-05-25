const fs = require('fs');
const zlib = require('zlib');

// const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream=zlib.createGzip()


// readStream.on('data', (chunk) => {
//   // console.log(chunk.toString());
//   writeStream.write('\n---------CHUNK START---------\n');
//   writeStream.write(chunk);
//   writeStream.write('\n---------CHUNK FINISH---------\n');
// });


// const readStream = fs.createReadStream('./docs/text2.txt');
const readStream = fs.createReadStream('./docs/text.txt');
const handleError=()=>{
  console.log('Error');
  readStream.destroy()
  writeStream.end('Finished with Error')
}

readStream
.on('error',handleError)
.pipe(compressStream)
.pipe(writeStream)
.on('error',handleError)