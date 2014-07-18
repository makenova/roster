var express = require('express');
var router = express.Router();
var roster = require('../services/roster');
var Student = require('../models/student');

// get all students
router.get('/:year', function(req, res) {
  var year = req.params.year;
  roster.get(null, function (err, classlist) {
    res.render('roster', {
        title: 'Summer ' + year + ' Class Roster',
        classlist: classlist
    });
  });
});

// create a student
router.post('/', function(req, res) {
  var student = req.body;
  classlist = roster.put(student, function (err) {
    if (!err) res.redirect('/2014');
  });
});

module.exports = router;
