const readline = require("readline-sync");

function minAndMax(array){
    let min = array[0];
    let max = array[0];
    array.forEach(element => {
        if(min > element){
            min = element;
        }
        if(max < element){
            max = element;
        }
    });
    return [min, max];
}

let a = Number(readline.question("Enter value for a : "));
let b = Number(readline.question("Enter value for b : "));
let c = Number(readline.question("Enter value for c : "));

let array = [
    a + b * c, 
    a % b + c,
    c + a / b,
    a * b + c
];

console.log("Four values are ",array);
let getMinAndMax = minAndMax(array);
console.log("Minimum value by them : ",getMinAndMax[0]);
console.log("Maximum value by them : ",getMinAndMax[1]);