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

  if (number === 0) {
    return "Zero";
  }

  let words = "";
  let segmentCount = 0;

  while (number > 0) {
    let segment = number % 1000;
    if (segment > 0) {
      let segmentWords = "";
      if (segment >= 100) {
        segmentWords += ones[Math.floor(segment / 100)] + " Hundred ";
        segment %= 100;
      }
      if (segment >= 10 && segment <= 19) {
        segmentWords += teens[segment - 10];
      } else if (segment >= 20) {
        segmentWords += tens[Math.floor(segment / 10)];
        segment %= 10;
        if (segment > 0) {
          segmentWords += " " + ones[segment];
        }
      } else if (segment > 0) {
        segmentWords += ones[segment];
      }
      segmentWords += " " + thousands[segmentCount];
      words = segmentWords + " " + words;
    }
    segmentCount++;
    number = Math.floor(number / 1000);
  }

  return words.trim();
}
let number = 0;

const buttonZero = document.querySelector("#btn0");
const buttonOne = document.querySelector("#btn1");
const buttoTwo = document.querySelector("#btn2");
const buttonThree = document.querySelector("#btn3");
const buttonFour = document.querySelector("#btn4");
const buttonFive = document.querySelector("#btn5");
const buttonSix = document.querySelector("#btn6");
const buttonSeven = document.querySelector("#btn7");
const buttonEight = document.querySelector("#btn8");
const buttonNine = document.querySelector("#btn9");

buttonZero.addEventListener("click", () => {
  number === 0 ? 0 : (number += "0");

  console.log(convertNumberToWords(number));
});
buttonOne.addEventListener("click", () => {
  number += "1";
  console.log(convertNumberToWords(number));
});

let displayValue = convertNumberToWords(0);
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === "Zero") {
    displayValue = convertNumberToWords(number);
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  currentOperator = operator;
  displayValue = "0";
}

function calculate() {
  secondOperand = parseFloat(displayValue);
  if (currentOperator === "+") {
    displayValue = (firstOperand + secondOperand).toString();
  } else if (currentOperator === "-") {
    displayValue = (firstOperand - secondOperand).toString();
  } else if (currentOperator === "*") {
    displayValue = (firstOperand * secondOperand).toString();
  } else if (currentOperator === "/") {
    displayValue = (firstOperand / secondOperand).toString();
  }
  updateDisplay();
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
}

function clearDisplay() {
  displayValue = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  updateDisplay();
}

updateDisplay();
