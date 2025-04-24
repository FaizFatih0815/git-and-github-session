let message; //Bikin variable kosong
console.log(message);
message = "I am hungry";
console.log(message);

/* ------------------------------- LET VS CONST ------------------------------ */

//Let nampilin yang paling akhir di tulis
let fullName;
fullName = "Ahmad Dani";
fullName = "Mulan Jameela";
console.log(fullName);

//Const itu cuma nampilin dari yang awal di isi, jadi gabisa diisi ulang
const address = "Sudirman, jakarta barat";
address = "Palmerah, jakarta barat";
console.log(address);

/* 
1. const tidak boleh dikosongi ketika pertama kali dibuat. let boleh
2. const tidak boleh diganti isi nya. let boleh
*/

/* ----------------------------- variable naming ---------------------------- */
// let n4me$_* = "Faiz"; //Error gaboleh pake symbol selain $ dan _
//let 4adress = "Jakarta Timur" //Error karena, awalnya gaboleh angka

//let student = "Rafif" //Besar atau kecil nya huruf itu berpengaruh
//let Student = "Zaky"

//let typeof = "My Type"; //Error tidak boleh pakai reserved keyword
