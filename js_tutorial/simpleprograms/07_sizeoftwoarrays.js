//7. Declare 2 arrays of the same size and print the values of both using one for loop

const readlineSync = require("readline-sync")
const string1 = readlineSync.question("Enter the elements of the first array with commas ");
const string2 = readlineSync.question("Enter the elements of the second array with commas ");
let array1 = string1.split(",");
let array2 = string2.split(",");
let arrlen = array1.length = array2.length;
const lengthsOfTwoArrays = () => {
    for(let i = 0 ; i < 1; i++) {
    console.log("The size of both the arrays are " + arrlen )
    }
}
lengthsOfTwoArrays();



