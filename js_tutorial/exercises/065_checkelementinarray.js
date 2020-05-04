//65. Write a function that checks whether an element occurs in a list.

const num = 9;
const array = [2,3,1,6,7];
const checkElementInArray = (num) => {
    let checkNumber = num;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === checkNumber) {
            return true;
        }
    }
    return false;
}

if (array.includes(num)) {   //using array.include() functuon
    console.log(`The number ${num} exists in the array [${array}]`);
} else {
    console.log(`The number ${num} does not exist in the array [${array}]`);
}

/*Ouput:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\065_checkelementinarray.js
The number 6 exists in the array 2,3,1,6,7
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\065_checkelementinarray.js
The number 9 does not exist in the array [2,3,1,6,7]*/




