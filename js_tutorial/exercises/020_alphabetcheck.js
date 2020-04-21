//20. Write a program to check if a character is an alphabet or not

const character = "1";
const checkIfAlphabetUsingASCII = (chara) => {
    let num = chara.charCodeAt() 
    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
        console.log(`The character "${character}" is an alphabet`)
    } else {
        console.log(`The character "${character}" is not an alphabet`);
    }
}

checkIfAlphabetUsingASCII(character)

/*Output:

The character "a" is an alphabet
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\020_alphabetcheck.js
The character "1" is not an alphabet*/

