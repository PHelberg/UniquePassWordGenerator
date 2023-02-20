// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This function generates the random content
function generatePassword() {
var length = parseInt(prompt("Enter desired length of your password (between 8 and 128"));
if (isNaN(length) || length < 8 || length > 128) { 
alert("Please enter a number between 8 and 128.");
return;
}

var lower = confirm("Do you want this to include lower case letters?");
var upper = confirm("Do you want this to include upper case letters?");
var numeric = confirm("Do you want this to include numeric values?");
var special = confirm("Do you want this to include any special characters?");
if (!lower && !upper && !numeric && !special)
{alert("I can't generate a blank password"); 
}

var criteria = "";
  if (lower) criteria += "abcdefghijklmnopqrstuvwxyz";
  if (upper) criteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (number) criteria += "0123456789";
  if (special) criteria += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(math.random() * criteria.length);
    password += criteria[randomIndex];
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

