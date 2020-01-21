var a = [21,46,22,48,220,488,5550,1926];
var len = a.length;
var maxNum = 0;
for(i=0;i<=len;i++){
if(a[i]>maxNum){
maxNum=a[i];
}
}
console.log(maxNum);





/*
var a = [21,46,22,48,220,488,5550,1926];
var len = a.length;
var maxNum = 0;
for(i=0;i<=len;i++){
if(a[i]>maxNum){
maxNum=a[i];
}
}
var minNum = maxNum;

for(j=0;j<=len;j++){
minNum = maxNum;
  if(a[j]<minNum){
minNum = a[j];
}
b.push(minNum);
var ttt = a.indexOf(minNum);
//a.splice(ttt,1);
}
console.log(b[3]);
console.log(a[0]);
*/