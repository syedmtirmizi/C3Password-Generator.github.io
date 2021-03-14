// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMaxLength = 128
var passwordMinLength = 8
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = '!@#$%^&*()-_=+\|]}[{",.></?;:~`\''

//Generate Password code


// Write password to the #password input
function generatePassword() {
    var passwordLength = window.prompt("Please enter password length. Must be equal to or greater than " + passwordMinLength + " but less than or equal to " + passwordMaxLength + " characters.","");
    if ((passwordLength < passwordMinLength || passwordLength > passwordMaxLength) || isNaN(passwordLength)) {
        window.alert("Incorrect value entered!");
      } else {
        var getRandomLower = window.confirm("Would you like lowercases in your password?");
        var getRandomUpper = window.confirm("Would you like uppercases in your password?");
        var getRandomNumber = window.confirm("Would you like numbers in your password?");
        var getRandomSymbol = window.confirm("Would you like symbols in your password?");
        console.log(getRandomLower);
        console.log(getRandomUpper);
        console.log(getRandomNumber);
        console.log(getRandomSymbol);
        
        var charset = "";
        if (getRandomLower) {
            charset += lowercase;
        }
        if (getRandomUpper) {
            charset += uppercase;
        }
        if (getRandomNumber) {
            charset += number;
        }
        if (getRandomSymbol) {
            charset += symbol;
        }
        var password = "";
        for(var i=0; i<passwordLength; ++i) {
            password += charset.charAt(Math.floor(Math.random()*charset.length));
        }
        console.log(password);
        return password;
    }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
