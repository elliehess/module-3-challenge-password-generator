// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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


//To make sure they stay in the parameters, we need a loop
  if (chooseLength < 8 || chooseLength > 128) {
    alert ("Password length must be between 8 and 128 characters. Please try again");
    var chooseLength = (prompt("How many characters would you like your password to contain?"));
}

//Confirm the numbers of characters the user has chosen
alert(`Your password will have ${chooseLength} characters`);

//Choose what parameters to be included in the users password 
var chooseNumber = confirm("Would you like a number? Click OK to confirm if you would like to include numerical characters in your password");
var chooseSpecialChar = confirm("Would you like to make it extra special? Click OK to confirm if you would like to include special characters in your password");
var chooseUppercase = confirm("What about lowercase? Click OK to confirm if you would like to include lowercase characters in your password");
var chooseLowercase = confirm("How do you feel about uppercase? Click OK to confirm if you would like to include uppercase characters in your password");

//If the user chooses an answer outside the parameter, we need a loop
  while (chooseNumber === false && chooseSpecialChar === false && chooseUppercase === false && chooseUppercase === false) {
    alert("You must choose at least one parameter");
    var chooseNumber = confirm("Would you like a number? Click OK to confirm if you would like to include numberical characters in your password");
    var chooseSpecialChar = confirm("Would you like to make it extra special? Click OK to confirm if you would like to include special characters in your password");
    var chooseLowercase = confirm("What about lowercase? Click OK to confirm if you would like to include lowercase characters in your password");
    var chooseUppercase = confirm("How do you feel about uppercase? Click OK to confirm if you would like to include uppercase characters in your password");
  }

  //Now we need an action for the password parameters
  var passwordCharacters = []

if (chooseNumber) { //if user chooses to include a number, it will be added to the new string
  passwordCharacters = passwordCharacters.concat(number)
}

if (chooseSpecialChar) { //if user chooses to include a special character, it will be added to the new string
  passwordCharacters = passwordCharacters.concat(specialChar)
} 

if (chooseLowercase) { //if user chooses to include a lowercase character, it will be added to the new string
  passwordCharacters = passwordCharacters.concat(lowerCase)
}

if (chooseUppercase) { //if user chooses to include an uppercase character, it will be added to the new string
  passwordCharacters = passwordCharacters.concat(upperCase)
}
  console.log(passwordCharacters);

//Now we need a loop to select random characters to fill this empty string and create a random password
  var randomPassword = "";

  for (var i = 0; i <chooseLength; i++){
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
  }

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


