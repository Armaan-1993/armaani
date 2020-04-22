// 15. Write program to check if number is power of 3 of any number

let num = 1000;
const powersOfThree = (num) => {
    let powerOfThree = false;
    for (let i = 2; i < num / 2; i++) {     //Logic used: Checked if modulus operation will result in 0. Then divided 
        if (num % i === 0) {          //the number with i to find the quotient and checked if the quotient/i 
            let quotient = num/i;    //gives i*/.
            if (quotient/i === i) {
                powerOfThree = true;               
            }
        }
    } 
    if (powerOfThree === true) {
        console.log(`The number ${num} is a power of 3`);
    } else {
        console.log(`The number ${num} is not a power of 3`);
    }
}

powersOfThree(num);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\014_sumofsquareswhole.js
The number 1000 is a power of 3
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\014_sumofsquareswhole.js
The number 8 is a power of 3*/

