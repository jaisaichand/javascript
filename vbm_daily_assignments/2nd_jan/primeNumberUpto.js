function isPrime3(num1){
    var c=0;
    
    for(var i=1;i<num1;i++){
    c=0;
    for(var j=1;j<=i;j++){
    if(i%j==0){
    c=c+1;
    }
    }
    if(c==2){
    console.log(i);
    
    }
    }
    }