var httVal;
var ger;
httVal = new XMLHttpRequest();
httVal.open("GET","https://jsonplaceholder.typicode.com/users");
httVal.responseType = "json";
httVal.send();
var tabData="";
var resp;
httVal.onload = function(){
     resp = httVal.response;
     var ttt  = "";
     var fer;
    resp.forEach(function(val,ind) {
        ttt = JSON.stringify(val);
        
        tabData = tabData+ "<tr><td>"+val.id+"</td><td>"+val.name+"</td><td>"+val.email+"</td><td>"+val.phone+"</td><td>"+val.address.city+"</td><td class='row'><span class='col-md-4' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-4' onclick='modalVal("+ttt+")' data-toggle='modal' data-target='#exampleModal'><i class='fas fa-pencil-alt'></i></span><span class='col-md-4' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span>"+"</td></tr>";
    });
    document.getElementById("tb1").innerHTML = tabData;
}
var http1;
function delete1(id1){
    ger = id1;
    var url1 = ""
    var ident = document.getElementById("tb1")
    ident.children[ger].classList.add("d-none");
    url1 = "https://jsonplaceholder.typicode.com/users/"+(ger+1);
     http1 = new XMLHttpRequest();
    http1.open("DELETE",url1);
    http1.responseType = "json";
    http1.send();
    http1.onload = function(){
        console.log(http1.response);
    }
}
    
function modalVal(val1){

    //console.log(val1.id);  worked
    //fer = JSON.parse(val1.id);
    document.getElementById("exampleModalLabel").innerHTML = "Edit details of ID "+val1.id;
    //console.log(val1.name);
    var ggg = "<span>Name</span><input type='text' class='form-control' value='"+val1.name+"'>"+"<br><span>Email</span><input class='form-control' type='text' value='"+val1.email+"'><br><span>Phone</span><input class='form-control' type='text' value='"+val1.phone+"'><br><span>City</span><input class='form-control' type='text' value='"+val1.address.city+"'>";
    document.getElementById("mbody").innerHTML = ggg;
}
var name1,email1,phone1,city1,tabrow1;
function save1(){
     name1 = document.getElementById("mbody").children[1].value;
     email1 = document.getElementById("mbody").children[4].value;
     phone1 = document.getElementById("mbody").children[7].value;
     city1 = document.getElementById("mbody").children[10].value;
     tabrow1 = "<tr><td>1</td>"+"<td>"+name1+"</td>"+"<td>"+email1+"</td>"+"<td>"+phone1+"</td>"+"<td>"+city1+"</td>";

     var httVal1 = new XMLHttpRequest();
     httVal1.open("POST","https://jsonplaceholder.typicode.com/users");
     httVal1.responseType = "json";
     httVal1.send(tabrow1);
     httVal1.onload = function(){
         console.log(httVal1.response);
     }
}

document.getElementById("mbody").appendChild(tabrow1);