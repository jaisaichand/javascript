var a = [1,2,3,4,5];
var b = a.toString();
console.log(b);

var b = a.join("&");
console.log(b);

a.push(6);
console.log(a);
a.unshift(0);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);

console.log(a.length);

a.splice(2,0,10,11);
console.log(a);
a.splice(2,2);
console.log(a);

var b = [9,4,33,29];

var f = a.concat(b);
console.log(f);

var feee = a.slice(1,3);
console.log(feee);

var h = [];
a.forEach(function(v,i){
    if(v%2==0){
        h.push(v);
    }
});

var h1 =[];
var h2 = a.map(function(v,i){
    return v*i;
});

var h3 = a.filter(function(v,i){
    return v>4;
});

var h4 = a.indexOf(3);
var h5 = a.lastIndexOf(5);