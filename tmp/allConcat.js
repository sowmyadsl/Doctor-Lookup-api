var Doctor = require('./../js/doctor-lookup.js').doctorModule;

var row = function() {
  $('#table-body').append(`<tr></tr>`);
};

var displayFirstName = function(first_name){
  $('tr').last().append(`<td>${first_name}</td>`);
};

var displayLastName = function(last_name){
  $('tr').last().append(`<td>${last_name}</td>`);
};

var displayTitle = function(title){
  $('tr').last().append(`<td>${title}</td>`);
};

var displayBio = function(bio){
  $('tr').last().append(`<td>"${bio}"</td>`);
};


$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $(".table").hide();
  $("#findDoc").submit(function(e){
    $(".table").show();
    e.preventDefault();

    var medicalIssue = $('#medicalIssue').val();
    currentDoctorObject.getDoctors(medicalIssue,row, displayFirstName, displayLastName, displayTitle, displayBio);
  });
});
