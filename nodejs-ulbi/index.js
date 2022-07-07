const http = require('http');
const EventEmitter = require('events');
const Router = require('./framework/Router');
const Application = require('./framework/Application');
const { appendFile } = require('fs');

const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     // 'Content-type':'text/html; charset=utf-8'
//     'Content-Type': 'application/json',
//   });
//   // res.end('Сервер стартовал')
//   // res.end('<h1>Title</h1>')

//   if (req.url === '/users') {
//     // return res.end('USERS')
//     return res.end(JSON.stringify([{ id: 1, name: 'Lessons' }]));
//   }
//   if (req.url === '/posts') {
//     return res.end('POSTS');
//   }
//   res.end(req.url);
// });

const router = new Router();
const app = new Application();

router.get('/users', (req, res) => {
  res.end('You send request  to /USERS');
});
router.get('/posts', (req, res) => {
  res.end('You send request  to /POSTS');
});

// const server = http.createServer((req, res) => {
//   const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);

//   if (!emitted) res.end();
// });

// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
app.addRouter(router);
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
