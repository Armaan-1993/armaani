//8. Write a program to compare the current item in the array to the next item and print if they are equal or not

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements of the array seperated by commas ");
let array = string.split(",");
let arrlen = array.length;
const equalityOfItems = (array) => {
    for (let i = 0; i < arrlen - 1; i++) {
        if (array[i] === array[i + 1]) {
            console.log("The element  at " + i + " and " + (i + 1) + " are similar")
        }
        else {
            console.log("The elements are not similar")
        }
    }
}
equalityOfItems(array);

