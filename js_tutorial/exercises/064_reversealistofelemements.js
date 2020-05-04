//64. Write function that reverses a list, preferably in place.

const reverseArray = (list) => {
    let stringArray = list.map(String).reverse().map(Number);
    console.log(`The reversed array is ${stringArray}`);
} 

reverseArray([1,3,4,5,7]);

/*Ouput:

The reversed array is 7,5,4,3,1*/


