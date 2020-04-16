//9. Print the array in reverse order

const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements of the array seperated by commas ");
let array = string.split(",");
let arrlen = array.length;
const reverseOfArray = (array) => {
    let i = 0;
    let revArray = []
    while (i < arrlen) {
        revArray.push(array.pop());
        i++;
    }
    console.log("The reversed array is " + revArray);
}
reverseOfArray(array);




