const n = 5;
let a = 1;
let b = 1;

for(i=2; i<n; i++){
    if(i%2 === 1){
        a = a+b
    }
    else{
        b = a+b 
    }
}

if(n%2 === 1){
    //return b;
    console.log(b);
}
else{
    //return a;
    console.log(a);
}