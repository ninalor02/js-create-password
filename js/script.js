
let generateBtn = document.querySelector("#generate");

let confirmLowerChar = false;
let confirmUpperChar = false;
let confirmNumberChar = false;
let confirmSymbolChar = false;
let confirmLength = '';

function generatePassword() {
  passwordLength();

  let randomPassword = '';
  let characters = '';

  if(confirmUpperChar === true) {
      characters += passwordCharacters.upperCaseCharCodes;
  }

  if(confirmLowerChar === true) {
      characters += passwordCharacters.lowerCaseCharCodes;
  }

  if(confirmNumberChar === true) {
      characters += passwordCharacters.numberCharCodes;
  }

  if(confirmSymbolChar === true) {
      characters += passwordCharacters.symbolCharCodes;
  }

  for(let i = 0; i < confirmLength; i++) {
      randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }  
  return randomPassword;
}
