// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for the four password criteria
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input

function writePassword() {
  //user selects number of characters, between 8-128
  var passwordLength = parseInt(prompt("How many characters should the password have?\nMinimum of 8 and maximum of 128."));
  //user chooses an invalid amount
  while (passwordLength < 8 || passwordLength > 128) {
    alert("The number of characters can't be less than 8 or more than 128.")
    passwordLength = parseInt(prompt("How many characters should the password have?\nMinimum of 8 and maximum of 128."));
  }
  //user chooses cancel
  if (!passwordLength) {
    alert("Password length must be specified. Click generate password to try again.");
    return;
  //proceeds to other criteria once valid amount is chosen
  } else {
    var hasLower = confirm("Should password have lowercase letters?");
    var hasUpper = confirm("Should password have uppercase letters?");
    var hasNumber = confirm("Should password have numbers?");
    var hasSpecial = confirm("Should password have special characters?");
  }
  //user chooses no criteria
  while (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
    alert("At least one type of characters need to be selected. Click generate password to try again.");
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
