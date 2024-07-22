const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// routes / url / endpoint utama kita method GET

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Halaman Utama");
});

app.get("/hello", (req, res) => {
  console.log({ urlParam: req.query.alamat });
  res.send("Hello Bro!");
});

app.post("/login", (req, res) => {
  console.log({ requestFromClient: req.body });
  res.send("Halaman POST");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
