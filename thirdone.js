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

var w = {"name":"jai","salary":500000,"posi":function (){if(w.salary>100000&&w.salary<150000){console.log("Intern");} else if(w.salary>200000&&w.salary<300000){console.log("assosiate")} else{console.log("you are unique")}}};
w.posi();