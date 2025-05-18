const sumAll = function(a, b) {
let sum = 0;
let smallest = Math.min(a, b);
let largest = Math.max(a, b);

if(smallest < 0) return "ERROR";
if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";


for (let i = smallest; i <= largest; i++){
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
