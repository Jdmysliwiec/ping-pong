
function arrayNumber(inputNumber) {
  var numberArray = [];

  for(var index = 1; index <= inputNumber; index += 1) {
    numberArray.push(index);
  };
    return numberArray;
}
$(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#inputNumber").val());
    var result = arrayNumber(inputNumber);
    $("ul#output").append("<li>" + result + "</li>");
  });
});
