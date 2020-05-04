//60. Number of integers which has exactly 9 divisors

let num = 100;
let count = 0;
const numberWithNineDivisors = (num) => {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count = count + 1;
        }
    }   
    if (count === 9) {     
        return true;
    }
}

for (let i = 0; i <= num; i++) {
    if (numberWithNineDivisors(i) === true) {
        console.log(`${i} has 9 divisors`);   
    }
    count = 0;
}

/*Output:

36 has 9 divisors
100 has 9 divisors*/