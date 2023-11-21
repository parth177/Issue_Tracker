const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const port = 8000;
const app = express();

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log('Error');
  }
  console.log('running');
});
