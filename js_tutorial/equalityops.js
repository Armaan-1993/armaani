function checkequality(num){
if (num===12){                           // to check the equality of the function argument 'num' using 'if statement'
return "The number is correct";
}
return "The number is incorrect";
}
console.log(checkequality('12'));       /* using strict equality operator , it will not convert the operands like the
                                           == operator does. Hence in this case the output will be "The number is incorrect".
                                           However , if it was a == operator , the answer would have been true even if '12' was used*/
//using greater than or equal to and AND / OR statements
function checknumber(number){
if (number<=20 && number>10){
return "The number is either 20 or between 10 and 20";
}
if (number<=50 || number>25){
return "The number is either equal to 50 or between 25 and 50"
}
}
console.log(checknumber(13));             //similarly , the OR statement can be used to see if at least one of the condition is true




