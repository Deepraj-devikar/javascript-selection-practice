const readline = require("readline-sync");

let number = Number(readline.question("Enter number : "));
if(Math.floor(number / 10) == 0){
    console.log("Unit");
} else if(Math.floor(number / 100) == 0){
    console.log("Ten");
} else if(Math.floor(number / 1000) == 0){
    console.log("Hundred");
} else if(Math.floor(number / 100000) == 0){
    console.log("Thousand");
} else if(Math.floor(number / 10000000) == 0){
    console.log("Lack");
} else {
    console.log("Crore");
}