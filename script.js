// Function to convert a number to its word representation
function convertNumberToWords(number) {
  const specialCases = {
    8008: "Boob",
    80085: "Boobs",
    8008135: "Boobies",
    0.1134: "Hello there",
  };

  if (specialCases[number] !== undefined) {
    return specialCases[number];
  }

  const [integerPart, decimalPart] = number.toString().split(".");

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

  if (number.toString().length === 13) {
    return "Input limit reached.";
  }

  if (number === 0) {
    return "Zero";
  }

  let words = "";

  if (integerPart === "0") {
    words = "Zero";
  } else {
    let segmentCount = 0;
    let num = parseInt(integerPart, 10);

    while (num > 0) {
      let segment = num % 1000;
      if (segment > 0) {
        let segmentWords = "";
        if (segment >= 100) {
          segmentWords += `${ones[Math.floor(segment / 100)]} Hundred `;
          segment %= 100;
        }
        if (segment >= 10 && segment <= 19) {
          segmentWords += teens[segment - 10];
        } else if (segment >= 20) {
          segmentWords += tens[Math.floor(segment / 10)];
          segment %= 10;
          if (segment > 0) {
            segmentWords += ` ${ones[segment]}`;
          }
        } else if (segment > 0) {
          segmentWords += ones[segment];
        }
        segmentWords += ` ${thousands[segmentCount]}`;
        words = `${segmentWords} ${words}`;
      }
      segmentCount++;
      num = Math.floor(num / 1000);
    }
  }

  if (decimalPart !== undefined) {
    if (decimalPart.length > 0) {
      words += " point";
      for (let i = 0; i < decimalPart.length; i++) {
        words += ` ${ones[parseInt(decimalPart[i], 10)]}`;
      }
    }
  }

  return words.trim();
}

let countdownTime = 15; // Set the countdown time in seconds
let powerOff = true;
let number = "0"; // Initialize number as a string for concatenation
let firstOperand = null; // Store the first operand for operations
let secondOperand = null; // Store the second operand for operations
let currentOperator = null; // Store the current operator
let decimalAdded = false; // Flag to track if a decimal has been added
let countdownTimeout; // Variable to store the countdown timeout ID

// Function to start the countdown
function startCountdown() {
  clearTimeout(countdownTimeout);
  countdownTimeout = setTimeout(() => {
    powerOff = true;
    updateDisplay("");
  }, countdownTime * 1000);
}

// Function to update the calculator display
function updateDisplay(number) {
  if (number === "0.1134") {
    rotate180();
    helloThere.play();
  } else {
    cancelRotation();
  }

  const numDisplay = document.querySelector("#number-display");
  const letterDisplay = document.querySelector("#letter-display");
  if (powerOff) {
    numDisplay.innerText = "";
    letterDisplay.textContent = "";
  } else {
    numDisplay.innerText = number;
    letterDisplay.textContent = convertNumberToWords(parseFloat(number));
  }
}

const huhSound = new Audio("./ceeday-huh-sound-effect.mp3");
const helloThere = new Audio("./obi-wan-hello-there.mp3");

const calculator = document.querySelector(".calculator");
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
const buttonOnClear = document.querySelector(".btn-on-clear");
const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonCalculate = document.querySelector("#calculate");
const buttonDot = document.querySelector("#btnDot");
const buttonHuhOne = document.querySelector(".huh1");
const buttonHuhTwo = document.querySelector(".huh2");
const buttonHuhThree = document.querySelector(".huh3");
const buttonHuhFour = document.querySelector(".huh4");
const buttonHuhFive = document.querySelector(".huh5");

const children = document.querySelector(".buttons").children;

// Add event listeners to number buttons to update the display
function setupNumberButtonListener(button, num) {
  button.addEventListener("click", () => {
    if (
      button === buttonHuhOne ||
      button === buttonHuhTwo ||
      button === buttonHuhThree ||
      button === buttonHuhFour ||
      button === buttonHuhFive
    ) {
      huhSound.play();
      number = "¯_(ツ)_/¯";
    }
    highlightButton(button);

    if (number === "¯_(ツ)_/¯") return updateDisplay(number);

    // Check if the number is less than 13 characters
    if (number.length < 13 || (number.length === 13 && number.includes("."))) {
      if (number.includes(".") && num === "0") {
        number += num;
      } else {
        number = number === "0" ? num : number + num;
      }
      updateDisplay(number);
      startCountdown();
    }
  });
}

