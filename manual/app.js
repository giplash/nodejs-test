const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {qs: req.query});
})

app.get('/pasha', (req, res) => {
  res.render('petuh');
})

app.get('/id/:id', (req, res) => {
  res.render('id', {id: req.params.id});
})

app.listen(3000);
