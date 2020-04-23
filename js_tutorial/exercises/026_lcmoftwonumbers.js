//26. LCM of two numbers

const num1 = 25;
const num2 = 625;
const lcmOfTwoNumbers = (a ,b) => {
    if (a === b) {
        return a;
    } else if (b > a) {
        b = b - a;
    } else if (a > b) {
        a = a - b;
    }
    return lcmOfTwoNumbers(a ,b);
}

console.log(`The LCM of the numbers ${num1} and ${num2} is ${num1 * num2 / lcmOfTwoNumbers(num1 ,num2)}`);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\026_lcmoftwonumbers.js
The LCM of the numbers 25 and 625 is 625*/

