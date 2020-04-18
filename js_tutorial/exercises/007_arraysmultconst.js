//7. Multiple each element of an array with a constant and print the result

let array = [2,13,34,1,5];
const multiplyArrayConst = (array) => {
    for(let i = 0; i < array.length; i++) {
        product = array[i] * 5 ;
        console.log("The product of the element " + array[i] + " with the constant 5 is " + product);
    }
}
multiplyArrayConst(array);

// Alternative Method

let array = [2,13,34,1,5];
let i = 0;
const multiplyArrayConst = (array) => {
    console.log("The product of the element " + array[i] + " with the constant 5 is " + array[i]*5);
    i++;
}
for(let i = 0; i < array.length; i++) {
    multiplyArrayConst(array);
}

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\007_arraysmultconst.js
The product of the element 2 with the constant 5 is 10
The product of the element 13 with the constant 5 is 65
The product of the element 34 with the constant 5 is 170
The product of the element 1 with the constant 5 is 5
The product of the element 5 with the constant 5 is 25*/
