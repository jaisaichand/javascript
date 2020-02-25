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
        tabData = tabData+ "<tr><td><input type='text' class='form-control ip' value='"+val.id+"' readonly></td><td><input class='form-control ip' value='"+val.name+"' readonly></td><td><input class='form-control ip' value='"+val.email+"' readonly></td><td> <input class='form-control ip' value='"+val.phone+"' readonly></td><td> <input class='form-control ip' value='"+val.address.city+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind+")'>cancel</div>"+"</td></tr>";
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
var ttk;

function edit3(param1){
    for(var i=1;i<=4;i++){
        document.getElementById("tb1").children[param1].children[i].children[0].classList.remove("ip");
        document.getElementById("tb1").children[param1].children[i].children[0].removeAttribute("readonly");
    }
    document.getElementById("tb1").children[param1].children[5].children[0].classList.add("d-none");
    document.getElementById("tb1").children[param1].children[5].children[1].classList.remove("d-none");
    //ttk = pen2;
//console.log(pen2);
    //document.querySelector(".ip").classList.remove("ip")
}

function cancelit(ind1){

    document.getElementById("tb1").children[ind1].innerHTML = "<tr><td><input type='text' class='form-control ip' value='"+httVal.response[ind1].id+"' readonly></td><td><input class='form-control ip' value='"+httVal.response[ind1].name+"' readonly></td><td><input class='form-control ip' value='"+httVal.response[ind1].email+"' readonly></td><td> <input class='form-control ip' value='"+httVal.response[ind1].phone+"' readonly></td><td> <input class='form-control ip' value='"+httVal.response[ind1].address.city+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind1+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind1+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind1+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind1+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind1+")'>cancel</div>"+"</td></tr>";
}

function saveit(ind1){
    var fio = [];
    for(var i=0;i<=4;i++){
        fio.push(document.getElementById("tb1").children[ind1].children[i].children[0].value);
    }
    document.getElementById("tb1").children[ind1].innerHTML = "<tr><td><input type='text' class='form-control ip' value='"+fio[0]+"' readonly></td><td><input class='form-control ip' value='"+fio[1]+"' readonly></td><td><input class='form-control ip' value='"+fio[2]+"' readonly></td><td> <input class='form-control ip' value='"+fio[3]+"' readonly></td><td> <input class='form-control ip' value='"+fio[4]+"' readonly></td><td><div class='row' id='prim'> <span class='col-md-3' ><a href='view1.html?id="+ind1+"'><i class='fas fa-eye'></i></a></span><span class='col-md-3' onclick='edit3("+ind1+")'><i class='fas fa-pencil-alt'></i></span><span class='col-md-3' onclick='delete1("+ind1+")'><i class='fas fa-trash'></i></span></div> <div id='sec' class='row d-none'><button class='col-md-5 btn btn-sm btn-success' onclick='saveit("+ind1+")'>save</button><button class='btn btn-danger col-md-5 offset-md-1' onclick='cancelit("+ind1+")'>cancel</div>"+"</td></tr>";

var ob1 = {
    id:document.getElementById("tb1").children[ind1].children[1].children[0].value
}
    var ttyy = new XMLHttpRequest();
ttyy.open("POST","https://jsonplaceholder.typicode.com/users");
ttyy.responseType = "json";
ttyy.send(ob1);
ttyy.onload = function(){
console.log(ttyy.response);
}
}