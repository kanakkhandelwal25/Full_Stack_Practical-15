let username = document.getElementById("uname");

let email = document.getElementById("email");

let password = document.getElementById("pass");

let pass = document.getElementById("pass2");

let form = document.getElementById("form");

let errMsg = document.getElementsByClassName("error");

let cross1 = document.querySelectorAll("err");

let right1 = document.querySelectorAll("tick");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
});

function res1(){if(username.value.trim() === ""){
    errMsg[0].innertext = "User name cannot be blank";
    username.style.border = "2px solid red";

    cross1[0].style.opacity = "1";
    right1style.opacity = "0";
}
else{
    errMsg[0].innertext = "";
    username.style.border = "2px solid green";

    cross1.style.opacity = "0";
    right1.style.opacity = "1";
}};