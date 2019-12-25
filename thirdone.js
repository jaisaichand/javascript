var dee = [{"name":"jai","m1":99,"m2":99,"m3":99,"total":297},{"name":"shiva","m1":95,"m2":95,"m3":95,"total":285},{"name":"raj","m1":96,"m2":96,"m3":96,"total":288},{"name":"venky","m1":94,"m2":94,"m3":94,"total":282},{"name":"pranay","m1":90,"m2":90,"m3":90,"total":270}];


function doit(f){
    f.forEach(function(v,i){
    console.log ({"name":v.name,"total":(v.m1+v.m2+v.m3)});
});

}

doit(dee);



//Using Map

var tt = dee.map(function(v,i){
    return ({"name":v.name,"total":(v.m1+v.m2+v.m3)});
    });

//salary

var dee = [{"name":"jai","salary":1200000},{"name":"shiva","salary":128050},{"name":"raj","salary":200010},{"name":"venky","salary":11282},{"name":"pranay","salary":170000}];

function decide(name1,total1){
    if(total1<100000){
    console.log(name1+" is a Intern");
    }
    else if(total1>200000){
    console.log(name1+" is a developer")
    }
    else{
    console.log(name1+" is unique, I mean you doesnt come under any category.");
    }
    }

    dee.forEach(function(v,i){
        decide(v.name,v.salary);
        });