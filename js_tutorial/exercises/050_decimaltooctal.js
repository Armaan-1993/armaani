//50. Decimal to octal conversion

const decimalToOctal = (num) => {
    let decimalstr = num.toString();
    let octal = parseInt(decimalstr ,10).toString(8);
    console.log(`The octal of the decimal ${num} is ${octal}`);
}

decimalToOctal(74);

/*Output:

The octal of the decimal 74 is 112*/