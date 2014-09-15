var router = require('express').Router();
var roster = require('../services/roster');
var Student = require('../models/student');
var Class = require('../models/class');


router.get('/', function(req, res) {
  res.render('admin', { title: 'OKCoders Roster' });
});

// create a student
router.post('/', function(req, res) {
  var year = req.body.year;
  var semester = req.body.semester;
  var student = new Student({
    name: req.body.name,
    email:req.body.email,
    twitter: req.body.twitter
  });
  student.save(function (err) {
    if (err) next(err);
    Class.findOne({semester: semester, year: year}).exec(function (err, classObj) {
      if (err || !classObj) {
        var newclassObj = new Class({ year: year, semester: semester});
        newclassObj.students.push(student._id);
        newclassObj.save(function (err){
          if (err) next(err);
          return res.redirect('/');
        });
      } else {
        classObj.students.push(student._id);
        classObj.save(function (err) {
          return res.redirect('/');
        });
      }
    });
  });
});

module.exports = router;