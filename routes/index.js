var express = require('express');
var student = require('./student');

module.exports = function (app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'OKCoders Roster' });
  });
  app.use('/roster', student);
};
