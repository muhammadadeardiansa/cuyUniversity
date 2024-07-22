const express = require("express");
const app = express();
const port = 3000;

// routes / url / endpoint utama kita method GET
app.get("/", (req, res) => {
  res.send("Halaman Utama");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
