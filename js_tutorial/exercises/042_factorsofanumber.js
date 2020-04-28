//42. Find all Factors of a number

const factorsOfNumber = (num) => {
    console.log(`The factors of ${num} are \n `);
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

factorsOfNumber(42);

/*Output:

The factors of 42 are 

1
2
3
6
7
14
21
42*/




