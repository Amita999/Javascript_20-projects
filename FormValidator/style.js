const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//showError
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//showSusccess
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//EventListeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value == "") {
    console.log("empty");
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value == "") {
    console.log("empty");
    showError(email, "Email is required");
  } else {
    showSuccess(email);
  }

  if (password.value == "") {
    console.log("empty");
    showError(password, "Please Enter the Password");
  } else {
    showSuccess(password);
  }

  if (password2.value == "") {
    console.log("empty");
    showError(password2, "Please Confirm the Password");
  } else {
    showSuccess(password2);
  }
});
