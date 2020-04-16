//5. Write a function to print all the elements whose value is a multiple of 3 and multiple of 5

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the numbers to be inserted in the array with a comma ");
let array = string.split(",").map(Number);
let arrlen = array.length;
const multiplesOfThreeAndFive = (array) => {
    let i = 0;
    while (i < arrlen) {
        if (array[i] % 5 === 0) {
            console.log("The number with index " + i + " is a multiple of 5");
        }
        else if (array[i] % 3 === 0) {
            console.log("The number with index " + i + " is a multiple of 3");
        }
        i++;
    }
}
multiplesOfThreeAndFive(array);