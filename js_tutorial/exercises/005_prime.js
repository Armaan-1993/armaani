const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ");
const checkIfPrimeNumber = (num) => {
  if (num == 1) {
    console.log("1 is neither prime nor composite");
  } else {
    let isprime = true;
    for (let i = 2; i <= num - 1 && num != i; i++) {
      if (num % i === 0) {
        isprime = false;
        break;
      } else {
        isprime = true;
      }
    }
    if (isprime === true) {
      console.log("The number is prime");
    } else {
      console.log("The number is not prime");
    }
  }
}
checkIfPrimeNumber(num);







