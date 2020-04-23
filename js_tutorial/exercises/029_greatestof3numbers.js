//29. Greatest of three numbers

const num1 = 67;
const num2 = 34;
const num3 = 97;
const greatestOfThreeNumbers = (a ,b ,c) => {
    if ((a > b) && (a > c)) {
        return (`The number ${a} is greatest of all the three numbers`);
    } else if ((b > a) && (b > c)) {
        return (`The number ${b} is greatest of all the three numbers`);
    } else if ((c > a) && (c > b)) {
        return (`The number ${c} is greatest of all the three numbers`);
    }
}   

console.log(greatestOfThreeNumbers(num1 ,num2 ,num3));


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\029_greatestof3numbers.js
The number 97 is greatest of all the three numbers*/