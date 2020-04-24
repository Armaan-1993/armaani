//34. Reverse a given number

const reverseNumber = (num) => {
    arraynum = num.toString().split("").reverse().join().replace(/,/gi ,""); //using regex in replace funtion
    console.log(`The reversed number is ${arraynum}`);
}

reverseNumber(552);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\034_reversenumber.js
The reversed number is 255*/