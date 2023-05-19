// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
// prompt user for the password criteria *
// password length 8 < 128 *
// lowercase, uppercase, numbers, special characters *
// validate the input
// display password to the page
// add prompt /
//**************************************************//



/* various arrays */

//  single arrays -->  0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(uppercaseArray);

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowercaseArray);

//you're picking a random element from the array to add to the password and the for loop will need to go as many times as the password is long
var symbolsArray = ["<", ">","*","/","-","!","@","#","$","%","^","&","=","+"];
console.log(symbolsArray);

var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numbersArray);


/* variable Declaration */

var confirmLength = "";
var symbols;
var upperCase;
var lowerCase;
var numbers;

/* prompts for password length */

var lengthPassword = prompt("Choose between 8 and 128 characters in length.");
console.log(lengthPassword);

/* confirm for uppercase, lowercase, numbers and symbols */

var upperCase = confirm("Do you want any UPPERCASE letters?");
console.log(upperCase);

var lowerCase = confirm("Do you want any lowercase letters?");
console.log(lowerCase);

var numbers = confirm("Do you want any numbers?");
console.log(numbers);

var symbols = confirm("Do you want any symbols?");
console.log(symbols);

//work on figuring out how to get the arrays the user chooses into array (the variable)


var generatePassword = [];
/* confirm uppercase, lowercase, numbers, symbols */


if(confirmupperCAse){
  confirmUppercase = passwordCharacter.concat(upperCase)
}
if(confirmLowerCase){
  confirmLowerCase = passwordCharacter.concat(lowerCase)
}
if(confirmNumbers){
  confirmNumbers = passwordCharacter.concat(numbers)
}
if(confirmSymbols){
  confirmSymbols = passwordCharacter.concat(symbols)
}
console.log(passwordCharacter)

/* empty string will filled in based on loop randomly selected from array */

var randomPassword = ""

//for loop
for (var i = 0; i < password.length; i++) {
randomPassword = randomPassword + passwordUpperCase + passwordLowerCase + passwordNumbers + passwordSymbols

console.log(randomNumbers[i])
  //end of code
}

return randomPassword;

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
