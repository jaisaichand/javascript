function isPrime1(num1){
    c=0;
    for(var i=2;i<num1;i++){
    if(c==0){
    if(num1%i==0){
    c=c+1;
    }
    }
    }
    if(c==0){
    console.log(num1+" is prime");
    }
    else{
    console.log(num1+" is not prime");
    }
    }