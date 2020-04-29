//55. Quadrants in which coordinates lie

const coordinatesInQuadrants = (x ,y) => {
    if (x === 0 && y === 0) {
        return (`The cordinates ${x},${y} lie at the centre`);
    } else if (x >= 0 && y >= 0) {
        return (`The cordinates ${x},${y} lie in the first quadrant`);
    } else if (x < 0 && y >= 0) {
        return (`The cordinates ${x},${y} lie in the second quadrant`);
    } else if (x < 0 && y < 0) {
        return (`The cordinates ${x},${y} lie in the third quadrant`);
    } else if (x >= 0 && y < 0) {
        return (`The cordinates ${x},${y} lie in the fourth quadrant`);
    }
}

console.log(coordinatesInQuadrants(5 ,4));


/*Output:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\055_quadrantsandcordinates.js
The cordinates 1,-1 lie in the fourth quadrant
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\055_quadrantsandcordinates.js
The cordinates 0,-1 lie in the fourth quadrant
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\055_quadrantsandcordinates.js
The cordinates 0,0 lie at the centre
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\055_quadrantsandcordinates.js
The cordinates 5,4 lie in the first quadrant*/