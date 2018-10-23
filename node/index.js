const express = require('express');
const cors = require('cors');

const todos = require('./todos');

const app = express().use(cors());
const hostname = '127.0.0.1';
const port = 3000;

app.get('/todos', todos);

app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});
