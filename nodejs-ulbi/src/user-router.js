const Router = require('../framework/Router');

const router = new Router();

const users = [
  {
    id: 1,
    name: 'Vasy',
  },
  {
    id: 2,
    name: 'Alex',
  },
];

router.get('/users', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(users));

  // res.send(users);
});

router.post('/users', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(users));

  // res.send(users);
});

module.exports = router;
