const readlineSync = require("readline-sync");
const num = Number(readlineSync.question("Enter the number "));
const checkIfPrimeNumber = (num) => {
  if (num === 1) {
    console.log("1 is neither prime nor composite");
  } else if (num === 2) {
    console.log("The number is prime");
  } else {
    let isprime = false;
    for (let i = 2; i < num; i++) {
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
};
checkIfPrimeNumber(num);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\005_prime.js
Enter the number 1
1 is neither prime nor composite
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\005_prime.js
Enter the number 2
The number is prime
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\005_prime.js
Enter the number 37
The number is prime
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\005_prime.js
Enter the number 221
The number is not prime*/