var Doctor = require('./../js/doctor-lookup.js').doctorModule;

$(document).ready(function(){
  var currentDoctorObject = new Doctor();

  $("#findDoc").submit(function(e){
    e.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    var showDoctors = currentDoctorObject.getDoctors(medicalIssue);
    currentDoctorObject.getDoctors(medicalIssue);
    $("#showDoctors").append("<ul" + showDoctors + "</ul>");
  });
});
