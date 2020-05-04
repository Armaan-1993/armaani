//69. Remove vowels from a string

const removeVowels = (string) => {
    return string.toLowerCase().replace(/a/,"").replace(/e/,"").replace(/i/,"").replace(/o/,"").replace(/u/,"");
}

console.log(`The string after removing the vowels is "${removeVowels("JEAlOUsy")}"`);

/*Output:

The string after removing the vowels is "jlsy"*/