
function arrayNumber(inputNumber) {
  var numberArray = [];
  // if (inputNumber.charAt(0) !== typeof "number") {
  //   return alert("nooo");
  // }
  // console.log(typeof inputNumber);
  for(var index = 1; index <= inputNumber; index += 1) {
    if (index % 15 === 0) {
      numberArray.push("Ping Pong");

    } else if (index % 5 === 0) {
      numberArray.push("Pong");

    } else if (index % 3 === 0) {
      numberArray.push("Ping");

    } else {
    numberArray.push(index);
    }
  };
    return numberArray;
};

$(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#inputNumber").val());
    var results = arrayNumber(inputNumber);
    $("input#inputNumber").val("")

    $("ul#output").html("");
    results.forEach(function(result) {
      $("ul#output").append("<li>" + result + "</li>");
    });
  });
});
