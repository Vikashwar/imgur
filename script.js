// Home page starts ----->

var input = document.getElementById("input");
var grid = document.getElementById("grid");
// input.addEventListener(onclick,loadImg())

async function loadImg() {
  let response = await fetch(
    "https://api.unsplash.com/search/photos/?query=" +
      input.value +
      "&per_page=9&client_id=X7hPhTfcqJJDS0CDXLEvjyIzPZrsNTTAZYOy1MWtHgM"
  );
  let data = await response.json();
  console.log(data);
  let imageNodes = [];
  let images = [];
  for (let i = 0; i < data.results.length; i++) {
    imageNodes = document.createElement("div");
    img1 = document.createElement("img");
    img1.id = "img123";
    url = data.results[i].urls.raw;
    img1.src = url;
    grid.append(img1);
  }
}

function signinBtn() {
  window.location.href = "sign_in.html";
}

function signupBtn() {
  window.location.href = "sign_up.html";
}

function backHome() {
  window.location.href = "index.html";
}

// Home page end ------->

// SignIn page starts -------->

function login(e) {
  e.preventDefault();
  console.log("hi");
  let myForm = document.getElementById("form");
  console.log(myForm);

  let name = myForm.name.value;

  let password1 = myForm.password1.value;
  console.log(name, password1);
  let all_users = JSON.parse(localStorage.getItem("users"));

  let result = false;
  all_users.forEach((element) => {
    if (element.name === name && element.password1 == password1) {
      result = true;
      window.location.href = "index.html";
    }
  });

  if (!result) {
    alert("Invalid Credentials");
  }
}

function backHome() {
  window.location.href = "index.html";
}

// SignIn page end ---------->

// SignUp page starts ---------->
function signup1(e) {
  e.preventDefault();

  let myForm = document.getElementById("form");

  let name = myForm.name.value;
  let email = myForm.email.value;
  let password1 = myForm.password1.value;
  let password2 = myForm.password2.value;
  let mobile = myForm.mobile.value;

  console.log("hi", email, name);

  var user = {
    name,
    email,
    password1,
    password2,
    mobile,
  };

  function checkForProperData() {
    for (k in user) {
      if (user[k] === "") {
        alert("Please fill all the details");
        return false;
      }
    }
    return true;
  }

  if (checkForProperData()) {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }

    let users = JSON.parse(localStorage.getItem("users"));

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
  }
  window.location.href = "sign_in.html";
}

function backHome() {
  window.location.href = "index.html";
}

// SignUp page end ----------->
