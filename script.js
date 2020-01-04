$(document).ready(function () {

  var now = moment().format('MMMM Do YYYY');
  var dateHeading = $('#time');
  dateHeading.text(now);

  var dt = new Date();
  var currentHour = dt.getHours();
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  $('.hourRow').text(workHours[0]);

  for (var i = 0; i < workHours.length; i++) {
    var hourDiv = $('.hourRow').eq(i);
    hourDiv.text(workHours[i]);

    var inputElement = $('.form-control').eq(i);

    if (currentHour < workHours[i]) {
      inputElement.css("background-color", "pink");
    }
    else if (currentHour === workHours[i]) {
      inputElement.css("background-color", "grey");
    }
    else {
      inputElement.css("background-color", "yellow");
    }

  }

  $('button').click(function () {

  })


});




