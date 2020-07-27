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
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//Validate Email
function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//CheckRequired
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "Is Required");
    } else {
      showSuccess(input);
    }
  });
}

//CheckValid
function checkValid(input) {
  if (!isValid(input.value)) {
    showError(input, "Please Enter a vaild Email");
  } else {
    showSuccess(input);
  }
}

//checkLength
function checkLength(input, min, max) {
  if (input.value.length < min) {
    console.log(input.id);
    showError(
      input,
      `mininmum length of ${input.id} should be ${min} character`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `maximum length of ${input.id} should be ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
//Pasword are the same or not

function checkPasswordMatch(input1, input2) {
  if (input1.value != input2.value) {
    showError(input2, "Passwords donot match");
  }
}
//EventListeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   if (username.value == "") {
  //     console.log("empty");
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value == "") {
  //     console.log("empty");
  //     showError(email, "Email is required");
  //   } else if (!isValid(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value == "") {
  //     console.log("empty");
  //     showError(password, "Please Enter the Password");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value == "") {
  //     console.log("empty");
  //     showError(password2, "Please Confirm the Password");
  //   } else {
  //     showSuccess(password2);
  //   }

  //Refactoring the solution
  checkRequired([username, email, password, password2]);
  checkValid(email);
  checkLength(username, 3, 10);
  checkLength(password, 6, 9);
  checkPasswordMatch(password, password2);
});
