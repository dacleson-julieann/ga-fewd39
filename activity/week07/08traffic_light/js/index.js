//Implement the red light using jQuery. Don't forget to add the script tags in your html.
$("#stopButton").on("click", function() {
  $('#stopLight').css('background-color', 'red');
});

$("#slowButton").on("click", function() {
  $('#slowLight').css('background-color', 'yellow');
});

$("#goButton").on("click", function() {
  $('#goLight').css('background-color', 'green');
});
