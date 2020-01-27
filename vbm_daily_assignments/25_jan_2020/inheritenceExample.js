var Person = function(a,b){
    this.a = a;
    this.b=b;
    this.lab = function(){
        console.log("addition is "+(this.a+this.b));
    }
}

var Frill = function(k,l){
    this.k = k;
    this.l = l;
    this.lab2 = function(){
        console.log("Add of second is "+(this.k+this.l))
    }
    
}
var ob1 = new Frill(3,4);
var ob1__proto__ = new Person(1,2);
ob1.lab2();
ob1__proto__.lab();