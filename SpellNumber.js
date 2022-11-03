const NUMBER_SPELLINGS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

const readline = require("readline-sync");
  
let number = Number(readline.question("Enter single digit number : "));
try{
    console.log("You entered " + NUMBER_SPELLINGS[number]+".");
} catch(e){
    console.log("You did not enterd single digit number.");
}
