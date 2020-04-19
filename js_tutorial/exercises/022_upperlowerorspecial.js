//22. Write a program to check Uppercase, Lowercase or special character

const chara = "d";
const checkIfAlphabetUsingASCII = (chara) => {
    let num = chara.charCodeAt() 
    if (num >= 65 && num <= 90) {
        console.log(`The ascii value of the upper case character ${chara} is ${num}`);
    }
    else if (num >= 97 && num <= 122) {
        console.log(`The ascii value of the lower case character ${chara} is ${num}`);
    }
    else if ((num >= 32 && num <= 47) ||
            (num >= 58 && num <= 64) || 
            (num >= 91 && num <= 96) || 
            (num >= 123 && num <= 126)) {
        console.log(`The ascii value of the special character ${chara} is ${num}`);
    }
}
checkIfAlphabetUsingASCII(chara);

/*Output:

The ascii value of the special character $ is 36
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\022_upperlowerorspecial.js
The ascii value of the lower case character d is 100*/

 