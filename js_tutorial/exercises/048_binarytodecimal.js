//48. Binary to decimal conversion

const binaryToDecimal = (num) => {
    let binarystr = num.toString();
    let decimal = parseInt(binarystr ,2);
    console.log(`The decimal of the binary ${num} is ${decimal}`);
}

binaryToDecimal(1000111);

/*Output:

The decimal of the binary 1000111 is 71*/
