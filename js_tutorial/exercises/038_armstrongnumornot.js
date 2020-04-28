//38. Armstrong number or not

const armstrongNum = (num) => {
    let sum = 0;
    let numarray = num.toString().split("").map(Number);
    for (let i = 0; i < numarray.length; i++) {
        sum = numarray[i]**numarray.length + sum;
    }
    if (sum === num) {
        return (`The number ${num} is an armstrong number`);
    } else {
        return (`The number ${num} is not an armstrong number`);
    }
}
   
console.log(armstrongNum(153));


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\038_armstrongnumornot.js
The number 323 is not an armstrong number
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\038_armstrongnumornot.js
The number 153 is an armstrong number*/
