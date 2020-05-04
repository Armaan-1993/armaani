//66. Length of the string without using strlen() function

const stringLenghtWithoutStrlen = (string) => {
    let stringArray = string.split("");
    stringArray = stringArray.push("$");
    return stringArray
   
}
console.log(`The length is ${stringLenghtWithoutStrlen(`armaan`) - 1}`);

/*Output:

The length is 6*/
