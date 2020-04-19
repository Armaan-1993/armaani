//19. Write a program to check if a character is a vowel or consonant

const chara = "a";
const vowel = (chara) => {
    if(chara === "a" || chara === "e" || chara === "i " || chara === "o" || chara === "u") {
        console.log("The character is a vowel");
    }
  else {
        console.log("The character is a consonant");
    }    
}
vowel(chara);

/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\019_vowel.js
The character is a consonant
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\019_vowel.js
The character is a vowel*/

