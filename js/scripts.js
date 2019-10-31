$(document).ready(function() {
  $(".mainform").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = numToRoman(input);
    $("#result").text(result).show();
  });


});


function numToRoman(number) {
  var result = "";

  if (number / 1000 > 0) {
    var thousands = Math.floor(number / 1000);

    if (thousands === 1) {
      result += "M";
    } else if (thousands === 2) {
      result += "MM";
    } else if (thousands === 3) {
      result += "MMM";
    }

    number = number % 1000;
  }

  if (number / 100 > 0) {
    var hundreds = Math.floor(number / 100);

    if (hundreds === 1) {
      result += "C";
    } else if (hundreds === 2) {
      result += "CC";
    } else if (hundreds === 3) {
      result += "CCC";
    } else if (hundreds === 4) {
      result += "CD";
    } else if (hundreds === 5) {
      result += "D";
    } else if (hundreds === 6) {
      result += "DC";
    } else if (hundreds === 7) {
      result += "DCC";
    } else if (hundreds === 8) {
      result += "DCCC";
    } else if (hundreds === 9) {
      result += "CM";
    }

    number = number % 100;
  }


  if (number / 10 > 0) {
    var tens = Math.floor(number / 10);

    if (tens === 1) {
      result += "X";
    } else if (tens === 2) {
      result += "XX";
    } else if (tens === 3) {
      result += "XXX";
    } else if (tens === 4) {
      result += "XL";
    } else if (tens === 5) {
      result += "L";
    } else if (tens === 6) {
      result += "LX";
    } else if (tens === 7) {
      result += "LXX";
    } else if (tens === 8) {
      result += "LXXX";
    } else if (tens === 9) {
      result += "XC";
    }

    number = number % 10;
  }

    if (number === 1) {
      result += "I";
    } else if (number === 2) {
      result += "II";
    } else if (number === 3) {
      result += "III"
    } else if (number === 4) {
      result += "IV";
    } else if (number === 5) {
      result += "V";
    } else if (number === 6) {
      result += "VI";
    } else if (number === 7) {
      result += "VII"
    } else if (number === 8) {
      result += "VIII"
    } else if (number === 9) {
      result += "IX";
    }


  return result;
}
