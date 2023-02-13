/**
 * Simple Calculator - JavaScript parts
 */

// use more strict JavaScript (more errors and warnings will
// be available in developers tools console in browser).
"use strict";

// Global variables for storing min and max calculations

let minCAL = 0.0;
let maxCAL = 0.0;

/**
 * Function init() that is called when the page cal.html is loaded.
 */
function init() {
  // Local variables for min and max and
  // Initialize all variables by getting them from the local storage
  // (they will be null, if they were not in the local storage)

  let first = localStorage.getItem("first");
  let second = localStorage.getItem("second");
  let sign = localStorage.getItem("sign");
  let min = localStorage.getItem("minCAL");
  let max = localStorage.getItem("maxCAL");

  // Replace with if-else to check if data was in local storage
  // If yes, set data on the page and global variables
  // to the saved values,
  // otherwise, set data on the page to default values

  if (first != null && second != null && minCAL != null && maxCAL != null) {
    document.getElementById("first").value = first;
    document.getElementById("second").value = second;
    document.getElementById("signs").value = sign;
    document.getElementById("minAndMaxCal").innerHTML =
      "<p>Min Calculation: " + min + "</p><p>Max Calculation: " + max + "</p>";
    document.getElementById("yes").checked = "true";
    minCAL = min;
    maxCAL = max;
  } else {
    document.getElementById("no").checked = "true";
  }

  // Call function calculateValue with first, signs and second
  // gotten from the input fields of the page
  calculateValue(
    document.getElementById("first").value,
    document.getElementById("signs").value,
    document.getElementById("second").value
  );
}

/**
 * Function calculateValue(first, sign, second) that is called when
 * a new Calculation is to be done (input values have changes on the page
 * or the page is loaded).
 */
function calculateValue(first, sign, second) {
  // initialize variable firstValue, calculationSign and
  // secondValue
  let firstValue = first;
  let calculationSign = sign;
  let secondValue = second;
  let result = Number(firstValue) + Number(secondValue);

  if (calculationSign == "+") {
    result = Number(firstValue) + Number(secondValue);
  } else if (calculationSign == "-") {
    result = firstValue - secondValue;
  } else if (calculationSign == "*") {
    result = firstValue * secondValue;
  } else if (calculationSign == "/") {
    // Check for zero divisor
    if (secondValue == 0) {
      result = "Error!!! Division by zero can not be done";
    } else {
      result = firstValue / secondValue;
    }
  }

  // Check if this is the first time calculation is being done and
  // if it is, update the result to global min and max and on the page
  if (minCAL == 0.0 && maxCAL == 0.0) {
    minCAL = result;
    maxCAL = result;
    document.getElementById("minAndMaxCal").innerHTML =
      "<p>Min Calculation: " +
      minCAL +
      "</p><p>Max Calculation: " +
      maxCAL +
      "</p>";
  }

  // Set the calculated result to page
  document.getElementById("calculatedValue").innerHTML =
    "<p>Result: " + result + "</p>";

  // Check if the calculated value is new min or max and
  // if it is, update it on the page and on the global variable
  // accordingly
  if (result > maxCAL) {
    maxCAL = result;
    document.getElementById("minAndMaxCal").innerHTML =
      "<p>Min Calculation: " +
      minCAL +
      "</p><p>Max Calculation: " +
      maxCAL +
      "</p>";
  } else if (result < minCAL) {
    minCAL = result;
    document.getElementById("minAndMaxCal").innerHTML =
      "<p>Min Calculation: " +
      minCAL +
      "</p><p>Max Calculation: " +
      maxCAL +
      "</p>";
  }
  // Check if the radio button for saving is set to "Yes" and
  // if it is, call function store(setting) with parameter true
  if (document.getElementById("yes").checked) {
    store(true);
  }
}

/**
 * Function store(setting) that is called when the value of the
 * radio button on the page is changed and when the page loads
 * (from init()-function).
 */
function store(setting) {
  // if setting is true, save data to local storage,
  // otherwise, remove all data from local storage
  if (setting) {
    localStorage.setItem("first", document.getElementById("first").value);
    localStorage.setItem("sign", document.getElementById("signs").value);
    localStorage.setItem("second", document.getElementById("second").value);
    localStorage.setItem("minCAL", minCAL);
    localStorage.setItem("maxCAL", maxCAL);
  } else {
    localStorage.clear();
  }
}
