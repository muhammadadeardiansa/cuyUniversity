let bodi = document.getElementsByTagName("body");
let halaman = document.getElementById("halaman");
let form = document.getElementById("form");
let judul = document.getElementById("judul");
let nama = document.getElementById("nama");
let inputNama = document.getElementById("inputNama");
let email = document.getElementById("email");
let inputEmail = document.getElementById("inputEmail");
let username = document.getElementById("username");
let inputUsername = document.getElementById("inputUsername");
let password = document.getElementById("password");
let inputPassword = document.getElementById("inputPassword");
let button = document.getElementById("button");
let namaDash = document.getElementById("nama");
let header = document.getElementById("role");

function tampilRegister() {
  location.href = "index.html";
}

function tampilLogin() {
  judul.textContent = "Login";

  nama.parentNode.removeChild(nama);
  inputNama.parentNode.removeChild(inputNama);
  email.parentNode.removeChild(email);
  inputEmail.parentNode.removeChild(inputEmail);

  button.onclick = login;
  button.innerHTML = "Login";

  console.log(button.onclick);
}

function login() {
  localStorage.getItem("username");
  localStorage.getItem("password");

  if (
    localStorage.getItem("username") == "admin" &&
    localStorage.getItem("password") == "admin123"
  ) {
    location.href = "dashboard.html";
    localStorage.setItem("role", "admin");
  }
}

function daftar() {
  localStorage.setItem("nama", inputNama.value);
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("username", inputUsername.value);
  localStorage.setItem("password", inputPassword.value);

  if (localStorage.getItem("username") + localStorage.getItem("password")) {
    location.href = "dashboard.html";
    localStorage.setItem("role", "user");
  }
}

function dashboard() {
  if (localStorage.getItem("role") == "admin") {
    header.textContent = `Selamat Datang Admin`;
    namaDash.textContent = `Halooo ${localStorage.getItem("nama")}`;
  } else if (localStorage.getItem("role") == "user") {
    header.textContent = `Selamat Datang `;
    namaDash.textContent = `Halooo ${localStorage.getItem("nama")}`;
  }
}
dashboard();

function onLogout() {
  // localStorage.clear();
  location.href = "index.html";
}
