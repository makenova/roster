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

    // Fill in the semesters
    getSemester(selectedYear).forEach(function (semester){
      semesterList.append("<option>" + semester + "</option>");
    });

    // select the first semester
    getStudents(selectedYear, semesterList.val());

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
      fillStudents(null, students);
    })
    .fail(function (){
      fillStudents(new Error('Failed to get students'));
    });
}

function fillStudents (err, students) {
  if (err) console.log(err);
  $('#students-list').empty();
  students.forEach(function (student) {
    $('#students-list').append(
      '<div class="col-xs-8 col-md-3"><a href="#" class="thumbnail"><img data-src="holder.js/100%x180" alt="...">' + student.name + '</a></div>'
    );
  });
}
