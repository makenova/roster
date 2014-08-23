$(function () {

    var semesterList = $('#semester-list');
    semesterList.empty();

    var selectedYear = $('#year-list').val();
    getSemester(selectedYear).forEach(function (semester){
      semesterList.append("<option>" + semester + "</option>");
    });



  $('#year-list').on('change', function () {
    var semesterList = $('#semester-list');
    semesterList.empty();

    var selectedYear = $(this).val();
    getSemester(selectedYear).forEach(function (semester){
      semesterList.append("<option>" + semester + "</option>");
    });
  });
});

function getSemester(year){
  var result;

   OKCoders.forEach(function (currentObj) {
    if (currentObj.year == year){
      result = (currentObj.semesters);
    }
  });

  console.log(result);
  return result;
}