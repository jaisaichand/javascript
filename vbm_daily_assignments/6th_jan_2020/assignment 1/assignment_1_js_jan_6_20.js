function fun1(){
    var w = document.getElementById("username");
    var ww = w.value;
    if(isNaN(ww)){
        console.log("not a number")
    }
    else{
        console.log("valid entry");
    }
}

function fun2(){
    var w = document.getElementById("password");
    var ww = w.value;
    if(isNaN(ww)){
        console.log("valid entry");
    }
    else{
        console.log("not a charector");
    }
}

function fun3(){
    var w = document.getElementById("username").value;
    var ww = document.getElementById("password").value;
    console.log("username is "+w);
    console.log("password is "+ww);
}

function fun4(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}