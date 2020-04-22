//18. Write a program that prints the next 20 leap years.

const year = 2020;
console.log(`The next 20 leap years are : \n `)
const leapYear = (year) => {
    for(let i = year; i <= year + 80; i++) {
        if ((i % 4 === 0) || (i % 400 === 0)) { 
            return true;
        } else {
            return false;
        }   
    }
}
for (let i = year; i <= year + 80; i++) {
    if (leapYear(i) === true) {
        console.log(`${i + 4}`)
    } 
}                      


/*Output:

The next 20 leap years are : 
 
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
2100
2104*/







