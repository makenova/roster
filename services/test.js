var roster = require('./roster');

var boo = roster.getStudent();

var boo2 = roster.getStudent('Zack_Mayer');

var boo3 = roster.getStudent('helllo');


console.log('no name: ', boo);
console.log('name in database: ', boo2);
console.log('name not in database: ', boo3);

// console.log(roster.getStudent())