// Elements

// Password One Authenticators
const eightCharsOne = document.getElementById("8-chars-1");
const captOne = document.getElementById("capt-1");
const numOne = document.getElementById("num-1");
const specialCharOne = document.getElementById("special-char-1");

// Password Two Authenticators
const eightCharsTwo = document.getElementById("8-chars-2");
const captTwo = document.getElementById("capt-2");
const numTwo = document.getElementById("num-2");
const specialCharTwo = document.getElementById("special-char-2");

// Passwords
const passwordOne = document.getElementById("password-1");
const passOneError = document.getElementById("password-1-err");
const passwordTwo = document.getElementById("password-2");
const passTwoError = document.getElementById("password-2-err");

// Toggle sections
// USE ID
const signUpToggleButton = document.getElementById("auth-page-sign-up-btn");
const loginToggleButton = document.getElementById("auth-page-log-in-btn");
// PAGES
const signUpPage = document.getElementById("signup-page");
const loginPage = document.getElementById("login-page");
const authSuccessPage = document.getElementById("auth-success-page");
// PAGE BUTTONS
const bigSignupBtn = document.getElementById("big-signup-btn");
const bigLoginBtn = document.getElementById("big-login-btn");
const authPageButtons = document.querySelector(".auth-page-btns");

// SET LISTENERS
bigSignupBtn.addEventListener("click", signUpUser);
bigLoginBtn.addEventListener("click", loginUser);

// PAGE BUTTON FUNCTIONS
function signUpUser() {
  // GET EMAIL
  // GET FIRST PASSWORD
  // GET SECOND PASSWORD
  // AUTHENTICATE
  // NAVIGATE TO AUTH-SUCCESS PAGE
  navToAuthSuccess();
}

function loginUser() {
  // GET EMAIL
  // GET PASSWORD
  // AUTHENTICATE
  // NAVIGATE TO AUTH-SUCCESS PAGE
  navToAuthSuccess();
}

function navToAuthSuccess() {
  authPageButtons.style.display = "none";
  loginPage.style.display = "none";
  signUpPage.style.display = "none";
  authSuccessPage.style.display = "block";
}

// Toggle
signUpToggleButton.addEventListener("click", function () {
  // TOOGLE ACTIVE
  signUpToggleButton.classList.add("active-btn");
  signUpToggleButton.classList.remove("inactive-btn");
  loginToggleButton.classList.remove("active-btn");
  // SET LOGIN BTN TO INACTIVE
  loginToggleButton.classList.add("inactive-btn");
  // MAKE LOGIN PAGE INVISIBLE
  loginPage.style.display = "none";
  // MAKE AUTH PAGE INVISIBLE
  authSuccessPage.style.display = "none";
  // MAKE SIGNUP PAGE VISIBLE
  signUpPage.style.display = "block";
});

loginToggleButton.addEventListener("click", function () {
  // TOOGLE ACTIVE
  loginToggleButton.classList.add("active-btn");
  loginToggleButton.classList.remove("inactive-btn");
  signUpToggleButton.classList.remove("active-btn");
  // SET SIGNUP BTN TO INACTIVE
  signUpToggleButton.classList.add("inactive-btn");
  // MAKE LOGIN PAGE INVISIBLE
  signUpPage.style.display = "none";
  // MAKE AUTH PAGE INVISIBLE
  authSuccessPage.style.display = "none";
  // MAKE LOGIN PAGE VISIBLE
  loginPage.style.display = "block";
});

function authenticatePass(value, char, caps, nums, spchar) {
  if (value.length < 8) {
    char.classList.add("error");
    char.classList.remove("success");
  } else {
    char.classList.remove("error");
    char.classList.add("success");
  }

  if (value.search(/[A-Z]/) === -1) {
    caps.classList.add("error");
    caps.classList.remove("success");
  } else {
    caps.classList.remove("error");
    caps.classList.add("success");
  }

  if (value.search(/[0-9]/) === -1) {
    nums.classList.add("error");
    nums.classList.remove("success");
  } else {
    nums.classList.remove("error");
    nums.classList.add("success");
  }

  if (value.search(/[%$&^@#!]/) === -1) {
    spchar.classList.add("error");
    spchar.classList.remove("success");
  } else {
    spchar.classList.remove("error");
    spchar.classList.add("success");
  }
}

passwordOne.addEventListener("blur", () => {
  authenticatePass(
    passwordOne.value,
    eightCharsOne,
    captOne,
    numOne,
    specialCharOne
  );
});

passwordTwo.addEventListener("blur", () => {
  authenticatePass(
    passwordTwo.value,
    eightCharsTwo,
    captTwo,
    numTwo,
    specialCharTwo
  );
});
