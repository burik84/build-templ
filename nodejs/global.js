// console.log(global);

const timer=()=>{
  setTimeout(()=>{
    console.log('Hello');
  },2000)
}

console.log(__dirname);
console.log(__filename);
// console.log(process);
// console.log(process.env);
// console.log(process.argv);

const url=new URL('https://okbur.ru/')
console.log(url.hostname);

// timer()