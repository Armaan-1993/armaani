//4. Write a function to find the sum of all elements of an array

const readlineSync = require ("readline-sync");
const string = readlineSync.question ("Enter the numbers to be inserted into the array seperated by a comma ");
let array = string.split(",").map(Number);
let arrlen = array.length;
const sumOfArrayElements = (array) => {
    let sum = 0;
    for ( let i = 0 ; i< arrlen ; i++ ) {
        sum = [i] + [i];
     }
     console.log("The sum of the elements of the array is " + sum );
}
sumOfArrayElements(array);
