let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "icon/visible.png";
  } else {
    password.type = "password";
    eyeicon.src = "icon/eye.png";
  }
});
