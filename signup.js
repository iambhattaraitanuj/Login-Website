let input = document.getElementById("input");
let password = document.getElementById("paws");
let email = document.getElementById("email");
let signupButton = document.getElementById("signup-btn");
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

signupButton.addEventListener("click", () => {
  let emailRequirement = /@gmail.com/;
  let checkEmail = emailRequirement.test(email.value);
  if (input.value === "" || password.value === "" || email.value === "") {
    alert("You must fulfill all the inputs!");
  } else {
    if (checkEmail) {
      window.location = "accountcreatedmsg.html";
      localStorage.setItem("username", input.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
    } else {
      email.style.border = "2px solid rgb(179, 23, 23)"
    }
  }
});
