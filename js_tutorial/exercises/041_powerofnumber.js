//41. Find the power of a number

let count = 0;
const base = 2;
const powerOfNumber = (num ,count) => {
    let turns = count;
    let number = num;
    if (number / base !== 1) {
        turns = turns + 1;
        number = number / base;
        powerOfNumber(number ,turns);
    } else if (number / base === 1) {
        console.log(`Power of the number for its base as ${base} is ${turns+1}`);
    }
}

powerOfNumber(32 ,0);


/*Output:

Power of the number for its base as 2 is 5*/
