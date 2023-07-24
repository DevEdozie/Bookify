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
const landingPage = document.getElementById("landing-page");
const footerSection = document.getElementById("footer-section");
const authPage = document.getElementById("auth-page");
const signUpPage = document.getElementById("signup-page");
const loginPage = document.getElementById("login-page");
const authSuccessPage = document.getElementById("auth-success-page");
// PAGE BUTTONS
const bigSignupBtn = document.getElementById("big-signup-btn");
const bigLoginBtn = document.getElementById("big-login-btn");
const authPageButtons = document.querySelector(".auth-page-btns");
const returnToHomeButton = document.getElementById("return-to-home");
// GET STARTED BUTTON
const getStartedBtn = document.getElementById("get-started-btn");
// LOGIN AND SIGNUP BUTTONS
const loginButton = document.querySelector(".login-btn");
const signUpButton = document.querySelector(".signup-btn");
const headerAuthButtons = document.getElementById("header-auth-btns");
// USER ICON
const userIcon = document.querySelector(".user-icon");
// CART BUTTON
const cartButton = document.querySelector(".cart_btn");

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDown = document.querySelector(".dropdown-menu");
const regDiv = document.querySelector(".button_container");

toggleBtn.addEventListener("click", () => {
  dropDown.classList.toggle("open");

  const isOpen = dropDown.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

regDiv.addEventListener("click", () => {
  dropDown.classList.remove("open");
  toggleBtnIcon.classList = "fa-solid fa-bars";
});

cartButton.addEventListener("click", addToCart);

// CART BUTTON LISTENER
function addToCart() {
  // IF USER IS NOT SIGNED IN
  displayAuthSignUpPage();
}

// RETURN TO HOME
returnToHomeButton.addEventListener("click", returnToHome);

function returnToHome() {
  authPage.style.display = "none";
  landingPage.style.display = "block";
  footerSection.style.display = "block";
}
// SET LISTENERS
bigSignupBtn.addEventListener("click", signUpUser);
bigLoginBtn.addEventListener("click", loginUser);

// AUTH PAGE DISPLAY ACTIONS
getStartedBtn.addEventListener("click", displayAuthPage);
loginButton.addEventListener("click", displayAuthLoginPage);
signUpButton.addEventListener("click", displayAuthSignUpPage);

function displayAuthPage() {
  authPage.style.display = "flex";
  landingPage.style.display = "none";
  footerSection.style.display = "none";
}
function displayAuthLoginPage() {
  authPage.style.display = "flex";
  landingPage.style.display = "none";
  footerSection.style.display = "none";
  loginClicked();
}
function displayAuthSignUpPage() {
  authPage.style.display = "flex";
  landingPage.style.display = "none";
  footerSection.style.display = "none";
  signUpClicked();
}

// PAGE BUTTON FUNCTIONS
function signUpUser() {
  // GET EMAIL
  // GET FIRST PASSWORD
  // GET SECOND PASSWORD
  // AUTHENTICATE
  // NAVIGATE TO AUTH-SUCCESS PAGE
  navToAuthSuccess();
  // CHANGE DISPLAY
  activeUserDisplay();
}

function loginUser() {
  // GET EMAIL
  // GET PASSWORD
  // AUTHENTICATE
  // NAVIGATE TO AUTH-SUCCESS PAGE
  navToAuthSuccess();
  // CHANGE DISPLAY
  activeUserDisplay();
}

function activeUserDisplay() {
  loginButton.style.display = "none";
  signUpButton.style.display = "none";
  getStartedBtn.style.display = "none";
  userIcon.style.display = "flex";
}

function navToAuthSuccess() {
  authPageButtons.style.display = "none";
  loginPage.style.display = "none";
  signUpPage.style.display = "none";
  authSuccessPage.style.display = "block";
}

// Toggle
signUpToggleButton.addEventListener("click", signUpClicked);

function signUpClicked() {
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
}

loginToggleButton.addEventListener("click", loginClicked);

function loginClicked() {
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
}

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

// Book Detail logic

// Create Objects for each book

// let halfOfAyellowSunBook = document.getElementById("half-of-a-yellow-sun-book");

const halfOfAyellowSun = {
  title: "Half of a Yellow Sun",
  author: "Chimamanda Ngozi Adichie",
  image: "assets/half-of-a-yellow-sun-book.png",
  about:
    "Half of a Yellow Sun is a novel by Nigerian author Chimamanda Ngozi Adichie. Published in 2006 by 4th Estate in London, the novel tells the story of the Biafran War through the perspective of the characters Olanna, Ugwu, and Richard. It received critical acclaim and won the Women's Prize for Fiction in 2007.",
};

const companyOfOne = {
  title: "Company of one",
  author: "Cheikh Anta Diop",
  image: "assets/company-of-one-book.png",
  about:
    "Precolonial Black Africa is one of three major works by Cheikh Anta Diop that attempts to reconstruct African history and the black contribution to the foundations of Western civilization. In this book, Diop compares the political and social systems of Europe and black Africa from antiquity to the formation of modern states. Throughout, ...More",
};

const thingsFallApart = {
  title: "Things Fall Apart",
  author: "Chinua Achebe",
  image: "assets/things-fall-apart-book.png",
  about:
    "Things Fall Apart is the debut novel by Nigerian author Chinua Achebe, first published in 1958. It depicts pre-colonial life in the southeastern part of Nigeria and the invasion by Europeans during the late 19th century.",
};

const chemistryOfTheEnvironment = {
  title: "Chemistry of the Environment",
  author: "Paul Jarvis",
  image: "assets/chemistry-of-the-environment.png",
  about:
    "Chemistry of the Environment, 3rd Edition, is a concise, clear and current account of today’s environmental issues and the science one needs to understand them. This intermediate-level text, which recommends General Chemistry as a prerequisite, systematically lays out themes of sustainability, atmosphere, hydrosphere, lithosphere and biospheres, while stressing the interconnectedness of environmental problems and solutions  ...more",
};

const theGene = {
  title: "The Gene",
  author: "Siddhartha Mukherjee",
  image: "assets/gene-book.png",
  about:
    "The Gene: An Intimate History is a book written by Siddhartha Mukherjee, an Indian-born American physician and oncologist. It was published on 17 May 2016 by Scribner.",
};

const aMindForNumbers = {
  title: "A Mind For Numbers",
  author: "Barbara Oakley, PhD",
  image: "assets/a-mind-for-numbers-book.png",
  about:
    "Whether you are a student struggling to fulfill a math or science requirement, or you are embarking on a career change that requires a new skill set, A Mind for Numbers offers the tools you need to get a better grasp of that intimidating material. Engineering professor Barbara Oakley knows firsthand how it feels to struggle with math. ...more",
};

function displayProductDetail() {}

const bookTitle = document.getElementById("book-details-title");

// LINKS
// const homePageLink = document.getElementById("home-page-link");
// const artPageLink = document.getElementById("art-page-link");
// const sciencePageLink = document.getElementById("sscience-page-link");
// const cartPageLink = document.getElementById("cart-page-link");

// function displayActiveLink(link) {
//   link.classList.add("active-link");
// }

// homePageLink.addEventListener("click", () => {
//   displayActiveLink(homePageLink);
//   console.log("Link clicked");
// });

// // homePageLink.classList.toggle("active-link");

// artPageLink.addEventListener("click", () => {
//   displayActiveLink(artPageLink);
//   console.log("Link clicked");
// });
