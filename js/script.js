// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
// prompt user for the password criteria /
// password length 8 < 128
// lowercase, uppercase, numbers, special characters /
// validate the input
// display password to the page
// add prompt /

var lengthPassword = prompt("How long do you want the password?");
console.log(lengthPassword);

var upperCase = confirm("Do you want any UPPERCASE letters?");
console.log(upperCase);

var lowerCase = confirm("Do you want any lowercase letters?");
console.log(lowerCase);

var numbers = confirm("Do you want any numbers?");
console.log(numbers);

var symbols = confirm("Do you want any symbols?");
console.log(symbols);
//                    0    1  2
var uppercaseArray = ["A","B","C"];
console.log(uppercaseArray);
//work on figuring out how to get the arrays the user chooses into array (the variable)
//for loop
for (var i = 0; i < uppercaseArray.length; i++) {
console.log(uppercaseArray[i])
  //end of code
}

//you're picking a random element from the array to add to the password and the for loop will need to go as many times as the password is long
var symbolsArray = ["(", ")"]

var array = [];
var password  = ''
  return password;
}

// Write password to the #password input
/* do not touch beyond this point*/

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
