var express = require('express');
var router = express.Router();
var roster = require('../services/roster');
var Student = require('../models/student');

router.use(function(req, res, next) {
  console.log('A student request!!');
  next();
});

// get all students
router.get('/:year?', function(req, res) {
  // TODO: if a year is provided, get only that year, else get most recent year
  classlist = roster.get();
  res.render('roster', {
      title: 'Summer 2014 Class Roster',
      classlist: classlist
    });
});

// create a student
router.post('/', function(req, res) {
  var student = req.body;
  classlist = roster.put(student);
  res.redirect('roster');
});

module.exports = router;
