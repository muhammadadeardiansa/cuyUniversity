let usia = 20;
let biodata = document.getElementById("biodata");

function generateBiodata() {
  let generasi;

  if (usia >= 16) {
    generasi = "Generasi Remaja";
  } else if (usia >= 25) {
    generasi = "Generasi Dewasa";
  } else if (usia >= 35) {
    generasi = "Generasi Tua";
  } else {
    generasi = "Lu masi bayi 😂";
  }

  return (biodata.innerHTML = generasi);
}

generateBiodata();
