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

/* create a student with mongoose */
// router.post('/', function(req, res) {
//   var student = new Student();
//   student.name = req.body.name;
//   student.email = req.body.email;
//   student.twitter = req.body.twitter;
//   student.picUrl = req.body.picUrl;
//
//   student.save(function (err){
//     if (err) {throw err;}
//     res.redirect('roster');
//   });
// });

// TODO: implemet the following routes, get update and delete a student
router.get('/:year/:student', function (req, res) {});
router.put('/:year/:student', function (req, res) {});
router.delete('/:year/:student', function (req, res) {});

/* Alternate method to write above routes */
// router.route('/:year/:student')
//   .get(function(req, res){})
//   .put(function(req,res){})
//   .delete(function(req,res){});

module.exports = router;
