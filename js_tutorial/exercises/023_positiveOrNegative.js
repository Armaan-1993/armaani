//23. Write a program to check a number is positive or negative

let num = -67;
const positiveOrNegative = (number) => {
    if (number < 0) {
        console.log(`The number ${number} is negative`);
    } else if (number > 0) {
        console.log(`The number ${number} is positive`);
    } else if (number === 0) {
        console.log(`The number ${number} is neither positive nor negative`);
    }
}

positiveOrNegative(num);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\023_positiveOrNegative.js
The number 67 is positive
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\023_positiveOrNegative.js
The number -67 is negative*/