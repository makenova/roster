var express = require('express');
var router = express.Router();
var roster = require('../services/roster');

router.get('/:year/:student', function (req, res) {
	var studentName = req.params.student;
	var year = req.params.year;
	console.log(studentName);
	console.log(year);
	var student = roster.getStudent(studentName);
	console.log(student);
	res.render('student', {student: student, title: student.name})
});

module.exports = router;