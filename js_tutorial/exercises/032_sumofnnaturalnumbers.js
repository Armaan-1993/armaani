//32. Sum of N natural numbers

const sumOfNNaturalNums = (number) => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = i * (i +1) / 2;
    }
    console.log(`The sum of natural numbers till ${number} is ${sum}`);
}

sumOfNNaturalNums(13);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\032_sumofnnaturalnumbers.js
The sum of natural numbers till 13 is 91*/