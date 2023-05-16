// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

if (hasNumeric){
  resut = result.concat(hasNumeric);
}

}


function writePassword() {
  var specialCharacters = confirm ("Would you like a special character?")
  var passwordLength = generatePassword("Please choose between 8 and 128 characters", 10);
    console.log(passwordLength);
    console.log(typeof passwordLength);
}
  
  
  var passwordText = document.querySelector("#password");
  console.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

