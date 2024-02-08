const http = require("http");
const host = "127.0.0.1";
const port = 3002;
const rupiah = require("rupiah-format");
const fs = require("fs");

// request data masuk dari luar
// response data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "ade";
  const uang = 100000;
  const jajan = 50000;
  const sisa = uang - jajan;
  const sisaRupiah = rupiah.convert(sisa);
  const jajanRupiah = rupiah.convert(jajan);
  fs.appendFile("sisauang.txt", sisaRupiah, () => {
    console.log("sisa uang saya ", sisaRupiah);
  });
  const hasil = `Saya ${nama} . Saya jajan sebanyak ${jajanRupiah} dan sisan uang saya ${sisaRupiah}`;

  response.statusCode = 203;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server menyala pada ${host}:${port}`);
});
