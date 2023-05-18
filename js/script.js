// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
// prompt user for the password criteria
// password length 8 < 128
// lowercase, uppercase, numbers, special characters
// validate the input
// display password to the page

  return "this is just a test run";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function popupInfo() {
  var symbols = confirm("Do you want any symbols?");
  var passwordLength = prompt("Choose between 8 and 128 characters in length.")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



