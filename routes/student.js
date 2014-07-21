var express = require('express');
var router = express.Router();
var roster = require('../services/roster');

router.get('/:year/:student', function (req, res) {
	var studentName = req.params.student;
	var year = req.params.year;
	roster.get(studentName, function (err, student){
		res.render('student', {student: student, title: student.name});
	});
});

// TODO: This is a stub for a function that will return a form
// to update a student
router.get('/:student/edit', function (req, res) {
  var student = req.params.student;
  console.log('return a form to edit a student ' + student);
	res.send(200, {message:'return a form to edit a student ' + student});
});

// TODO: This is a stub
router.put('/:student', function (req, res) {
  var student = req.params.student;
  console.log('update the student ' + student);
	res.send(200, {message:'update the student ' + student});
});

router.delete('/:student', function (req, res) {
  var student = req.params.student;
  roster.delete(student, function (err){
		if(err) res.send(204, {message: 'student not found'});
		res.redirect('/2014', {message:'delete student ' + student});
	});
});

module.exports = router;
