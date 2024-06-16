let input = document.getElementById("input");
let password = document.getElementById("paws");
let loginButton = document.getElementById("login-btn");

let eyeIcon = document.getElementById("eye-icon");

let icon = true;
eyeIcon.addEventListener("click", () => {
  if (icon) {
    password.type = "text";
    eyeIcon.innerHTML = "&#xf070;";
    icon = false;
  } else {
    password.type = "password";
    eyeIcon.innerHTML = "&#xf06e;";
    icon = true;
  }
});

loginButton.addEventListener("click", () => {
    let getUsername = localStorage.getItem("username")
    let getPaws = localStorage.getItem("password")
    if(input.value == getUsername && password.value == getPaws){
        window.location = "successloginmsg.html"
    }
    else{
        window.location = "failedmsg.html"
    }
})