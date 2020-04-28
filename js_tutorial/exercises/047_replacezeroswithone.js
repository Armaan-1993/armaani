//47. Replace all 0's with 1 in a given integer

const replaceZerosWithOne = (num) => {
    let stringnum = num.toString();
    let newstring = stringnum.replace(/0/g ,'1'); //using regex in replace function
    console.log(`${num} after replacing its zeroes with ones is ${newstring}`);
}

replaceZerosWithOne(15005);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\047_replacezeroswithone.js
15005 after replacing its zeroes with ones is 15115*/
