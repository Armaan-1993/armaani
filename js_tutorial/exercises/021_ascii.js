//21. Write a program to check Ascii values of a character

const chara = "a";
const checkIfAlphabetUsingASCII = (chara) => {
    let num = chara.charCodeAt() 
    console.log(`The ascii value of ${chara} is ${num}`);
}
checkIfAlphabetUsingASCII(chara)

/*Output:

The ascii value of 2 is 50
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\021_ascii.js
The ascii value of a is 97*/
