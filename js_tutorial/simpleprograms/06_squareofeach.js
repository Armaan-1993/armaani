//6. Write a function to multiply elements of an array to itself ( find the square of each elements in the array)

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the numbers to be inserted to the array seperated by a comma ");
let array = string.split(",").map(Number);
let arrlen = array.length;
const squareOfEach = (array) => {
    let i = 0;
    square = 0;
    while (i < arrlen) {
        square = array[i] ** 2;
        console.log("The square of element with index " + i + " in the array is " + square);
        i++;
    }
}
squareOfEach(array);
