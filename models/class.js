// Class data model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassSchema = new Schema ({
  semester: String,
  year : String,
  location : String,
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}]
});

// Instance Methods
ClassSchema.methods.addStudent = function (studentId, callback) {
  var self = this;
  self.students.push(studentId);
  return callback(this.students);
};

ClassSchema.methods.removeStudent = function ( studentId, callback ) {
  var self = this;
  for (var i = 0, len = self.students.length; i < len; i++) {
    if (self.students[i].id === studentId) {
      self.students.splice(i, 1);
      return callback(null);
    }
  }
  return callback(new Error('Student not found'));
};

// Static Methods
ClassSchema.statics.createOrUpdate = function ( classObj, callback ) {
  Class.findOne({'year': classObj.year, 'semester': classObj.semester}, function(err, dbStudent){
    if (err) {
      console.log('err finding student when creating student');
      return callback(err);
    } else if (dbStudent) {
      dbStudent.name = student.name;
      dbStudent.email = student.email;
      dbStudent.picUrl = student.picUrl;
      dbStudent.save(function (err, dbStudent){
        return callback (err, dbStudent);
      });
    }
  });
};

var Class = mongoose.model('Class', ClassSchema);
module.exports = Class;
