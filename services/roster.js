exports.get = function (studentName, callback) {
  if (!studentName) return callback(null, students);
  for (var i = 0, len = students.length; i < len; i ++) {
    if (studentName == students[i].name) {
      return callback(null, students[i]);
    }
  }
  return callback(new Error('student not found'));
};

exports.put = function (student, callback) {
  students.push(student);
  return callback(null);
};

exports.delete = function (studentName, callback) {
  for (var i = 0, len=students.length; i < len; i++) {
    if(studentName === students[i].name) {
      students.splice(i,1);
      return callback(null);
    }
  }
  return callback(new Error('student not found'));
};

var students = [
  {
    id: 1,
    name:'Zack_Mayer',
    email: 'zack@example.com',
    twitter: 'zaxxxk367',
    picurl: 'http://i.imgur.com/3NVIv7p.jpg',
    year: 2014
  },
  {
    id: 2,
    name:'Ronnie Bigfist',
    email: 'bigfist@example.com',
    twitter: 'ronniebigums',
    picurl: 'http://i.imgur.com/HtjE6Nm.jpg',
    year: 2014
  },
  {
    id: 3,
    name:'Brono the Bruiser',
    email: 'brono@example.com',
    twitter: 'dontdoit',
    picurl: 'http://i.imgur.com/tzBqudP.jpg',
    year: 2014
  }
];
