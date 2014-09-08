var express = require('express');
var classList = require('./class');
var admin = require('./admin');
var student = require('./student');
var Student = require('../models/student');
var Class = require('../models/class');
var _ = require('lodash');

module.exports = function (app) {
  app.get('/', function(req, res) {
    var query = Class.find({}, {year:true, semester:true});
    query.exec(function (err, classes) {
      if (err) throw err;
      var sortedClasses = sortClasses(classes);
      res.render('index', { title: 'OKCoders Roster', classes: sortedClasses, classesString: JSON.stringify(sortedClassses)});
    });
  });

  app.get('/about', function(req, res) {
    res.render('about', { title: 'About OKCoders' });
  });
  app.use('/admin', admin);
  app.use('/class', classList);
  app.use('/students', student);
};

function sortClasses (classes) {
  var result = [];

  _.uniq(_.pluck(classes, 'year')).forEach(function (year) {
    var yearObj = {
      year: year,
      semesters: _.pluck(_.where(classes, {year:year}), 'semester')
    };
    result.push(yearObj);
  });

  return(result);
}