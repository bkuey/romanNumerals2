var dict = {1: "I", 4: "IV", 5: "V", 9:"IV", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};

$(document).ready(function() {
  $(".mainform").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = numToRoman(input);
    $("#result").text(result).show();
  });


});


function numToRoman(number) {

  var keys = Object.keys(dict).reverse();
  var result = "";
  for (var i = 0; i < keys.length && number > 0; i++) {
    while (number >= keys[i]) {
      result += dict[keys[i]];
      number -= keys[i];
    }
  }

  return result;
}
