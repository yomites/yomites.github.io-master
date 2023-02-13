// A function to make calculation of temperature conversion from fahrenheits to degrees
// and vice versa.

"use strict";

function convertTemp(value) {
  // Declare and initial local variables
  let value_to_convert = value;
  let temp_in_degrees = 0;
  let temp_in_fahrenheits = 0;

  // Checking if a radio button is clicked and if the text input is not empty
  // Degrees to Fahrenheits is choosing by default.
  if (
    document.getElementById("degreestofahrenheits").checked &&
    value_to_convert != ""
  ) {
    temp_in_fahrenheits = (value_to_convert * 9) / 5 + 32;
    // Set the calculated result to page
    document.getElementById("calculatedValue").innerHTML =
      "<p>Result: " + temp_in_fahrenheits + " °F" + "</p>";
  }

  if (
    document.getElementById("fahrenheitstodegrees").checked &&
    value_to_convert != ""
  ) {
    temp_in_degrees = (5 * (value_to_convert - 32)) / 9;
    // Set the calculated result to page
    temp_in_degrees = temp_in_degrees.toFixed(1);
    document.getElementById("calculatedValue").innerHTML =
      "<p>Result: " + temp_in_degrees + " °C" + "</p>";
  }
}
