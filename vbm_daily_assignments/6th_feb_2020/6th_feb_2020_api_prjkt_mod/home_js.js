var httVal;
var ger;
httVal = new XMLHttpRequest();
httVal.open("GET","https://jsonplaceholder.typicode.com/users");
httVal.responseType = "json";
httVal.send();
var tabData="";
httVal.onload = function(){
    var resp = httVal.response;
    resp.forEach(function(val,ind) {
        tabData = tabData+ "<tr><td>"+val.id+"</td><td>"+val.name+"</td><td>"+val.email+"</td><td>"+val.phone+"</td><td>"+val.address.city+"</td><td class='row'><span class='col-md-4' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-4' onclick='edit1("+ind+")'> <i class='fas fa-pencil-alt'></i></span><span class='col-md-4' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span>"+"</td></tr>";
    });
    document.getElementById("tb1").innerHTML = tabData;
}
var http1;
function delete1(id1){
    ger = id1;
    var url1 = ""
    var ident = document.getElementById("tb1")
    ident.children[ger].classList.add("d-none");
    alert("Record Deletion Successful");
    url1 = "https://jsonplaceholder.typicode.com/users";
     http1 = new XMLHttpRequest();
    http1.open("GET",url1);
    http1.responseType = "json";
    http1.send();
    http1.onload = function(){

    }
}
var http2;
var tabdata2;
var prevD_data,prevD;
function edit1(value1){
     var tt = document.getElementById("tb1").children[value1];

     http2 = new XMLHttpRequest();
    http2.open("GET","https://jsonplaceholder.typicode.com/users");
    http2.responseType = "json";
    http2.send();
    prevD_data = value1;
    http2.onload = function(){

    prevD = document.getElementById("tb1").children[value1].innerHTML;
     tabData2 = "<tr><td>"+http2.response[value1].id+"</td><td><input type='text' value='"+http2.response[value1].name+"'></td><td><input type='text' value='"+http2.response[value1].email+"'></td><td><input type='text' value='"+http2.response[value1].phone+"'></td><td><input type='text' value='"+http2.response[value1].address.city+"'</td><td class='d-flex'><button class='btn btn-success btn-sm' onclick='confirm1("+value1+")'>Submit</button><button class='btn btn-danger btn-sm' onclick='erase1("+value1+")' >Cancel</button></td></tr>";
    tt.innerHTML = tabData2;
    
}
}
var edd = [];
function confirm1(b){
    var ted = document.getElementById("tb1").children[b];
edd.push(document.getElementById("tb1").children[1].children[0].innerHTML);

for(var i=1;i<=4;i++){
    edd.push(ted.children[i].children[0].value);
}

var tabData2 = "<tr><td>"+edd[0]+"</td><td>"+edd[1]+"</td><td>"+edd[2]+"</td><td>"+edd[3]+"</td><td>"+edd[4]+"</td><td class='row'><span class='col-md-4' ><a href='view1.html?id="+b+"'><i class='fas fa-eye'></i></a></span><span class='col-md-4' onclick='edit1("+b+")'> <i class='fas fa-pencil-alt'></i></span><span class='col-md-4' onclick='delete1("+b+")'><i class='fas fa-trash'></i></span>"+"</td></tr>";

document.getElementById("tb1").children[b].innerHTML = tabData2;
}

function erase1(c){
    document.getElementById("tb1").children[c].innerHTML = prevD;
}