// Student data model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema ({
  name: String,
  email : String,
  twitter: String,
  picUrl : {type: String, default: ""}
});

// Instance Methods
StudentSchema.methods.update = function ( student ) {
  var self = this;
  self.name = student.name;
  self.email = student.email;
  self.twitter = student.twitter;
  self.picUrl = student.picUrl;
};

// Static Methods
StudentSchema.statics.createOrUpdate = function ( student, callback ) {
  Students.findOne({name: student.name}, function(err, dbStudent){
    if (err) {
      console.log('err finding student when creating student');
      return callback(err);
    } else if (dbStudent) {
      return callback(new Error('A student with that name already exists'));
    } else {
      dbStudent.name = student.name;
      dbStudent.email = student.email;
      dbStudent.picUrl = student.picUrl;
      dbStudent.save(function (err, dbStudent){
        return callback (err, dbStudent);
      });
    }
  });
};

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
