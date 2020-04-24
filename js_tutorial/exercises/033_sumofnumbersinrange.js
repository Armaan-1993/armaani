//33. Sum of numbers in a given range

const sumOfNumbersInRange = (a ,b) => {
    let sum = 0;
    for (let i = a; i >= a && i <= b; i++) {
        sum = i + sum;
    }
    console.log(`The sum of natural numbers from ${a} to ${b} is ${sum}`);
}

sumOfNumbersInRange(20 ,25);


/*Ouput:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\033_sumofnumbersinrange.js
The sum of natural numbers from 20 to 25 is 135*/