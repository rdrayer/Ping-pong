var pingPong = function(number) {
  return number;
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var output = pingPong(number);
    $("#output").text(output);
  });
});


// 1. take number from user
// 2. return an array of numbers from 1 to output number
// 3. replace number with "ping" or "pong" based on the following rules:
// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"
// 4. a user should be able to enter a new number an see new results over and over again
