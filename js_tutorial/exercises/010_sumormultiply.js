/*10. Write a program that asks the user for a number n and gives them the possibility to choose between computing
the sum and computing the product of 1,…,n*/

const number = 5;
const readlineSycn = require("readline-sync");
const string = readlineSycn.question("Enter the operation to be done : Add/Multiply (A or M): ");
const multiplyOrAdd = (num) => {
let sum = 0;
let product = 1;
    if (string === "A") {
        for(let i = 0 ; i <= num ; i++) {
            sum += i;
        }
        console.log("The sum of the numbers from 1 to " + num +" is " + sum);
    }
    else if (string === "M") {
        for(i = 1; i <= num; i++) {
           product = i*product;
        }
        console.log("The product of the numbers from 1 to " + num + " is " + product);
    }
}
multiplyOrAdd(number);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\010_sumormultiply.js
Enter the operation to be done : Add/Multiply (A or M): A
The sum of the numbers from 1 to 5 is 15
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\010_sumormultiply.js
Enter the operation to be done : Add/Multiply (A or M): M
The product of the numbers from 1 to 5 is 120
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> */