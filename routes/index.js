var express = require('express');
var student = require('./student');
var student_details = require('./student_details')
	
module.exports = function (app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'OKCoders Roster' });
  });
  app.use('/roster', student);
  app.use('/', student_details);
};
