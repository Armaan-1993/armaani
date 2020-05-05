//61. Roots of a quadratic equation

const quadraticEquationRoots = (a ,b ,c) => {
    let root1 = (-1 * b + Math.sqrt(Math.pow(b ,2) - (4 * a * c))) / (2 * a);
    let root2 = (-1 * b - Math.sqrt(Math.pow(b ,2) - (4 * a * c))) / (2 * a);
    console.log(`The roots of the quadratic equation with coefficients ${a},${b} and ${c} are ${root1} and ${root2}`);
}

quadraticEquationRoots(2 ,5 ,3);

/*Output:

The roots of the quadratic equation with coefficients 2,5 and 3 are -1 and -1.5*/



