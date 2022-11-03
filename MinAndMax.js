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

let array = [];
for(let i = 0; i < 5; i++){
    array[i] = (parseInt(Math.random() * 1000) % 900 + 100);
}
console.log("Five random numbers are ",array);
let getMinAndMax = minAndMax(array);
console.log("Minimum number by them : ",getMinAndMax[0]);
console.log("Maximum number by them : ",getMinAndMax[1]);