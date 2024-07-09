// Function to convert a number to its word representation
function convertNumberToWords(number) {
  // Define arrays for word representation
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Million", "Billion"]; // Add more as needed

  // Handle the special case for zero
  if (number === 0) {
    return "Zero";
  }

  let words = ""; // String to store the final word representation
  let segmentCount = 0; // Counter to track the segment (thousands, millions, etc.)

  // Loop through each segment of the number (up to 3 digits at a time)
  while (number > 0) {
    let segment = number % 1000; // Get the last three digits of the number
    if (segment > 0) {
      let segmentWords = ""; // String to store the word representation of the current segment
      if (segment >= 100) {
        segmentWords += ones[Math.floor(segment / 100)] + " Hundred ";
        segment %= 100; // Remove the hundreds place
      }
      if (segment >= 10 && segment <= 19) {
        segmentWords += teens[segment - 10]; // Handle the teens (10-19)
      } else if (segment >= 20) {
        segmentWords += tens[Math.floor(segment / 10)]; // Handle the tens place
        segment %= 10; // Remove the tens place
        if (segment > 0) {
          segmentWords += " " + ones[segment]; // Handle the ones place
        }
      } else if (segment > 0) {
        segmentWords += ones[segment]; // Handle numbers less than 10
      }
      segmentWords += " " + thousands[segmentCount]; // Add the appropriate thousand, million, etc.
      words = segmentWords + " " + words; // Append the segment words to the final result
    }
    segmentCount++;
    number = Math.floor(number / 1000); // Move to the next segment
  }

  return words.trim(); // Remove any extra spaces and return the result
}

// Initialize variables for calculator operations
let number = "0"; // Initialize number as a string for concatenation
let firstOperand = null; // Store the first operand for operations
let secondOperand = null; // Store the second operand for operations
let currentOperator = null; // Store the current operator

// Function to update the calculator display
function updateDisplay(number) {
  const display = document.getElementById("display"); // Get the display element
  display.innerText = convertNumberToWords(parseInt(number, 10)); // Convert the number to words and update the display
}

// Event listeners for number buttons
const buttonZero = document.querySelector("#btn0");
const buttonOne = document.querySelector("#btn1");
const buttonTwo = document.querySelector("#btn2");
const buttonThree = document.querySelector("#btn3");
const buttonFour = document.querySelector("#btn4");
const buttonFive = document.querySelector("#btn5");
const buttonSix = document.querySelector("#btn6");
const buttonSeven = document.querySelector("#btn7");
const buttonEight = document.querySelector("#btn8");
const buttonNine = document.querySelector("#btn9");
const buttonClear = document.querySelector(".btn-clear");
const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonCalculate = document.querySelector("#calculate");

// Add event listeners to number buttons to update the display
buttonZero.addEventListener("click", () => {
  number = number === "0" ? "0" : number + "0"; // Handle leading zeros
  updateDisplay(number);
});
buttonOne.addEventListener("click", () => {
  number = number === "0" ? "1" : number + "1";
  updateDisplay(number);
});
buttonTwo.addEventListener("click", () => {
  number = number === "0" ? "2" : number + "2";
  updateDisplay(number);
});
buttonThree.addEventListener("click", () => {
  number = number === "0" ? "3" : number + "3";
  updateDisplay(number);
});
buttonFour.addEventListener("click", () => {
  number = number === "0" ? "4" : number + "4";
  updateDisplay(number);
});
buttonFive.addEventListener("click", () => {
  number = number === "0" ? "5" : number + "5";
  updateDisplay(number);
});
buttonSix.addEventListener("click", () => {
  number = number === "0" ? "6" : number + "6";
  updateDisplay(number);
});
buttonSeven.addEventListener("click", () => {
  number = number === "0" ? "7" : number + "7";
  updateDisplay(number);
});
buttonEight.addEventListener("click", () => {
  number = number === "0" ? "8" : number + "8";
  updateDisplay(number);
});
buttonNine.addEventListener("click", () => {
  number = number === "0" ? "9" : number + "9";
  updateDisplay(number);
});
buttonClear.addEventListener("click", () => {
  number = "0"; // Reset the number to zero
  firstOperand = null; // Clear the first operand
  secondOperand = null; // Clear the second operand
  currentOperator = null; // Clear the current operator
  updateDisplay(number); // Update the display
});

// Event listeners for operator buttons
buttonAdd.addEventListener("click", () => {
  appendOperator("+");
});
buttonSubtract.addEventListener("click", () => {
  appendOperator("-");
});
buttonMultiply.addEventListener("click", () => {
  appendOperator("*");
});
buttonDivide.addEventListener("click", () => {
  appendOperator("/");
});
buttonCalculate.addEventListener("click", () => {
  calculate(); // Perform the calculation
});

// Function to handle appending an operator
function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate(); // Perform any pending calculations
  }
  firstOperand = parseFloat(number); // Store the first operand
  currentOperator = operator; // Set the current operator
  number = "0"; // Reset the number for the next input
}

// Function to perform the calculation
function calculate() {
  secondOperand = parseFloat(number); // Store the second operand
  if (currentOperator === "+") {
    number = (firstOperand + secondOperand).toString(); // Perform addition
  } else if (currentOperator === "-") {
    number = (firstOperand - secondOperand).toString(); // Perform subtraction
  } else if (currentOperator === "*") {
    number = (firstOperand * secondOperand).toString(); // Perform multiplication
  } else if (currentOperator === "/") {
    number = (firstOperand / secondOperand).toString(); // Perform division
  }
  updateDisplay(number); // Update the display with the result
  firstOperand = null; // Clear the first operand
  secondOperand = null; // Clear the second operand
  currentOperator = null; // Clear the current operator
}

// Initial display update
updateDisplay(number); // Set the initial display to zero in words
