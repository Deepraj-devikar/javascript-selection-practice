function feetToInch(feet){
    return (feet * 12) + " inches";
}

function feetToMeter(feet){
    return (feet * 0.3048) + " meters";
}

function inchToFeet(inch){
    console.log(inch / 12);
    return (inch / 12) + " feets";
}

function meterToFeet(meter){
    return (meter * 3.28084) + " feets";
}

const readline = require("readline-sync");

console.log(" 1) Feet To Inch \n 2) Feet To Meter \n 3) Inch To Feet\n 4) Meter To Feet\n");
let feet;
let inch;
let meter;
switch (Number(readline.question("Please enter your unit conversion option here : "))) {
    case 1:
        feet = Number(readline.question("Enter feets : "));
        console.log(feet+" feets will be "+feetToInch(feet)+" inches");
        break;
    case 2:
        feet = Number(readline.question("Enter feets : "));
        console.log(feet+" feets will be "+feetToMeter(feet)+" meters");
        break;
    case 3:
        inch = Number(readline.question("Enter inches : "));
        console.log(inch+" inches will be "+inchToFeet(inch)+" feets");
        break;
    case 4:
        meter = Number(readline.question("Enter meters : "));
        console.log(meter+" meters will be "+meterToFeet(meter)+" feets");
        break;
    default:
        console.log("Please enter correct option");
        break;
}
