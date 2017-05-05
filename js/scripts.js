// function createArray() {
//   var inputArray = [];
//   for (var i = 0; i < "inputNumber"; i++) {
//     inputArray.push(i);
//   }
//   console.log(inputArray
// }
$(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#inputNumber").val());
    var outputArray = inputNumber;
    $("ul#output").append("<li>" + outputArray + "</li>");
  });
});
