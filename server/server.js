const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.status(404).send({
    error: 'Page not found!'
  });
});

app.get('/users',(req,res) => {
  var cotrim = {
    name: 'Cotrim',
    age: 28
  };

  var camila = {
    name: 'Camila',
    age: 27
  };

  var rafael = {
    name: 'Rafael',
    age: 29
  };

  res.status(200).send([camila, cotrim, rafael]);
});

app.listen(3000);
module.exports.app = app;