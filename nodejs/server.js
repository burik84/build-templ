const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/',(req,res)=>{
  // res.send('Hello world')
  res.sendFile(createPath('index'))
})


app.get('/contacts',(req,res)=>{
  // res.send('Hello world')
  res.sendFile(createPath('contacts'))
})


app.get('/aboutus',(req,res)=>{
  // res.send('Hello world')
  res.redirect('/contacts')
})

app.use((req,res)=>{
  // res.statusCode=404

  res
  .status(404)
  .sendFile(createPath('error'))
})
