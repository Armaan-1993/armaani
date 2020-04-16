//2 . Write a function to print all the elements whose index is a multiple of 2

const readlineSync = require("readline-sync")
const string = readlineSync.question("Enter the numbers to be inputted in the array seperated by comma ")
let array = string.split(",").map(Number);
let arrlen = array.length;
for (let i = 0; i < arrlen; i++) {
    if (i % 2 == 0) {
        console.log("The value at index " + i + " is " + array[i]);
    }
}












