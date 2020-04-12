const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ");
const checkIfPrimeNumber = (num) => {
if (num%num == 0 && num%1 == 0 && num%2 == 1 && num%3 != 0 && num%7 != 0 && num%5 != 0) {
    return("The entered number is a prime number");
    }
else if (num == 2 || num == 3 || num == 5 || num == 7) {
    return("The entered number is a prime number");
    }
else if (num == 1 || num == 0) {
    return("The entered number is neither prime nor composite");
    }
else
    return("The entered number is a composite number");
}
console.log(checkIfPrimeNumber(num));


