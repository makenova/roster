var express = require('express');
var classList = require('./class');
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
      console.log(sortedClasses);
      res.render('index', { title: 'OKCoders Roster', classes: sortedClasses});
    });
  });

  app.get('/admin', function(req, res) {
    res.render('admin', { title: 'OKCoders Roster' });
  });

  // create a student
  app.post('/admin', function(req, res) {
    var student = new Student(req.body);
    student.save(function (err) {
      if (err) next(err);
      Class.findOne().populate('students').exec(function (err, classObj) {
        if (err || !classObj) {
          var newclassObj = new Class({'year': '2014', semester: 'summer'});
          newclassObj.students.push(student._id);
          newclassObj.save(function (err){
            if (err) next(err);
            return res.render('roster', {title:'yo', classlist:[student]});
          });
        } else {
          classObj.students.push(student._id);
          classObj.save(function (err) {
            Class.findOne({_id: classObj._id}).populate('students').exec(function (err) {
              if (err) next(err);
              res.render('roster', {title:'yo', classlist:classObj.students});
            });
          });
        }
      });
    });
  });
  
  app.get('/about', function(req, res) {
    res.render('about', { title: 'About OKCoders' });
  });
  app.use('/class', classList);
  app.use('/student', student);
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