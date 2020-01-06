
function addAll(){
    
    var ai = [];

    ai[0] = document.getElementById("sid").value;
    ai[1] = document.getElementById("sname").value;
    ai[2] = document.getElementById("m1").value;
    ai[3] = document.getElementById("m2").value;
    ai[4] = document.getElementById("m3").value;


    var f = document.createElement("tr");
    var g = [];
    var y = [];
    var sw = 0;
    var cc = document.getElementById("tbody");
    for(var i=0;i<5;i++){
        
        g[i] = document.createElement("td");
        y[i] = document.createTextNode(ai[i]);
        console.log(y[i]);
        g[i].appendChild(y[i]);
        f.appendChild(g[i]);
        cc.appendChild(f);
        if((i>=2)&&(i<=4)){
            sw = sw+parseInt(ai[i]);
        }
    }

    g[5]=document.createElement("td");
    y[5]=document.createTextNode(sw);
    g[5].appendChild(y[5]);
    f.appendChild(g[5]);
    cc.appendChild(f);

    

}

function removeAll(){
    
    document.getElementById("sid").value="";
    document.getElementById("sname").value  ="";
    document.getElementById("m1").value ="";
    document.getElementById("m2").value ="";
    document.getElementById("m3").value ="";
}

function hide(){
    document.getElementById("table_div").style.display = "none";
}

function show(){
    document.getElementById("table_div").style.display = "block";
}