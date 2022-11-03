months = [
    ["jan", "january", "1", "01"], ["feb", "february", "2", "02"], ["mar", "march", "3", "03"], ["apr", "april", "4", "04"], 
    ["may", "5", "05"], ["jun", "june", "6", "06"], ["july", "jul", "7", "07"], ["august", "aug", "8", "08"], 
    ["september", "sep", "sept", "9", "09"], ["october", "oct", "10"], ["november", "nov", "11"], ["december", "dec", "12"]
];

let day = parseInt(process.env.DAY);
let month = null;
for(let i = 0; i < 12; i++){
    if(months[i].indexOf(process.env.MONTH) >= 0){
        month = i + 1;
    }
}

function isCorrectDay(){
    if(4 == month || month == 5 || (month == 3 && day >= 20) || (month == 6 && day <= 20)){
        return true;
    }
    return false;
}

console.log(isCorrectDay());