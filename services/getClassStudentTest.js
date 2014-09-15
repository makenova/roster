var _ = require('lodash');

var classes = [
  { _id: '53ccad7adf4fffc136788c42',
    semester: 'summer',
    year: '2014'
  },
  { _id: '53dd659be6072030c9512e5c',
    year: '2014',
    semester: 'spring'
  },
  { _id: '53dd65d3e6072030c9512e5d',
    year: '2015',
    semester: 'spring'
  },
  { _id: '53dd65d3e6072030c9512e5e',
    year: '2015',
    semester: 'fall'
  },
  { _id: '53dd65d3e6072030c9512e5f',
    year: '2016',
    semester: 'spring' 
  }
];

var result = [];

_.uniq(_.pluck(classes, 'year')).forEach(function (year) {
  var yearObj = {
    year: year,
    semesters: _.pluck(_.where(classes, {year:year}), 'semester')
  };
  result.push(yearObj);
});

result.forEach(function (yearObj) {
  console.log(yearObj.year);
})