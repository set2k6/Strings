// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.
var input = document.getElementById("alpha");


var button = document.getElementById("myButton").addEventListener("click", alphabutton);

// for (var i = 0; i < input.length; i++) {
//   input.item(i).addEventListener("click", handleSectionClick);
// }

 function alphabutton() {
   var inputA = input.value;
   console.log(inputA);
}

function reversal() {
var reverseInput = input.reverse
var inputB = input.value;
   console.log(inputB);
}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);