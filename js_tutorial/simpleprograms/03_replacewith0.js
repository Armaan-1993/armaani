//3 . Write a function to replace all the elements of an array with 0

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements to inserted in the array with a comma ");
let array = string.split(",");
let arrlen = array.length;
const replaceWithZero = (array) => {
    for (let i = 0; i < arrlen; i++) {
        array.push(0);
        array.shift();
        console.log("The element " + i + " of the array was replaced with 0");
    }
}
replaceWithZero(array);



