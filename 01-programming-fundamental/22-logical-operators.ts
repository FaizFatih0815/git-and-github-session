/* ----------------------------------- AND ---------------------------------- */
//Perbandingan di kedua sisi harus sama sama TRUE agar final result menjadi TRUE
//Cukup 1 false, untuk ngejadiin false
//true && true = true
//true && false = false
//false && false = false

console.log(10 > 5 && 5 < 1);
console.log(10 > 5 && 5 > 1);
console.log(10 > 5 && 5 > 1 && 1 < 1);

/* ----------------------------------- OR ----------------------------------- */
//Cukup 1 true, untuk ngejadiin true
//true || true = true
//true || false = true
//false || false = false

console.log(false || true);
console.log(10 < 1 || 10 > 2);

console.log((10 > 5 && 5 > 1 && 1 < 1) || 10 > 5);

/* --------------------------------- NEGASI --------------------------------- */
console.log(!false);
console.log(!true);
// console.log(!10 > 5);
// console.log(!"");
