// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
// prompt user for the password criteria *
// password length 8 < 128 *
// lowercase, uppercase, numbers, special characters *
// validate the input
// display password to the page
// add prompt /

/* prompts and confirm for the uppercase, lowercase, numbers and symbols */

var lengthPassword = prompt("Choose between 8 and 128 characters in length." );
console.log(lengthPassword);

var upperCase = confirm("Do you want any UPPERCASE letters?");
console.log(upperCase);

var lowerCase = confirm("Do you want any lowercase letters?");
console.log(lowerCase);

var numbers = confirm("Do you want any numbers?");
console.log(numbers);

var symbols = confirm("Do you want any symbols?");
console.log(symbols);

//  single arrays -->  0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(uppercaseArray);

var uppercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowercaseArray);

//you're picking a random element from the array to add to the password and the for loop will need to go as many times as the password is long
var symbolsArray = ["(", ")","*","/","-","!","@","#","$","%","^","&","=","+"];
console.log(symbolsArray);

var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numbersArray);

//work on figuring out how to get the arrays the user chooses into array (the variable)




if(confirmUpperCase){
  passwordUpperCase = passwordUpperCase.concat(upperCase)
}
if(confirmLowerCase){
  passwordLowerCase = passwordLowerCase.concat(lowerCase)
}
if(confirmNumbers){
  passwordNumbers = ppasswordNumbers.concat(numbers)
}
if(confirmSymbols){
  passwordSymbols = ppasswordSymbols.concat(symbols)
}


var randomPassword = ""

//for loop
for (var i = 0; i < password.length; i++) {
randomPassword = randomPassword + passwordUpperCase + passwordLowerCase + passwordNumbers + passwordSymbols

console.log(randomNumbers[i])
  //end of code
}



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
