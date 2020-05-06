/*3. Enter 2 strings and do the following operations
concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces 
/ add a character after every specific letter*/

//concatinate
const stringConcat = (string1 ,string2) => {
    console.log(`The concatinated string is "${string1} ${string2}"`);
}

stringConcat("Armaan" ,"Mathew");
//reverse
const stringReverse = (string) => {
    return string.split("").reverse().join("");
}

console.log(`The reversed string is "${stringReverse("Armaan")}"`);
//reverse concat
const stringReverseConcat = (string1 ,string2) => {
    revString1 = string1.split("").reverse().join("");
    revString2 = string2.split("").reverse().join("");
    console.log(`The string after reverse concat is "${revString1} ${revString2}"`);
}

stringReverseConcat("Armaan" ,"Mathew");
//mix the letters
const mixTwoStrings = (string1 ,string2) => {
    let stringArray1 = string1.split("");
    let stringArray2 = string2.split("");
    let mixedString = [];
    console.log(`The mixed result is:`);
    for (let i = 0; i < Math.max(stringArray1.length,stringArray2.length); i++) {
        if (stringArray1[i] && stringArray2[i]) {
            mixedString += stringArray1[i] + stringArray2[i];
        } else if (stringArray1[i]) {
            mixedString += stringArray1[i];
        } else if(stringArray2[i]) {
            mixedString += stringArray2[i];
        }
    } 
    console.log(mixedString); 
}

mixTwoStrings("poli" ,"armaan");
//split in half
const splitInHalf = (string) => {
    return string.slice(0 ,string.length/2);
}

console.log(`The string split in half is "${splitInHalf("adrenaline")}"`);
//remove all white spaces
const removeWhiteSpaces = (string) => {
    return string.replace(/ /gi,"");
}

console.log(`The string after removing white spaces is "${removeWhiteSpaces("a r maan")}"`);

/*Output:

The concatinated string is "Armaan Mathew"        
The reversed string is "naamrA"
The string after reverse concat is "naamrA wehtaM"
The mixed result is:
paorlmiaan
The string split in half is "adren"
The string after removing white spaces is "armaan"*/
