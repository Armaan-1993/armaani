//23. Write a program to check a number is positive or negative

let num = 67;
const positiveOrNegative = (num) => {
    if (num < 0) {
        console.log(`The number ${num} is negative`);
    }
    else if (num > 0) {
        console.log(`The number ${num} is positive`);
    }
    else if (num === 0) {
        console.log(`The number ${num} is neither positive nor negative`);
    }
}
positiveOrNegative(num);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\023_positiveOrNegative.js
The number 0 is neither positive nor negative
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\023_positiveOrNegative.js
The number -3 is negative
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\023_positiveOrNegative.js
The number 67 is positive*/

