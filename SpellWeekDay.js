const WEEK_DAY_SPELLINGS = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};

const readline = require("readline-sync");

let weekDay = Number(readline.question("Enter week day : "));
if(WEEK_DAY_SPELLINGS[weekDay]){
    console.log("You entered " + weekDay + " and it is " + WEEK_DAY_SPELLINGS[weekDay]+".");
} else{
    console.log("You did not enterd correct week day.");
}
