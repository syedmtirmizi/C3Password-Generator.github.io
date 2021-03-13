// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMaxLength = 128
var passwordMinLength = 8

//Generate Password code

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()-_=+\|]}[{",.></?;:~`';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());

// Write password to the #password input
function promptMe() {
    const passwordLength = Number(window.prompt("Please enter passsword length. Must be equal to or greater than " + passwordMinLength + " but less than " + passwordMaxLength + " characters.",""));
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Incorrect value entered!");
      } else {
  
      }


    console.log(passwordLength)
}

//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
