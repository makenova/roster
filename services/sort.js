var arr = [ 
  'February',
  'January',
  'March'
];

function monthSort (monthArr) {
  return monthArr.sort(function (a, b) {
      return a.value > b.value;
    });
}

var result = monthSort(arr).map(function(montObj){
  return montObj.month;
});


function getMonth ( monthString ){
  var months = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  return months.reverse().indexOf(monthString.toLowerCase()) + 1;
}

console.log(getMonth('March'));