//31. Sum of digits of a number

const sumOfDigits = (num) => {   
    let numarray = num.toString().split("").map(Number);
    let sum = 0;
    for (let i = 0; i < numarray.length; i++) {
        sum = numarray[i] + sum;
    }
    console.log(`The sum of digits of ${num} is ${sum}`);
} 

sumOfDigits(9045);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\031_sumOfDigits.js
The sum of digits of 9045 is 18*/
