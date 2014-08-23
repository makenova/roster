$(function () {

    var semesterList = $('#semester-list');
    var yearList = $('#year-list');

    semesterList.empty();

    var selectedYear = $('#year-list').val();

    getSemester(selectedYear).forEach(function (semester){
      semesterList.append("<option>" + semester + "</option>");
    });

    var selectedSemester = semesterList.val();
    getStudents(selectedYear, selectedSemester);

  // on Year change
  $('#year-list').on('change', function () {
    selectedYear = $(this).val();
    var semesterList = $('#semester-list');
    semesterList.empty();

    getSemester(selectedYear).forEach(function (semester){
      semesterList.append("<option>" + semester + "</option>");
    });
  });

  // on Semester change
  $('#semester-list').on('change', function () {
    selectedSemester = $(this).val();
    getStudents(selectedYear, selectedSemester);
  });

});

function getSemester(year){
  var result;

   OKCoders.forEach(function (currentObj) {
    if (currentObj.year == year){
      result = (currentObj.semesters);
    }
  });

  return result;
}

function getStudents (year, semester) {
  $.get('/students/' + year + "/" + semester)
    .done(function (students) {
      console.log(students);
    })
    .fail(function (){
      console.log('It failed');
    });
}