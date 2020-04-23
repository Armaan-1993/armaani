//27. GCD of two numbers

const num1 = 13;
const num2 = 169;
const gcdOfTwoNumbers = (a ,b) => {
    if (a === b) {
        return a;
    } else if (b > a) {
        b = b - a;
    } else if (a > b) {
        a = a - b;
    }
    return gcdOfTwoNumbers(a ,b);
}

console.log(`The GCD of the numbers ${num1} and ${num2} is ${gcdOfTwoNumbers(num1 ,num2)}`);


/*Ouput:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\027_gcdoftwonumbers.js
The GCD of the numbers 13 and 169 is 13*/


