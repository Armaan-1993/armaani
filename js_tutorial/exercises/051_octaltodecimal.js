//51. Octal to decimal conversion

const octalToDecimal = (num) => {
    let octalstr = num.toString();
    let decimal = parseInt(octalstr ,8).toString(10);
    console.log(`The decimal of the octal ${num} is ${decimal}`)
}

octalToDecimal(45);

/*Output:

The decimal of the octal 45 is 37*/


