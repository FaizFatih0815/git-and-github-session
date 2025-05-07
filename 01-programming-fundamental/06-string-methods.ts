{
  /* ---------------------------------- SLICE --------------------------------- */
  let message: string = "21 April is Kartini Day";
  let sliceResultOne: string = message.slice(12);
  let sliceResultTwo: string = message.slice(12, 19);

  console.log(sliceResultOne);
  console.log(sliceResultTwo);

  let score: number = 1000;
  //   let sliceResultThree = score.slice();

  /* -------------------------- REPLACE & REPLACE ALL ------------------------- */
  let chat = "Hai, ini nomor teleponku +6282121869515";
  let replacePhonenumber1 = chat.replace("+620808080808", "****");
  let replacePhonenumber2 = chat.replace(/\+62\d{9,11}/, "****");

  console.log(replacePhonenumber1);
  console.log(replacePhonenumber2);

  /* ------------------------ TOUPPERCASE & TOLOWERCASE ----------------------- */
  let fullName = "Jonathan Cristhie";
  let fullNameUpper = fullName.toUpperCase();
  let fullNameLower = fullName.toLowerCase();

  console.log(fullNameUpper);
  console.log(fullNameLower);
  console.log("hanDOkO".toUpperCase()); //Bisa juga langsung di tulis di console.log nya kayak gini
  console.log("hanDOkO".toLowerCase());

  /* --------------------------------- CONCAT --------------------------------- */
  //Buat gabungin beberapa string

  let greetings = "Hai";
  let firstName = "Sharon";
  let middleName = "Januari";
  let lastName = "Middleton";

  console.log(
    greetings.concat(", ", firstName, " ", middleName, " ", lastName)
  );

  /* ---------------------------------- TRIM ---------------------------------- */
  let phoneNumber = "   +62 08080808     ";
  console.log(phoneNumber);
  console.log(phoneNumber.trim());
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- METHOD --------------------------------- */
//Fungsi atau fitur spesial yang ada di tiap tipe data
