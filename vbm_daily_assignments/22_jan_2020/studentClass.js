
//class using class keyword
class Student{
    id=1;
    sname="Jai";
    marks=999;
    grade="A+";
    }
    
    var std = new Student();
    console.log(std.id);


    //Class Using function
var Student1 = function(){
    this.id=2;
    this.sname="Elon";
    this.grade="A++";
}

var std2 = new Student1();
var std3 = new Student1();
std2.id = 6;
std3.id= 8;
console.log(std2.id);
console.log(std3.id);