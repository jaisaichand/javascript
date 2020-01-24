var calElecBill = function(sNumber,uNumber,units,serValue){
    this.sNumber= sNumber;
    this.uNumber = uNumber;
    var units= units;
    this.serValue = serValue;
    var calFinalBill = function(){
        var costPerUnit = 10;
        console.log("Your final bill is "+(costPerUnit*units));
    }
    this.getDetails = function(){
        console.log("Service number is "+this.sNumber+" U number is "+this.uNumber);
        calFinalBill();
    }
  
}

var t1 = new calElecBill(1,1,60,99);
t1.getDetails();
//t1.units=1;
//t1.calFinalBill();