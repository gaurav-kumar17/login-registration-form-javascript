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
    let email=document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;
    var data = JSON.parse(localStorage.getItem("users"));
    if(data==null || data.length==0)
    {
        alert("No users registered");
        
    }
    else{
       for(var i=0;i<data.length;i++)
       {
        if(email==data[i].email && password==data[i].password)
        {
            alert("Login Successfully");
            break;
        }
        else{
            alert("Invalid Email or Password");
            break;
        }
       }
    }
}


registerForm.addEventListener("submit",registerData);
function registerData(e)
{
    e.preventDefault();
    let name=document.forms["registerForm"]["name"].value;
    let email=document.forms["registerForm"]["email"].value;
    let password = document.forms["registerForm"]["password"].value;

    const user={
        name:name,
        email:email,
        password:password,
    };

    let data=JSON.parse(localStorage.getItem("users"));
    console.log(data);
    
    if(data==null || data.length<=0)
    {
        data=[];
        
    }
    else{
        var check=false;
        for(let i=0;i<data.length;i++)
        {
            if(data[i].email==email)
            {
                check=true;
                break;
            }
        }
      
    }

    if(check==true)
    {
        alert("Email already Exist");
    }
    else{
            
        data.push(user);
        localStorage.setItem("users",JSON.stringify(data));
        alert("Registered Successfully");
    }
}   