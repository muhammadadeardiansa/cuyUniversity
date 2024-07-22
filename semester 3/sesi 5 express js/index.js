const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const respon = require("./response");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  respon(200, "data", "Hello World", res);
});

app.get("/mahasiswa/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT nama FROM mahasiswa WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    respon(200, `Hello ID  ${id} ${result[0].nama}`, res);
  });
});

app.post("/post", (req, res) => {
  respon(200, "POST done", res);
});

app.put("/create", (req, res) => {});

app.delete("/create", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