setupNumberButtonListener(buttonZero, "0");
setupNumberButtonListener(buttonOne, "1");
setupNumberButtonListener(buttonTwo, "2");
setupNumberButtonListener(buttonThree, "3");
setupNumberButtonListener(buttonFour, "4");
setupNumberButtonListener(buttonFive, "5");
setupNumberButtonListener(buttonSix, "6");
setupNumberButtonListener(buttonSeven, "7");
setupNumberButtonListener(buttonEight, "8");
setupNumberButtonListener(buttonNine, "9");
setupNumberButtonListener(buttonHuhOne, "¯_(ツ)_/¯");
setupNumberButtonListener(buttonHuhTwo, "¯_(ツ)_/¯");
setupNumberButtonListener(buttonHuhThree, "¯_(ツ)_/¯");
setupNumberButtonListener(buttonHuhFour, "¯_(ツ)_/¯");
setupNumberButtonListener(buttonHuhFive, "¯_(ツ)_/¯");

buttonDot.addEventListener("click", () => {
  highlightButton(buttonDot);
  if (!decimalAdded) {
    number += ".";
    decimalAdded = true;
  }
  updateDisplay(number);
  startCountdown();
});

buttonOnClear.addEventListener("click", () => {
  powerOff = false;
  highlightButton(buttonOnClear);
  number = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  decimalAdded = false;
  updateDisplay(number);
  startCountdown();
});

buttonClear.addEventListener("click", () => {
  highlightButton(buttonClear);
  number = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  decimalAdded = false;
  updateDisplay(number);
  startCountdown();
});

// Event listeners for operator buttons
function setupOperatorButtonListener(button, operator) {
  button.addEventListener("click", () => {
    highlightButton(button);
    appendOperator(operator);
  });
}

setupOperatorButtonListener(buttonAdd, "+");
setupOperatorButtonListener(buttonSubtract, "-");
setupOperatorButtonListener(buttonMultiply, "*");
setupOperatorButtonListener(buttonDivide, "/");

buttonCalculate.addEventListener("click", () => {
  highlightButton(buttonCalculate);
  calculate();
});

// Function to handle appending an operator
function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  firstOperand = parseFloat(number);
  currentOperator = operator;
  number = "0";
  decimalAdded = false;
}

// Function to perform the calculation
function calculate() {
  secondOperand = parseFloat(number);
  if (currentOperator === "+") {
    number = (firstOperand + secondOperand).toString();
  } else if (currentOperator === "-") {
    number = (firstOperand - secondOperand).toString();
  } else if (currentOperator === "*") {
    number = (firstOperand * secondOperand).toString();
  } else if (currentOperator === "/") {
    number = (firstOperand / secondOperand).toString();
  }
  updateDisplay(number);
  startCountdown();
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  decimalAdded = number.includes(".");
}

// Event listener for keypress
document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  const key = evt.key;
  if (key >= "0" && key <= "9") {
    setupNumberButtonListener(document.querySelector(`#btn${key}`), key);
    number = number === "0" ? key : number + key;
    updateDisplay(number);
    startCountdown();
  } else if (key === ".") {
    if (!decimalAdded) {
      number += ".";
      decimalAdded = true;
      updateDisplay(number);
      startCountdown();
    }
  } else if (key === "+") {
    setupOperatorButtonListener(buttonAdd, "+");
  } else if (key === "-") {
    setupOperatorButtonListener(buttonSubtract, "-");
  } else if (key === "*") {
    setupOperatorButtonListener(buttonMultiply, "*");
  } else if (key === "/") {
    setupOperatorButtonListener(buttonDivide, "/");
  } else if (key === "Enter" || key === "=") {
    highlightButton(buttonCalculate);
    calculate();
  }
});

// Function to highlight the pressed button
function highlightButton(button) {
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("highlight");
  }
  button.classList.add("highlight");
}

// Function to rotate the calculator
function rotate180() {
  calculator.classList.remove("rotate-90", "rotate-270");
  calculator.classList.add("rotate-180");
}

// Function to cancel rotation
function cancelRotation() {
  calculator.classList.remove("rotate-90", "rotate-180", "rotate-270");
}

// Initial display update
updateDisplay(number);
