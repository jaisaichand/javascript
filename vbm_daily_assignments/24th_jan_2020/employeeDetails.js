var EmployeeDets = function(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;

    var salaryF = function(){
        var base_sal = 10000;
        console.log(base_sal+salary);
    }

    this.EmployeeDetails = function(){
        console.log("id is "+this.id+" name is "+this.name);
        salaryF();
    }
    
}

var e1 = new EmployeeDets(1,"elon",9999999);
e1.EmployeeDetails();