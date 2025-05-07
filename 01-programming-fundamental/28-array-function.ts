//Array koleksi data yang disimpan dalam memory
//index arrat itu, panjang array-1
//{} -> empty object
//[] -> empty array

/* ---------------------------- CREATE NEW ARRAY ---------------------------- */
//1 []
const array1 = [];

//2. new array
const arraySecond = new Array();

/* ---------------------- Array can contains everything --------------------- */
const arrayThird = [1, "A", null, undefined];
const arrayFourth = [1, 2, 3, [4, 5, 6, [7, 8, 9, [{ name: "ferdinand" }]]]];
console.log(arrayFourth[1]);
//1. [3] //2. [3]
console.log(arrayFourth[3][3]);
console.log(arrayFourth[3][3][3]);
console.log(arrayFourth[3][3][3][0].name);

//Cara bacanya line 17 : berarti index 1. [3] dari 2.[3] di array fourth
