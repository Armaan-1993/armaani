//28. Greatest of two numbers

const num1 = 67;
const num2 = 34;
const greatestOfTwoNumbers = (a ,b) => {
    if (a > b) {
        return (`The number ${a} is greater than ${b}`);
    } else if (b > a) {
        return (`The number ${b} is greater than ${a}`);
    }
}

console.log(greatestOfTwoNumbers(num1 ,num2));


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\028_greatestoftwonumbers.js
The number 67 is greater than 34*/