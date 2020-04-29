//53. Octal to binary conversion

const octalTobinary = (num) => {
    let octalstr = num.toString();
    let binary = parseInt(octalstr ,8).toString(2);
    console.log(`The binary of the octal ${num} is ${binary}`)
}

octalTobinary(32);

/*Output:

The binary of the octal 32 is 11010*/