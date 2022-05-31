const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

const PORT = 3000;
const createPath = (page) =>
  path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

// app.use((req, res, next) => {
//   console.log(`path ${req.path}`);
//   console.log(`method ${req.method}`);
//   next();
// });
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
app.use(express.static('styles'));

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
  const post = {
    id: '1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    title: 'Post title',
    date: '05.05.2021',
    author: 'Yauhen',
  };
  res.render(createPath('post'), { title, post });
});
app.get('/posts', (req, res) => {
  // res.send('Hello world')

  const title = 'Posts';
  const posts = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
      title: 'Post title',
      date: '05.05.2021',
      author: 'Yauhen',
    },
  ];
  res.render(createPath('posts'), { title, posts });
});
app.get('/add-post', (req, res) => {
  // res.send('Hello world')

  const title = 'Add post';
  res.render(createPath('add-post'), { title });
});

app.use((req, res) => {
  // res.statusCode=404

  const title = 'Error';
  res.status(404).render(createPath('error'), { title });
});
