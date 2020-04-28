// 45. Armstrong numbers between two intervals

const num1 = 100;
const num2 = 1000;
console.log(`The armstrong numbers between ${num1} and ${num2} are \n`);
const armstrongNum = (num) => {
    isArmstrong = false;
    let sum = 0;
    let numarray = num.toString().split("").map(Number);
    for (let i = 0; i < numarray.length; i++) {
        sum += numarray[i]**numarray.length;
    }
    if (sum === num) {
        isArmstrong = true;
    } else {
        isArmstrong = false;
    }
    return isArmstrong;
}
   
for (let i = num1; i <= num2; i++) {
    if (armstrongNum(i) === true) {
        console.log(i);
    }
}

/*Output:

The armstrong numbers between 100 and 1000 are 

153
370
371
407*/
