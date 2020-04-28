//46. Can a number be expressed as a sum of two prime numbers?

let num = 17;
let sum = 0;
console.log(`The prime numbers till ${num} are \n`);
const primeNumsInRange = (num) => {
    isPrime = false;
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            } 
        } 
        return isPrime;
    }
} 

for (let i = 1; i <= num; i++) {
    if (primeNumsInRange(i) === true) {
        console.log(i);
        sum += i;
    }
}
if (sum === num) {
    console.log(`\nThe number ${num} is the sum of is primes`)
} else {
    console.log(`\nThe number ${num} is not the sum of its primes`)
}
     
/*Output:

The prime numbers till 17 are 

2
3
5
7
11
13
17

The number 17 is not the sum of its primes*/