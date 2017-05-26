var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  this.medicalIssue = medicalIssue;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    $('.showDoctors').text(result.data.forEach(function(data) {
      $('.showDoctors').append("<li>" + data.profile.first_name + " " + data.profile.middle_name + " " + data.profile.last_name + " " + data.profile.title + " " + data.profile.bio + "</li>");
      console.log(result);
    }));
  })
    .fail(function(error){
      console.log("fail");
    });
  };

  exports.doctorModule = Doctor;
