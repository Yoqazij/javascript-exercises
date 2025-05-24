const fibonacci = function(n) {
let a = 1;
let b = 1;
n = Number(n);

    if (n === 0) return 0;
    if (n < 0) return 'OOPS';

    for(let i=2; i<n; i++){
        if(i%2 === 1){
            a = a+b
        }
        else{
            b = a+b 
        }
    }
    
    if(n%2 === 1){
        return b;
    }
    else{
        return a;
    }
};

// Do not edit below this line
module.exports = fibonacci;
