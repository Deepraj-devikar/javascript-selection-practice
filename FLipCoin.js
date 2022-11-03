const HEAD = "HEAD";
const TAIL = "TAIL";

function flipCoin(){
    return Math.floor(Math.random() * 10 % 2) == 0 ? HEAD : TAIL;
}

console.log("I flip the coin and I got " + flipCoin());