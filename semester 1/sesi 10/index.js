// let i = 0;

// function klik() {
//   i++;
//   if (i > 5) {
//     console.log("jatah klik sudah 5 kali");
//   } else {
//     console.log("Jatah klik masih ada", 5 - i, "kali");
//   }
// }

// const klik2 = () => {
//   i++;
//   i > 5
//     ? console.log("jatah klik sudah 5 kali broook")
//     : console.log("Jatah klik masih ada", 5 - i, "kali broook");
// };

// const mahasiswa = [
//   {
//     nama: "ade",
//     umur: 20,
//     kelas: 11,
//   },
//   {
//     nama: "budi",
//     umur: 21,
//     kelas: 11,
//   },
// ];

// function klik() {
//   mahasiswa.forEach((mhs) => {
//     console.table(mhs);
//   });
// }

class hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }

  set newColor(color) {
    this.warna = color;
  }

  set newSkill(skill) {
    this.keahlian = skill;
  }

  get detail() {
    return `Hewan ${this.nama} warna ${this.warna} keahlian ${this.keahlian}`;
  }
}

const kucing = new hewan("kucing");
kucing.newColor = "hitam";
kucing.newSkill = "meong";
console.log(kucing.detail);
