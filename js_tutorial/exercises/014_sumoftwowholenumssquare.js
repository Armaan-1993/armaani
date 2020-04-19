//14. **Write program to check if number can be expressed as sum of squares of two whole numbers**

const num = 8;
const squaresOfWholeNums = (num) => {
    let isSumOfSquares = false;
    for(i = 1; i <= num; i++) {
        for(j = 1; j <= num; j++) {
            if (num === i**2 + j**2) {
                isSumOfSquares = true;
            }    
        }
    }
   if (isSumOfSquares === true) {
        console.log(`The number ${num} is the sum of squares of two numbers`);
    }
   else {
        console.log(`The number ${num} is not the square of two numbers`);
    } 

}   
squaresOfWholeNums(num);


/*Output:

The number 1000 is the sum of squares of two numbers
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\014_sumoftwowholenumssquare.js
The number 8 is the sum of squares of two numbers*/
