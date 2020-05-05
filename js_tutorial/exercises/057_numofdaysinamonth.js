//57. Number of days in a given month of a given year

const year = 2021;
const month = "February";
const numberOfDaysInMonth = (year) => {
    let isleapyear = false;
    let monthIndex;
    let months = ["January" ,"February" ,"March" ,"April" ,"May" ,"June" ,
    "July" ,"August" ,"September" ,"October" ,"November" ,"December"];
    let days = [31 ,28 ,31 ,30 ,31 ,30 ,31 ,31 ,30 ,31 ,30 ,31];
    if (year % 4 === 0 || year % 400 === 0) {
        isleapyear = true;
    } else if (year % 100 === 0) {
        isleapyear = false;
    }
    if (isleapyear === true) {
        monthIndex = months.indexOf(month);
        if (monthIndex === 1) {
            console.log(`The month ${month} has ${days[monthIndex]+1} days in the year ${year}`);
        } else {
            console.log(`The month ${month} has ${days[monthIndex]} days in the year ${year}`);
        }
    } else if (isleapyear === false) {
        monthIndex = months.indexOf(month)
        console.log(`The month ${month} has ${days[monthIndex]} days in the year ${year}`);
    }
}   

numberOfDaysInMonth(year);

/*Output:

The month February has 29 days in the year 2020
The month January has 31 days in the year 2020
The month February has 28 days in the year 2021*/
    

