const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

const users = [
  { user: 'fred',   age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred',   age: 40 },
  { user: 'barney', age: 34 }
];

app.get('/users', (req, res) => {
  res.send(_.sortBy(users, ['age']));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
