//59. Number of times digit 3 occurs in each and every number from 0 to n

let num = 100;
let count = 0;
const digitThreeOccurence = (num) => {
    let hasDigitThree = false;
    let numstring = num.toString().split("").map(Number);
    for (let i = 0; i < numstring.length; i++) {
        if (numstring[i] === 3) {
            count = count + 1;
            hasDigitThree = true;
        }
    }
    return hasDigitThree;
}

for (let i = 1; i <= num; i++) {
   if (digitThreeOccurence(i) === true) { 
        console.log(`The number ${i} has ${count} digits of 3`);
        count = 0;
    }
}

/*Output:

The number 3 has 1 digits of 3 
The number 13 has 1 digits of 3
The number 23 has 1 digits of 3
The number 30 has 1 digits of 3
The number 31 has 1 digits of 3
The number 32 has 1 digits of 3
The number 33 has 2 digits of 3
The number 34 has 1 digits of 3
The number 35 has 1 digits of 3
The number 36 has 1 digits of 3
The number 37 has 1 digits of 3
The number 38 has 1 digits of 3
The number 39 has 1 digits of 3
The number 43 has 1 digits of 3
The number 53 has 1 digits of 3
The number 63 has 1 digits of 3
The number 73 has 1 digits of 3
The number 83 has 1 digits of 3
The number 93 has 1 digits of 3*/