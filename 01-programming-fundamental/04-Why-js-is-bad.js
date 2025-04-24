let price = 10000;
let discount = 0.5;

console.log(price * discount);

//discount "0.7";

//console.log(price * discount);

discount = "0.7A";

console.log(price * discount);
//NaN not a number, pada operasi matematika error maka muncul NaN

discount = null;

console.log(price * discount);

discount = undefined;

console.log(price * discount);

//Karena java script memiliki kelemahan yang value nya terlalu flexible yang bisa berganti ganti
//Dalam java script tidak ada declare data type jadi flexible
//lebih efisien
