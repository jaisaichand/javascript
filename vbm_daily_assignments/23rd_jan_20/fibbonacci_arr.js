var inp = 100;
var tp = [0,1];
var v;

for(i=2;i<30;i++){
    v=tp[(i-2)]+tp[(i-1)];
    tp.push(v);
}

tp.forEach(function(v,i){
    console.log(tp[i]);
});