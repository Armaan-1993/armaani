//25. Find Area of a circle

let radius = 25;
const areaOfCircle = (radius) => {
    const area = (3.14 * radius**2);
    console.log(`The area of the circle with radius ${radius} is ${area}`);
}
areaOfCircle(radius);

/*Output:

The area of the circle with radius 35 is 3846.5
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\025_areaofcircle.js
The area of the circle with radius 25 is 1962.5*/
