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

app.get("/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, field) => {
    if (err) throw err;
    respon(200, field, "semua mahasiswa", res);
  });
});

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  const sql = `SELECT  FROM mahasiswa WHERE nim = ${nim}`;
  db.query(sql, (err, field) => {
    if (err) throw err;
    respon(200, field, "data mahasiswa", res);
  });
});

app.post("/mahasiswa", (req, res) => {
  const { nim, nama, jurusan } = req.body;

  const sql = `INSERT INTO mahasiswa (nim, nama, jurusan) values ('${nim}', '${nama}', '${jurusan}')`;
  db.query(sql, (err, field) => {
    if (err) respon(400, "invalid", "eror", res);
    if (field?.affectedRows) {
      const data = {
        isSuccess: field.affectedRows,
        id: field.insertId,
      };
      respon(200, data, "data masuk", res);
    }
  });
});

app.put("/mahasiswa", (req, res) => {
  const { id, nim, nama, jurusan } = req.body;

  const sql = `UPDATE mahasiswa SET nim = '${nim}', nama = '${nama}', jurusan = '${jurusan}' WHERE id = '${id}'`;

  db.query(sql, (err, field) => {
    if (err) respon(400, "invalid", "eror", res);
    if (field?.affectedRows) {
      const data = {
        isSuccess: field.affectedRows,
        message: field.message,
      };
      respon(200, data, "data terupdate", res);
    } else {
      respon(500, "mohon maaf", "eror", res);
    }
  });
});

app.delete("/mahasiswa", (req, res) => {
  const { id } = req.body;

  const sql = `DELETE FROM mahasiswa WHERE id = '${id}'`;
  db.query(sql, (err, field) => {
    if (err) respon(400, "invalid", "eror", res);
    if (field?.affectedRows) {
      const data = {
        isSuccess: field.affectedRows,
        message: field.message,
      };
      respon(200, data, "data terdelete", res);
    } else {
      respon(500, "mohon maaf", "eror", res);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
