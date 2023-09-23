let form = document.getElementById("form-daftar");
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

function daftar() {
  localStorage.setItem("nama", inputNama.value);
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("username", inputUsername.value);
}
