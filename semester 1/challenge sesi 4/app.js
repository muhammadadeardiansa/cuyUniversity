function keluargaLamp() {
  // variable lampu
  let lampu1 = document.getElementById("lampuKeluarga-1");
  let lampu2 = document.getElementById("lampuKeluarga-2");
  let lampu3 = document.getElementById("lampuKeluarga-3");

  // variable toggle
  let allLamp = document.getElementById("keluarga");
  let toggle1 = document.getElementById("keluarga-1");
  let toggle2 = document.getElementById("keluarga-2");
  let toggle3 = document.getElementById("keluarga-3");

  //   lampu 1
  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }

  //   lampu 2
  if (toggle2.checked) {
    lampu2.src = "asset/on.gif";
  } else {
    lampu2.src = "asset/off.gif";
  }

  //   lampu 3
  if (toggle3.checked) {
    lampu3.src = "asset/on.gif";
  } else {
    lampu3.src = "asset/off.gif";
  }

  //   semua lampu
  if (allLamp.checked) {
    lampu1.src = "asset/on.gif";
    lampu2.src = "asset/on.gif";
    lampu3.src = "asset/on.gif";
  }
}

function makanLamp() {
  // variable lampu
  let lampu1 = document.getElementById("lampuMakan-1");

  // variable toggle
  let allLamp = document.getElementById("makan");
  let toggle1 = document.getElementById("makan-1");

  //   lampu 1
  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }

  //   semua lampu
  if (allLamp.checked) {
    lampu1.src = "asset/on.gif";
  }
}

function tidurLamp() {
  // variable lampu
  let lampu1 = document.getElementById("lampuTidur-1");
  let lampu2 = document.getElementById("lampuTidur-2");

  // variable toggle
  let allLamp = document.getElementById("tidur");
  let toggle1 = document.getElementById("tidur-1");
  let toggle2 = document.getElementById("tidur-2");

  //   lampu 1
  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }

  //   lampu 2
  if (toggle2.checked) {
    lampu2.src = "asset/on.gif";
  } else {
    lampu2.src = "asset/off.gif";
  }

  //   semua lampu
  if (allLamp.checked) {
    lampu1.src = "asset/on.gif";
    lampu2.src = "asset/on.gif";
  }
}

function tamuLamp() {
  // variable lampu
  let lampu1 = document.getElementById("lampuTamu-1");
  let lampu2 = document.getElementById("lampuTamu-2");
  let lampu3 = document.getElementById("lampuTamu-3");
  let lampu4 = document.getElementById("lampuTamu-4");

  // variable toggle
  let allLamp = document.getElementById("tamu");
  let toggle1 = document.getElementById("tamu-1");
  let toggle2 = document.getElementById("tamu-2");
  let toggle3 = document.getElementById("tamu-3");
  let toggle4 = document.getElementById("tamu-4");

  //   lampu 1
  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }

  //   lampu 2
  if (toggle2.checked) {
    lampu2.src = "asset/on.gif";
  } else {
    lampu2.src = "asset/off.gif";
  }

  //   lampu 3
  if (toggle3.checked) {
    lampu3.src = "asset/on.gif";
  } else {
    lampu3.src = "asset/off.gif";
  }

  //   lampu 4
  if (toggle4.checked) {
    lampu4.src = "asset/on.gif";
  } else {
    lampu4.src = "asset/off.gif";
  }

  //   semua lampu
  if (allLamp.checked) {
    lampu1.src = "asset/on.gif";
    lampu2.src = "asset/on.gif";
    lampu3.src = "asset/on.gif";
    lampu4.src = "asset/on.gif";
  }
}
