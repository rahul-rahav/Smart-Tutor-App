var userName = document.getElementById("Uname");
var passWord = document.getElementById("Pass");
var loginBtn = document.getElementById("log");

loginBtn.addEventListener("click", function(){  
var us = userName.value;
var pw = passWord.value;
if(us==="tutor" && pw==="tutor")
{
    window.location="E:/MINI PROJECT/JJ/main.html";
}
else if(us==="rahul" && pw==="088")
{
    window.location="E:/MINI PROJECT/JJ/main.html";
}
else if(us==="kaviya" && pw==="084")
{
    window.location="E:/MINI PROJECT/JJ/main.html";
}
else if(us==="jayasri" && pw==="073")
{
    window.location="E:/MINI PROJECT/JJ/main.html";
}
else{
    alert("Incorrect username or Incorrect password");
}
  });

  

