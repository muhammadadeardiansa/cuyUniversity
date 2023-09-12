function saklar() {
  let toggle1 = document.getElementById("toggle-1");
  let toggle2 = document.getElementById("toggle-2");
  let toggle3 = document.getElementById("toggle-3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  if (toggle1.checked) {
    lampu1.src = "asset/on.gif";
  } else {
    lampu1.src = "asset/off.gif";
  }
  if (toggle2.checked) {
    lampu2.src = "asset/on.gif";
  } else {
    lampu2.src = "asset/off.gif";
  }
  if (toggle3.checked) {
    lampu3.src = "asset/on.gif";
  } else {
    lampu3.src = "asset/off.gif";
  }
}
