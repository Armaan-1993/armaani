//4. Enter a  string and find if it's a palindrome

const string = "malayalam";
const palindrome = (str) => {
    let reverse = str.split("").reverse().join("");   //using join("") to eliminate commas while joining the string
    if (reverse === string) {
        console.log(`The string "${string}" is a palindrome`);
    }
    else {
        console.log(`The string "${string}" is not a palindrome`);
    }
}
palindrome(string);

// Alernative Method (Using regex in replace function)

const string = "armaan";
const palindrome = (str) => {
    let reverse = str.split("").reverse().join().replace(/,/gi , "");
    if (reverse === string) {
        console.log(`The string "${string}" is a palindrome`);
    }
    else {
        console.log(`The string "${string}" is not a palindrome`);
    }
}
palindrome(string);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\004_palindrome.js
The string "malayalam" is a palindrome
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\004_palindrome.js
The string "armaan" is not a palindrome*/