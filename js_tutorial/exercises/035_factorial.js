//35. Factorial of a number

const factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial =  i * factorial;
    }
    console.log(`The factorial of the ${num} is ${factorial}`);
}

factorial(5);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\035_factorial.js
The factorial of the 5 is 120*/




