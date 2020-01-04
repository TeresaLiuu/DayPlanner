$(document).ready(function () {

  var now = moment().format('MMMM Do YYYY');
  var dateHeading = $('#time');
  dateHeading.text(now);

  var dt = new Date();
  var currentHour = dt.getHours();
  var workHours = ['9 am', '10 am', '11 am', '12 pm', '13 pm', '14 pm', '15 pm', '16 pm', '17 pm'];
  
  

  for (var i = 0; i < workHours.length; ++i) {
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

    var buttonElement = $('.btn-primary').eq(i); 
    buttonElement.click(clickCallback(i));

    // Retrieve saved value
    var savedValue = localStorage.getItem(workHours[i]);
    inputElement.val(savedValue);
  }
  
  function clickCallback(i){
    return function(){
      var inputElement = $('.form-control').eq(i); 
      var storedPlan = inputElement.val();
      localStorage.setItem(workHours[i], storedPlan);
    }
  }

});




