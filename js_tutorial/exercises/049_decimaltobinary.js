//49. Decimal to binary conversion

const decimalToBinary = (num) => {
    let decimalstr = num.toString();
    let binary = parseInt(decimalstr ,10).toString(2);
    console.log(`The binary of the decimal ${num} is ${binary}`);
}

decimalToBinary(45);

/*Output:

The decimal of the binary 45 is 101101*/
