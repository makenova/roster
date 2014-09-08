var router = require('express').Router();
var roster = require('../services/roster');
var Student = require('../models/student');
var Class = require('../models/class');


router.get('/', function(req, res) {
  res.render('admin', { title: 'OKCoders Roster' });
});

// create a student
router.post('/', function(req, res) {
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
