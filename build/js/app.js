(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a4fa423855dff44c8c9de45224aee33c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  this.medicalIssue = medicalIssue;
}

Doctor.prototype.getDoctors = function(medicalIssue,row, displayFirstName, displayLastName, displayTitle, displayBio) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    result.data.forEach(function(data) {
      row();
      displayFirstName(data.profile.first_name);
      displayLastName(data.profile.last_name);
      displayTitle(data.profile.title);
      displayBio(data.profile.bio);

      // $('.showDoctors').append("<li>" + data.profile.first_name + " " + data.profile.middle_name + " " + data.profile.last_name + " " + data.profile.title + " " + data.profile.bio + "</li>");
      console.log(result);
    });
  })
  .fail(function(error){
    $('.showDoctors').text(error.responseJSON.message);
    });
  };

  exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

  $("#findDoc").submit(function(e){
    e.preventDefault();

    var medicalIssue = $('#medicalIssue').val();
    currentDoctorObject.getDoctors(medicalIssue,row, displayFirstName, displayLastName, displayTitle, displayBio);
  });
});

},{"./../js/doctor-lookup.js":2}]},{},[3]);
