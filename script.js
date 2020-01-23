$(document).ready(function () {

  var now = moment().format('MMMM Do YYYY');
  var dateHeading = $('#time');
  dateHeading.text(now);

  var dt = new Date();
  var currentHour = dt.getHours();
  var workHours = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
  
  

  for (var i = 0; i < workHours.length; ++i) {
    var hourDiv = $('.hourRow').eq(i);
    hourDiv.text(workHours[i]);

    var inputElement = $('.form-control').eq(i); 

    if (currentHour < workHours[i]) {
      inputElement.css("background-color", "#433C4E");
    }
    else if (currentHour == workHours[i]) {
      inputElement.css("background-color", "#7889A7");
    }
    else {
      inputElement.css("background-color", "#B1B0AA");
    };

    var buttonElement = $('.btn-primary').eq(i); 
    buttonElement.click(clickCallback(i));

    // Retrieve saved value
    var savedValue = localStorage.getItem(workHours[i]);
    inputElement.val(savedValue);
  };
  
  function clickCallback(i){
    return function(){
      var inputElement = $('.form-control').eq(i); 
      var storedPlan = inputElement.val();
      localStorage.setItem(workHours[i], storedPlan);
    };
  };

});




