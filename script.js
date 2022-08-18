let loginForm=document.getElementById("loginForm");
let registerForm=document.getElementById("registerForm");

let loginBtn=document.getElementById("loginToggleBtn");
let registerBtn=document.getElementById("registerToggleBtn");

let formBox=document.getElementById("mainBox");

loginBtn.addEventListener("click",function(){

    loginForm.style.display="block";
    registerForm.style.display="none";

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
})

registerBtn.addEventListener("click",function(){

    loginForm.style.display="none";
    registerForm.style.display="block";

    loginBtn.classList.remove("active");
    registerBtn.classList.add("active");
})


loginForm.addEventListener("submit",loginData);
  
function loginData(e){

  e.preventDefault();
  let userName=document.forms["loginForm"]["username"].value;
  let password = document.forms["loginForm"]["password"].value;
//   var data = JSON.parse(localStorage.getItem("users"));

  console.log(userName,password);
}