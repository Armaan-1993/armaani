// Addition of two numbers

let a, b;
const addition = (a , b) => {
    return (a + b);
}
console.log("The sum is " + addition(4, 6));

// Subtraction of two numbers

const subtraction = (a , b) => {
    return (a - b);
}
console.log("The difference is " + subtraction(19, 9));

// Multiplication of two numbers

const product = (a , b) => {
    return (a * b);
}
console.log("The product is " + product(45, 2));

// Division of two numbers (Quotient)

const quotient = (a , b) => {
    return (a / b);
}
console.log("The quotient of the division is " + quotient(50, 10));

// Division of two numbers

const remainder = (a , b) => {
    return (a % b);
}
console.log("The remainder of the division is " + remainder(34, 8));

// Comparison with greater than operator

const greater = (a , b) => {
    if (a > b) {
        return "The first number is greater";
    }
    return "The second number is greater";
}
console.log(greater(3 , 6));

// Comparison with less than operator

const lesser = (a , b) => {
    if (a < b) {
        return "The first number is lesser";
    }
    return "The second number is lesser";
}
console.log(lesser(3 , 6));

// Comparision with equality operator

const equality = (a , b) => {
    if (a == b) {
        return "The numbers are equal";
    }
    return "The numbers are not equal";
}
console.log(equality(34 , 7));




