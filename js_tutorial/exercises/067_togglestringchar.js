//67. Toggle each character in a string

const toggleEachCharacter = (string) => {
    let array = string.split("");    
    console.log(`The toggled string is \n`)
    for (let i = 0; i < array.length; i++) {
        if (array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 90) {
            newstring = array[i].toLowerCase();
        } else if (array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 122) {
            newstring = array[i].toUpperCase();
        }
        console.log(newstring);
    }     
}   

toggleEachCharacter("ARmaaN");

/*Output:

The toggled string is 

a
r
M
A
A
n*/



