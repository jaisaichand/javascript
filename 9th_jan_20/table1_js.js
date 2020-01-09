var stu = [
    {sid:001,sname:'sai',grade:'A'},
    {sid:002,sname:'ram',grade:'B'},
    {sid:003,sname:'pranay',grade:'C'},
    {sid:004,sname:'vbm',grade:'D'},
    {sid:005,sname:'info',grade:'E'},
    {sid:006,sname:'tech',grade:'F'},
    {sid:007,sname:'html',grade:'G'},
    {sid:008,sname:'css',grade:'H'}
]
function gen(){
var elem = "";
var t = document.getElementById("tbody");
stu.forEach(function(val,ind){
    
    elem = elem + "<tr><td>"+val.sid+"</td> <td>"+val.sname+"</td><td>"+val.grade+"</td></tr>";
    
});
t.innerHTML = elem;
}