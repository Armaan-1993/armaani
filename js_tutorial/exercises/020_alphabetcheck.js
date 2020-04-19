//20. Write a program to check if a character is an alphabet or not

const chara = "a";
const checkIfAlphabetUsingASCII = (chara) => {
    let num = chara.charCodeAt() 
    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
        console.log("This character is an alphabet")
    } 
    else {
        console.log("The character is not an alphabet");
    }
}
checkIfAlphabetUsingASCII(chara)

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\020_alphabetcheck.js
The character is not an alphabet
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\020_alphabetcheck.js
This character is an alphabet*/

