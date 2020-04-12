const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ");
const oddOrEven = (num) => {
if (num%2 == 0) {
    return("The number is even");
    }
else
    return("The number is odd");
}
console.log(oddOrEven(num));

