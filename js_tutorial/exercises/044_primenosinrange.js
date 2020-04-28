// 44. Prime numbers in a given range

const num1 = 10;
const num2 = 100;
console.log(`The prime numbers between ${num1} and ${num2} are \n`)
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

for (let i = num1; i <= num2; i++) {
    if (primeNumsInRange(i) === true) {
        console.log(i);
    } 
}


/*Output:

The prime numbers between 10 and 100 are 

11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97*/