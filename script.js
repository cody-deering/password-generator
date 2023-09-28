// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let pwLength = 8;
let paraArr = [];

function getPrompt() {
  paraArr = [];
  pwLength = parseInt(
    prompt(
      "How many characters do you want this password to be? (8-128 characters)"
    )
  );

  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("The password must be between 8-128 characters. Please try again");
    paraArr = [];
    return false;
  }

  if (confirm("Would you like your password to include lower case letters?")) {
    paraArr = paraArr.concat(lowerLetters);
  }

  if (confirm("Would you like your password to include upper case letters?")) {
    paraArr = paraArr.concat(upperLetters);
  }

  if (confirm("Would you like your password to include special characters?")) {
    paraArr = paraArr.concat(specialChars);
  }

  if (confirm("Would you like your password to include numbers?")) {
    paraArr = paraArr.concat(numbers);
  }
  if (paraArr.length === 0) {
    alert("No characters were selected. Please try again");
    paraArr = [];
    pwLength = 0;
    return false;
  }
}

function generatePassword() {
  let newPW = "";
  for (i = 0; i < pwLength; i++) {
    newPW = newPW + paraArr[Math.floor(Math.random() * paraArr.length)];
  }

  return newPW;
}

// Write password to the #password input
function writePassword() {
  getPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
