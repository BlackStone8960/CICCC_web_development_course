const express = require('express');
const app = express();
const port = 5050;

const fs = require('fs');
const path = require('path');

fs.writeFileSync('text.txt', 'Hello, world\n', 'utf8', err => {
  if (err) console.log(err);
});

fs.appendFileSync('text.txt', 'I am Taichi.', 'utf8', err => {
  if (err) console.log(err);
})

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  } 
})

app.get('/', (req, res) => {
  res.send('hello world!!!');
})

app.get('/customer/:id', (req, res) => {
  res.send(`Customer requested is ${req.params['id']}`)
})

app.listen(port);