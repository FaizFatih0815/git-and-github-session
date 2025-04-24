{
  /* ---------------------------- STRIN CONVERSION ---------------------------- */
  //Mengubah suatu tipe data ke dalam bentuk string

  console.log(String(0));
  console.log(String(null));
  console.log(String([1, 2, 3]));
  console.log(String({ name: "Faiz" }));

  /* ---------------------------- NUMBER CONVERSION --------------------------- */
  //Mengubah tipe data kedalam bentuk number
  console.log(Number("1000"));
  console.log(Number("1000ABC"));
  console.log(Number());

  console.log(+"1000"); //Cara menulis sama kayak number diatas, cuma lebih singkat
  console.log(+"1000ABC");
  console.log(+"");

  console.log(parseInt("1000")); //Ini number conversion, bisa lebih pinter karena bisa ngehapus huruf di string nya
  console.log(parseInt("10000ABC"));
  console.log(parseInt(""));

  /* --------------------------- BOOLEAN CONVERSION --------------------------- */
  //Mengubah suatu data kedalam betuk boolean
  console.log(Boolean(0));
  console.log(Boolean(1));
  console.log(Boolean(2));
  console.log(Boolean(-2));

  console.log(Boolean(""));
  console.log(Boolean("A"));
  console.log(Boolean("AB"));
  console.log(Boolean("ABC"));

  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean({}));
  console.log(Boolean({ name: "Faiz" }));
  console.log(Boolean([]));
  console.log(Boolean([1, 2, 3]));

  /* ------------------------- TRUTHY VS FALSY VALUES ------------------------- */
  //Truthy kalo diubah jadi boolean jadi nya true
  //Falsy kalo diubah jadi boolean jadi nya false

  //Falsy
  console.log(Boolean(false));
  console.log(Boolean(0));
  console.log(Boolean(-0));
  console.log(Boolean(""));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));
}
