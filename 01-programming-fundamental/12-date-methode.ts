/* ----------------------------------- GET ---------------------------------- */
const birthday = new Date("2001-10-08");

console.log(birthday);

const year = birthday.getFullYear();
const month = birthday.getMonth();
const date = birthday.getDate();
const day = birthday.getDay();

console.log(year);
console.log(month); //Kalo bulan, titik awal nya itu dari 0, jadi 0 itu januari, 1 itu februari, 2 Maret
console.log(date);
console.log(day); //Patokan awal nya 0, jadi 0 senin, 1 selasa, 2 rabu, 3 kamis dst

/* ----------------------------------- SET ---------------------------------- */
birthday.setFullYear(2000);
birthday.setMonth(8);

console.log(birthday);
