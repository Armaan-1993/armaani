//6. Find the sum of elements in a given array. Array should be an input to the program

let array = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
const sumOfElements = (num) => {
let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }
    console.log("The sum of all the elements of the array is " + sum);
}

sumOfElements(array);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\006_sumofarrayelements.js
The sum of all the elements of the array is 55*/


