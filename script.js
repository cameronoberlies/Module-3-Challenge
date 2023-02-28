// Assignment code here

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var numericCharacters = '0123456789';
  var specialCharacters = '~`!@#$%^&*()_-+={[}]|\:;"'
  
  var temporaryPassword = [];
  console.log(temporaryPassword);
  var characterRange = prompt('How many characters will your password be?')
  console.log(characterRange)
  if (characterRange > 8 && characterRange < 128) {
    console.log(true)
  }
  else {
    alert("Please choose a number between 8 and 128")
  console.log(false);
  return 
  }

  var addSymbols = confirm('Would you like to include special characters?')
  console.log(addSymbols)
  var addUpperCase = confirm('Would you like to include upper case letters?')
  console.log(addUpperCase);
  var addLowerCase = confirm('Would you like to include lower case letters?')
  console.log(addLowerCase);
  var addNumericValue = confirm('Would you like to include numeric values?')
  console.log(addNumericValue);
  
}




generateBtn.addEventListener("click", writePassword);