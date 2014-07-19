var express = require('express');
var classList = require('./classList');
var student = require('./student');

module.exports = function (app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'OKCoders Roster' });
  });
  app.get('/about', function(req, res) {
		res.render('about', { title: 'About OKCoders' });
	});
	app.use('/', classList);
  app.use('/', student);
};
