//40. Perfect number or not

const perfectNum = (num) => {
    let sum = 0; 
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    }      
    if (num === sum) {
        return (`The number ${num} is a perfect number`);
    } else {
        return (`The number ${num} is not a perfect number`);
    } 
} 

console.log(perfectNum(6));

/*Ouput:

The number 6 is a perfect number*/