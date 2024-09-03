
        var a=prompt("Enter 1st word");
var b=prompt("Enter 2nd word");
var s1=a.split("");
var s2=b.split("");
s1.sort();
s2.sort();
let r=s1.toString();
let g=s2.toString();
if(r===g){
    alert("Anagram");
}
else{
    alert("Not an Anagram");
}
