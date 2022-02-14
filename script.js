//form-2
function jscript1(){
var uname=document.forms["myform2"]["uname"].value;
var mail=document.forms["myform2"]["mail"].value;
var pass=document.forms["myform2"]["pass"].value;
var cp=document.forms["myform2"]["cp"].value;

if(uname==null || uname==""){
document.getElementById("errorBox").innerHTML=alert("Enter UserName");
return false;
}

if(mail==null || mail==""){
document.getElementById("errorBox").innerHTML=alert("Enter EmailId");
return false;
}

if(pass==null || pass==""){
document.getElementById("errorBox").innerHTML=alert("Enter UserPassword");
return false;
}

if(cp==null || cp==""){
document.getElementById("errorBox").innerHTML=alert("Re-Type Password");
return false;
}

if(pass != cp){
document.getElementById("errorBox").innerHTML=alert("Password Dont Match");
return false;
}

if(uname!="" && mail!="" && pass!="" && cp!=""){
alert("Registration Sucessfull");
}
}

function darkMode() {
       var element = document.body;
       element.classList.toggle("dark-mode");
   }