let password = document.getElementById("password");
let passwordLength = document.getElementById("passwordLength");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "1234567890";
  const symbol = "`~!@#$%^&*()_-+={[}]|;:'?/>.<,*";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let i = 0; i < len; i++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  alert("Password sudah dibuatkan");
}

function savePassword() {}
