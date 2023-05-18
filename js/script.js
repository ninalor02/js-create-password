// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()=+[]-/")


// prompt user for the password criteria
// password length 8 < 128
// lowercase, uppercase, numbers, special characters
// validate the input
// display password to the page

    return "password created";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(5);
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



