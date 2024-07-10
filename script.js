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
  const thousands = ["", "Thousand", "Million", "Billion"];

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
  const numDisplay = document.querySelector("#number-display");
  const letterDisplay = document.querySelector("#letter-display");
  numDisplay.innerText = number;
  letterDisplay.textContent = convertNumberToWords(parseInt(number, 10));
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

const children = document.querySelector(".buttons").children;
// Add event listeners to number buttons to update the display
buttonZero.addEventListener("click", () => {
  number = number === "0" ? "0" : number + "0"; // Handle leading zeros
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonZero.classList.add("highlight");
  updateDisplay(number);
});
buttonOne.addEventListener("click", () => {
  number = number === "0" ? "1" : number + "1";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonOne.classList.add("highlight");
  updateDisplay(number);
});
buttonTwo.addEventListener("click", () => {
  number = number === "0" ? "2" : number + "2";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonTwo.classList.add("highlight");
  updateDisplay(number);
});
buttonThree.addEventListener("click", () => {
  number = number === "0" ? "3" : number + "3";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonThree.classList.add("highlight");
  updateDisplay(number);
});
buttonFour.addEventListener("click", () => {
  number = number === "0" ? "4" : number + "4";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  updateDisplay(number);
  buttonFour.classList.add("highlight");
});
buttonFive.addEventListener("click", () => {
  number = number === "0" ? "5" : number + "5";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  updateDisplay(number);
  buttonFive.classList.add("highlight");
});
buttonSix.addEventListener("click", () => {
  number = number === "0" ? "6" : number + "6";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  updateDisplay(number);
  buttonSix.classList.add("highlight");
});
buttonSeven.addEventListener("click", () => {
  number = number === "0" ? "7" : number + "7";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonSeven.classList.add("highlight");
  updateDisplay(number);
});
buttonEight.addEventListener("click", () => {
  number = number === "0" ? "8" : number + "8";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonEight.classList.add("highlight");
  updateDisplay(number);
});
buttonNine.addEventListener("click", () => {
  number = number === "0" ? "9" : number + "9";
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonNine.classList.add("highlight");
  updateDisplay(number);
});
buttonClear.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  number = "0"; // Reset the number to zero
  firstOperand = null; // Clear the first operand
  secondOperand = null; // Clear the second operand
  currentOperator = null; // Clear the current operator
  updateDisplay(number); // Update the display
});

// Event listeners for operator buttons
buttonAdd.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonAdd.classList.add("highlight");
  appendOperator("+");
});
buttonSubtract.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonSubtract.classList.add("highlight");
  appendOperator("-");
});
buttonMultiply.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonMultiply.classList.add("highlight");
  appendOperator("*");
});
buttonDivide.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonDivide.classList.add("highlight");
  appendOperator("/");
});
buttonCalculate.addEventListener("click", () => {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  buttonCalculate.classList.add("highlight");
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

//Event listener for keypress
document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  const key = evt.key;

  if (key >= "0" && key <= "9") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    children[key].classList.add("highlight");
    number = number === "0" ? key : (number += key);
    updateDisplay(number);
  } else if (key === "+") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    buttonAdd.classList.add("highlight");
    appendOperator("+");
  } else if (key === "-") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    buttonSubtract.classList.add("highlight");
    appendOperator("-");
  } else if (key === "*") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    buttonMultiply.classList.add("highlight");
    appendOperator("*");
  } else if (key === "/") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    buttonDivide.classList.add("highlight");
    appendOperator("/");
  } else if (key === "Enter" || key === "=") {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("highlight");
    }
    buttonCalculate.classList.add("highlight");
    calculate(); // Perform the calculation
  }
});

// Initial display update
updateDisplay(number); // Set the initial display to zero in words
