function validate1(){
    var a =document.getElementById("inp1").value;
    var b =document.getElementById("inp2").value;
    if(a==""||b==""){
        var t = document.getElementById("div1").classList;
        if(t.contains("d-none")){
            t.remove("d-none");
        }
    }
    else{
        if(t.contains("d-none")){

        }
        else{
            t.add("d-none");
        }
    }
}

function cancel1(){
    var a =document.getElementById("inp1").value="";
    var b =document.getElementById("inp2").value="";
}
function close1(){
    var t = document.getElementById("div1").classList;
    t.add("d-none");
}