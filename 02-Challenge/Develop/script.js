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
var length = prompt("Enter desired length your password.");
var lower = confirm("Do you want this to include lower case letters?");
var upper = confirm("Do you want this to include upper case letters?");
var numeric = confirm("Do you want this to include numeric values?");

var special = confirm("Do you want this to include any special characters?");
var criteria = "";
  if (lower) criteria += "abcdefghijklmnopqrstuvwxyz";
  if (upper) criteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (number) criteria += "0123456789";
  if (special) criteria += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
