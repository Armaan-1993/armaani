/*17. Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their number was too large or too small. 
At the end the number of tries needed should be printed. 
It counts only as one try if they input the same number multiple times consecutively*/

const readlineSync = require("readline-sync");
let guessNum = parseInt(readlineSync.question("Enter the number to be guessed "));
const num = 13;
const guessingGame = (userNum ,count) => {
    if (guessNum === num) {
        console.log(`The guessed number is correct. The number of guesses is ${count}`);
    } else if (guessNum > num) {
        console.log(`The guessed number is too large. Number of guesses is ${count}`);
        guessNum = parseInt(readlineSync.question("Guess again "));
        if (guessNum !== userNum) {
            count = count + 1;
        }
        guessingGame(guessNum ,count);
    } else if (guessNum < num) {
        console.log(`The guessed number is too small. Number of guesses is ${count}`);
        guessNum = parseInt(readlineSync.question("Guess again "));
        if (guessNum !== userNum) {
            count = count + 1;
        }
        guessingGame(guessNum ,count);   
    }  
}

guessingGame(guessNum ,1);


/*Output:

Enter the number to be guessed 23
The guessed number is too large. Number of guesses is 1
Guess again 14
The guessed number is too large. Number of guesses is 2
Guess again 12
The guessed number is too small. Number of guesses is 3
Guess again 1
The guessed number is too small. Number of guesses is 4
Guess again 13
The guessed number is correct. The number of guesses is 5*/
