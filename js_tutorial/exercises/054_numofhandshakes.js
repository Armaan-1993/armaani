//54. Maximum number of handshakes

const maxHandShakes = (people) => {
    let handshakes = (people * (people - 1))/2;
    console.log(`The maximum number of handshakes possible for ${people} individuals is ${handshakes}`);
}

maxHandShakes(15);


/*Output:

The maximum number of handshakes possible for 15 individuals is 105*/

