var express = require('express');
var router = express.Router();
var roster = require('../services/roster');
var Class = require('../models/class');
var Student = require('../models/student');

// get all students
router.get('/:year', function (req, res) {
  var year = req.params.year;
  roster.get(null, function (err, classlist) {
    res.render('roster', {
        title: 'Summer ' + year + ' Class Roster',
        classlist: classlist
    });
  });
});

// get all students from database
router.get('/:year/:semester', function (req, res) {
  var year = req.params.year;
  var semester = req.params.semester;

  var query = Class.find({'year': year, 'semester': semester});
  query.exec(function (err, classList) {
    if (err) return next(err);
    res.render('roster', classList);
  });
});

// add a student to the database
router.post('/:year/:semester', function (req, res) {
  var year = req.params.year;
  var semester = req.params.semester;
  var student = req.body;

  var query = Class.find({'year': year, 'semester': semester});
  query.exec(function (err, classList) {
    if (err) return next(err);
    res.render('roster', classList);
  });
});

module.exports = router;