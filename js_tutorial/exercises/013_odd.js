const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ");
const oddOrEven = (num) => {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
oddOrEven(num);


