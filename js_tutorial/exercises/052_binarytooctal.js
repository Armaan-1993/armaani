//52. Binary to octal conversion

const binaryToOctal = (num) => {
    let binarystr = num.toString();
    let octal = parseInt(binarystr ,2).toString(8);
    console.log(`The octal of the binary ${num} is ${octal}`)
}

binaryToOctal(1110000);

/*Output:

The octal of the binary 1110000 is 160*/