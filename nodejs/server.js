const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

const PORT = 3000;
const createPath = (page) =>
  path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
  const title = 'Home';
  // res.send('Hello world')
  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
  ];
  // res.send('Hello world')
  res.render(createPath('contacts'), { contacts, title });
});

app.get('/aboutus', (req, res) => {
  const title = 'About us';
  // res.send('Hello world')
  res.redirect('/contacts');
});

app.get('/posts/:id', (req, res) => {
  // res.send('Hello world')
  const title = 'Post';
  res.render(createPath('post'), { title });
});
app.get('/posts', (req, res) => {
  // res.send('Hello world')

  const title = 'Posts';
  res.render(createPath('posts'), { title });
});
app.get('/add-post', (req, res) => {
  // res.send('Hello world')

  const title = 'Add post';
  res.render(createPath('add-post'), { title });
});

app.use((req, res) => {
  // res.statusCode=404

  const title = 'Error';
  res.status(404).render(createPath('error'),{title});
});
