const http = require('http');
const PORT=3000
const server=http.createServer((req,res)=>{
  console.log('Server request');
  console.log(req.url,req.method);

  // res.setHeader('Content-Type','text/plain')
  // res.write('Hello World')

  res.setHeader('Content-Type','text/html')
  res.write('<h1>Hello World</h1>')
  res.write('<p>My name is Alex</p>')
  res.end();
})

server.listen(PORT, 'localhost', (error)=>{
  error? console.log(error):console.log(`listening port ${PORT}`);;
})