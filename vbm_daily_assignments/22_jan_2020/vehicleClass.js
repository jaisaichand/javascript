
//class using class keyword
class Vehicle{
    id=1;
    vname="Tesla";
    vModel="Model 3";
    fuel ="Electrical";
    }
    
    var veh1 = new Vehicle();
    console.log(veh1.vname);


    //Class Using function
var Vehicle1 = function(){
    this.id=2;
    this.vname="Tesla";
    this.vModel="Model X";
    this.fuel ="Electrical";
    
    
}

var veh2 = new Vehicle1();
var veh3 = new Vehicle1();
veh2.id = 6;
veh3.id= 8;
console.log(veh2.id);
console.log(veh3.id);