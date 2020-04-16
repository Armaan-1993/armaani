//10. Write a function to print the square of a number and call this function for each element of an array

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements to be inserted into the array seperated by a comma ");
let array = string.split(",").map(Number);

const squareAndCall = (element) => {
    console.log("The square of element " + element + " of the array is " + element*element)
}
for (const val of array) {
    squareAndCall(val);
}
