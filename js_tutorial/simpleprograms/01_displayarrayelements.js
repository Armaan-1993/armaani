//1.Write a function to print all the elements of an array

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements of the array seperated by a ',' : ");
let array = string.split(",");
const printArrayElements = (array) => {
    let arrlen = array.length;
    for (i = 0; i < arrlen; i++) {
        console.log("The element of the array of index " + i + " is " + array[i]);
    }
}
printArrayElements(array);

