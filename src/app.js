const path = require('path');
const express = require('express');
const app = express();
const router = require('./router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/', router);

app.get('/about', (req, res) => {
  res.render('about');
});
app.listen(3000, () => {
  console.log('connected 3000');
});
