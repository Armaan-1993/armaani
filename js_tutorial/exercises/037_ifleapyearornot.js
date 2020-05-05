//37. Leap year or not

const leapYear = (year) => {
    isleapyear = false;
    if (year % 4 === 0 || year % 400 === 0) {
        isleapyear = true;
    } else if (year % 100 === 0) {
        isleapyear = false;
    }    
    if (isleapyear === true) {
        console.log(`The year ${year} is a leap year`);
    } else {
        console.log(`The year ${year} is not a leap year`);
    }
}

leapYear(2200);


/*Ouput:

PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\037_ifleapyearornot.js
The year 2021 is not a leap year
PS C:\Users\armaa\PycharmProjects\Learningjavascript\exercises> node .\037_ifleapyearornot.js
The year 2020 is a leap year*/
