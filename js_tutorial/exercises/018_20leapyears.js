//18. Write a program that prints the next 20 leap years.

const year = 2020;
const leapYear = (year) => {
    let num = 2100;
    isLeapYear = false;
    console.log(`\nThe next 20 leap years are \n`);
    for(let i = 2020; i <= num; i++) {
        if (i % 4 === 0) {
            isLeapYear = true;
            console.log(`${i}`); 
        }   
    }
}
leapYear(year);

/*Output:

The next 20 leap years are 

2020
2024
2028
2032
2036
2040
2044
2048
2052
2056
2060
2064
2068
2072
2076
2080
2084
2088
2092
2096
2100*/





