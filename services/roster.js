exports.get = function () {
    return students;
  }
 
exports.getStudent = function(studentName) {
  for (var i = 0, len = students.length; i < len; i ++) {
    if (studentName == students[i].name) {
      return students[i];
    }
  }
}



exports.put = function (student) {
  students.push(student);
};

var students = [
  {
    name:'Zack_Mayer',
    email: 'zack@example.com',
    twitter: 'zaxxxk367',
    picurl: 'http://i.imgur.com/3NVIv7p.jpg'
  },
  {
    name:'Ronnie Bigfist',
    email: 'bigfist@example.com',
    twitter: 'ronniebigums',
    picurl: 'http://i.imgur.com/HtjE6Nm.jpg'
  },
  {
    name:'Brono the Bruiser',
    twitter: 'dontdoit',
    picurl: 'http://i.imgur.com/tzBqudP.jpg'
  }
];
