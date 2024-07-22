const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection.js");
const respon = require("./response.js");

// routes / url / endpoint utama kita method GET
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (error, result) => {
    //hasil data dari database
    respon(200, result, "data mahasiswa", res);
  });
});

app.get("/find", (req, res) => {
  const sql = `SELECT nama FROM mahasiswa WHERE nim = ${req.query.nim}`;
  db.query(sql, (error, result) => {
    respon(200, result, "Mahasiswa", res);
  });
  console.log("find " + req.query.nim);
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
