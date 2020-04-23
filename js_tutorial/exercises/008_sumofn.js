const readlineSync = require("readline-sync");
const num = readlineSync.question("Enter the number ");
const sumOfNNumbers = (num) => {
    sum = 0;
    if (num >= 1) {
        for (let i = 1; (i <= num); i++) {
            sum += i;
        }
        console.log("The sum of all the numbers from '1' to " + num + " is " + sum);
    } else {
        console.log("Enter a number greater than 0");
    }
}

sumOfNNumbers(num);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\008_sumofn.js
Enter the number 10
The sum of all the numbers from '1' to 10 is 55*/



