const num = 95;
console.log (`The list of prime numbers from 1 to ${num} are : \n `)
const checkIfPrime = (number) => {
    if (number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
        let prime = false;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }  else {
                isPrime = true;
            }

        }
        return isPrime;    
    }    
}   

for (let i = 1; i <= num; i++) {
    if(checkIfPrime(i) === true) {
        console.log(i)
    }
}

/*Output:

The list of prime numbers from 1 to 95 are : 

2
3
5
7
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
89*/