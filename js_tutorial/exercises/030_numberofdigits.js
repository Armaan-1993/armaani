//30. Number of digits in an integer

let num = 345;
let numarray = num.toString().split("");
const sumOfDigits = (number) => {
    let digits = 0;
    for (let i = 0; i <= number.length; i++) {
        digits = i;
    }
    console.log(`The number of digits of ${num} is ${digits}`);
} 

sumOfDigits(numarray);  


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\030_numberofdigits.js
The number of digits of 345 is 3*/