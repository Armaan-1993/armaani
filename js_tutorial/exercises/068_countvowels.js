//68. Count the number of vowels

const countVowels = (string) => {
    stringArray = string.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "a" ||
        stringArray[i] === "e" ||
        stringArray[i]=== "i" ||
        stringArray[i] === "o" ||
        stringArray[i] === "u") {
            count += 1;
        }
    } 
    return count;
}

console.log(`The number of vowels in the string is ${countVowels("armagedon")}`);

/*Ouput:

The number of vowels in the string is 4*/
