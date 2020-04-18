/* 16. Write a program that prints all prime numbers.
(Note: if your programming language does not support arbitrary size numbers, 
printing all primes up to the largest number you can easily represent is fine too.)*/

let num = 100;
const checkIfPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    let isprime = false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isprime = false;
        break;
      } else {
        isprime = true;
      }
    }
    return isprime;
  }
};

for(let i = 1; i <= num; i++){
  if(checkIfPrimeNumber(i)) {
    console.log(i)
  }
}

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\016_allprime.js
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
89
97*/