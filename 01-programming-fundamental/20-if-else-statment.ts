{
  /* ------------------------------ IF STATEMENT ------------------------------ */
  const age: number = 17;

  //Kondisi menggunakan comparison = Dilihat hasil perbandingan nya
  if (age >= 17) {
    console.log("Please enter");
  }

  //   //Single value = Diubah nilai value nya kedalam boolean
  //   if ("a") {
  //     console.log("Show!");
  //   }
}

/* ----------------------------- ELSE STATEMENT ----------------------------- */
{
  if (10 >= 5) {
    console.log("Horee");
  } else {
    console.log("Aduh");
  }
}

/* --------------------------------- ELSE IF -------------------------------- */
//Harus selalu di antara if dan else
//Ngecek sesuatu dengan kondisi yang berbeda beda
{
  let president: string = "Prabowo";

  if (president === "Prabowo") {
    console.log("Prabowo Presiden Indonesia");
  } else if (president === "Gusdur") {
    console.log("Gusdur presiden sebelumnya");
  } else if (president === "Megawati") {
    console.log("Membara");
  } else {
    console.log("Siapakah presiden indonesia?");
  }
}

/* ----------------------------- NESTED IF ELSE ----------------------------- */
//Ngecek sesuatu dengan banyak gerbang

if (10 < 50) {
  if (20 > 10) {
    console.log("Here!");
  }
}
