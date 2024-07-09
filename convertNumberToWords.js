export default function convertNumberToWords(number) {
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

// Example usage:
// let number = 10;
// let words = convertNumberToWords(number);
// console.log(words);
