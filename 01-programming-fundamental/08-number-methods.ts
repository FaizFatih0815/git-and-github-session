{
  /* -------------------------------- NUMBER METHOD - TOFIXED -------------------------------- */
  let volume = 15.5671;
  let weight = 70; //Kalau angka nya gaada koma nya, nanti bisa ditambahin 00 koma di belakang nya

  console.log(volume.toFixed(2));
  console.log(weight.toFixed(2));

  /* ------------------------ GLOBAL FUNCTION - NUMBER ------------------------ */
  console.log("10");
  console.log(Number("10"));
  console.log(Number("10A")); //NaN itu ga valid

  /* -------------------------- GLOBAL VALUE - Number ------------------------- */
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);
  console.log(Number.POSITIVE_INFINITY);
  console.log(Number.NEGATIVE_INFINITY);
}
