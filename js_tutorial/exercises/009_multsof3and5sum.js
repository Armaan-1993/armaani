/*9. Modify the previous program such that only multiples of three or five are considered in
 the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17*/

let number = 2;
const sumOfNNum = (num) => {
    sum = 0;
    isMultiple = false;
    for(i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            isMultiple = true;
            sum += i;
        }    
    }
    if(isMultiple === true) {
        console.log("The sum of the multiple of 3 or 5 from 1 to the given number " + num+ " is " + sum);
    } else {
    console.log("There are no multiples of 3 or 5 in the given number " + num + " . Hence sum cannot be found");
    }
}
sumOfNNum(number);


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\009_multsof3and5sum.js
The sum of the multiple of 3 or 5 from 1 to the given number 13 is 45
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\009_multsof3and5sum.js
The sum of the multiple of 3 or 5 from 1 to the given number 11 is 33
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\009_multsof3and5sum.js*/
