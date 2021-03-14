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
    const passwordLength = Number(window.prompt("Please enter password length. Must be equal to or greater than " + passwordMinLength + " but less than " + passwordMaxLength + " characters.",""));
    if (passwordLength < passwordMinLength || passwordLength > passwordMaxLength) {
        window.alert("Incorrect value entered!");
      } else {
        var getRandomLower = window.confirm("Would you like lowercases in your password?")
        if (getRandomLower = true) {
            var getRandomUpper = window.confirm("Would you like uppercases in your password?");
            if(getRandomUpper = true) {
                var getRandomNumber = window.confirm("Would you like numbers in your password?");
                if(getRandomNumber = true) {
                    var getRandomSymbol = window.confirm("Would you like symbols in your password?");
                }
                else {

                }
            } else {

            }
        } 
        else {
        }
      }
}

//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
