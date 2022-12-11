// Assignment Code
var generateBtn = document.querySelector("#generate");

//set arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//set variable declaration for length 
var chooseLength = ""; 

//We then need a prompt for how many characters the user will choose for their password
function generatePassword() {
  var chooseLength = (prompt("How many characters would you like your password to contain?"));
}

//To make sure they stay in the parameters, we need a loop
if (chooseLength < 8 || > 128) {
  alert ("Password length must be between 8 and 128 characters. Please try again");
  var chooseLength = (prompt("How many characters would you like your password to contain?"));
}

//Confirm the numbers of characters the user has chosen
alert("Your password will have "document.getElementById(chooseLength)" characters");

//Choose what parameters to be included in the users password 
var chooseNumber = confirm("Would you like a number? Click OK to confirm if you would like to include numberical characters in your password");
var chooseSpecialChar = confirm("Would you like to make it extra special? Click OK to confirm if you would like to include special characters in your password");
var chooseUppercase = confirm("What about lowercase? Click OK to confirm if you would like to include lowercase characters in your password");
var chooseLowercase = confirm("How do you feel about uppercase? Click OK to confirm if you would like to include uppercase characters in your password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
