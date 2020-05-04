//39. Strong number or not

const num = 145;
const strongNum = (numarray) => {
    let sum = 0;
    for(let i = 0; i < numarray.length; i++) {
        sum += factorialfn(numarray[i])
    }
    (sum === num) ? console.log(`Number ${num} is strong`) : console.log(`Number ${num} is not strong`);
}

const factorialfn = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial =  i * factorial;
    }
    return factorial;
}

const numarray = num.toString().split("").map(Number);
strongNum(numarray)


/*Output:

Number 145 is strong*/



