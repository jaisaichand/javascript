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
        tabData = tabData+ "<tr><td>"+val.id+"</td><td>"+val.name+"</td><td>"+val.email+"</td><td>"+val.phone+"</td><td>"+val.address.city+"</td><td class='row'><span class='col-md-4' ><a href='view1.html?id="+ind+"'><i class='fas fa-eye'></i></a></span><span class='col-md-4'><a href='edit1.html?id="+ind+"'><i class='fas fa-pencil-alt'></i></a></span><span class='col-md-4' onclick='delete1("+ind+")'><i class='fas fa-trash'></i></span>"+"</td></tr>";
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