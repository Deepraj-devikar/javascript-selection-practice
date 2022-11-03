function isLeapYear(year){
    if ( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    return false;
}

const readline = require("readline-sync");
  
let year = Number(readline.question("Enter year : "));
console.log(year + " is " + (isLeapYear(year) ? "" : "not ") + "leap year");