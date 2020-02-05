var user_id,name,password,email,mobile,str1,str2,dist,city,country,website1;
var data1={};
var httVal;
var fun1;
function submit1(){

   
    


    user_id = document.getElementById("id1");
    name = document.getElementById("name1");
    password = document.getElementById("password1");
    email = document.getElementById("email1");
    mobile = document.getElementById("mobile1");
    str1 = document.getElementById("str1");
    str2 = document.getElementById("str2");
    dist = document.getElementById("dist1");
    city = document.getElementById("city1");
    country = document.getElementById("country1");
    website1 = document.getElementById("website1");
    data1 = {
        id:user_id.value,
        name:name.value,
        username:name.value,
        email:email1.value,
        address:{
            street:str1.value,
            suite:str2.value,
            city:city.value
        },
        phone:mobile.value,
        website: website1.value
    }
    httVal = new XMLHttpRequest();
    httVal.open("POST","https://reqres.in/api/users");
    httVal.responseType = "json";
    httVal.send(data1);
    httVal.onload = function(){
      var opt = httVal.response;
      console.log(opt);
    }

    
    

}