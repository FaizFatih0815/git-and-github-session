/* -------------------------------------------------------------------------- */
/*                                 EXERCISE 1                                 */
/* -------------------------------------------------------------------------- */

//Write a code to find area of rectangle
{
  const width: Number = 5;
  const height: Number = 10;

  console.log(`Jadi luas area nya adalah ${width * height}`);
}

//Write a code to find perimeter of rectangle
{
  const width: Number = 5;
  const height: Number = 10;

  console.log(`Jadi luas area nya adalah ${width * 2 + height * 2}`);
}

//Write a code to find diameter, circumference, and area of a circle
{
}

// {
//   //Write a code to convert days to years, months and  days

//   //Pseudocode = Dari total hari yang diinput = Dikurangin 365, untuk menambahkan 1 pada years
//   //Sisa dari yang dikurangin, dikurangin 30, untuk menambahkan 1 pada months
//   //Sisa nya akan di tampilkan pada days

//   //Ini Input Hari yang ingin dimasukkan
//   let days: number = 500;

//   //Untuk dijadikan month
//   let MinusYears = days - 365;

//   //Untuk dijadikan day
//   let MinusMonth = MinusYears - 30;

//   //Output yang ditampilkan
//   let MessageFinal = "Hitungan nya adalah";

//   console.log(MessageFinal);
// }

{
  const totalDays = 800;
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const month = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  console.log(years);
  console.log(remainingDays);
  console.log(month);
  console.log(days);

  //Ini jawaban yang bener nya
  const result = `${years} years, ${month} months, ${days} days`;
  console.log(result);
}

{
  //Menghitung selisih tanggal
  const date1 = new Date("2022-01-20");
  const date2 = new Date("2022-01-22");

  console.log(date1.getDate());
  console.log(date2.getDate());

  //Solution 1, tapi ga efektif karena ga ngelihat tanggal
  const result2 = Math.abs(date1.getDate() - date2.getDate());
  console.log(result2);

  //Final Solution
  const diffInMiliSeconds = date1.getTime() - date2.getTime();
  const diffInSeconds = diffInMiliSeconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  console.log(Math.abs(diffInDays));
}

/* -------------------------------------------------------------------------- */
/*                                 EXERCISE 2                                 */
/* -------------------------------------------------------------------------- */

//Write a code to check wether the number is odd or even
{
  const angka: Number = 30;
  const angkaSisa: Number = angka % 2;

  if (angkaSisa === 0) {
    console.log("The number is even");
  } else if (angkaSisa === 1) {
    console.log("The number is odd");
  } else {
    console.log("Please input the number");
  }
}

//Write a code to check wether the number is prime number or not
// {
//   //Cara 1, cek apakah angka yang dimasukkan itu lebih kecil dari 0 apa nggak, kalau lebih kecil berarti bukan prima
//   //Cara 2, cek akar dari angka yang dimasukkan, kalau koma, hasil nya di bulatkan ke angka terkecil
//   //Cara 3, cek dengan membagi ke angka yang dimasukkan, tiap tiap dari hasil yang di akarkan tadi

//   const angkaMasuk: Number = 51;
//   const bagiDua: Number = angkaMasuk % 2;
//   const buatBagi = Math.floor(Math.sqrt(angkaMasuk));

//   if (angkaMasuk < 0) {
//     console.log("This number is not a prime number");
//   } else if (bagiDua === 0) {
//     console.log("This number is not a prime number");
//   }
//   for (let i = 2; i < buatBagi; i++) {
//     if (angkaMasuk % i == 0) {
//       console.log("This number is not a prime number");
//       break;
//     } else {
//       console.log("This number is a prime number");
//     }
//   }

//   console.log(angkaMasuk);
//   console.log(buatBagi);
// }

{
  const angkaMasuk1: number = 7;

  if (angkaMasuk1 <= 1) {
    console.log("This number is not a prime number");
  } else {
    let isPrime = true;
    const batas = Math.floor(Math.sqrt(angkaMasuk1));
    for (let i = 2; i <= batas; i++) {
      if (angkaMasuk1 % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("This number is a prime number");
    } else {
      console.log("This number is not a prime number");
    }
  }
}

///Write a code to find the sum of the numbers 1 to N
{
  const angkaMasuk2: number = 10;
  let total = 0;
  for (let i = 1; i <= angkaMasuk2; i++) {
    console.log(i);
    total += i;
  }
  let hasilnya = `Jadi jumlah totalnya adalah ${total}`;
  console.log(hasilnya);
}

///Write a code to find factorial of a number
{
  const angkaMasuk3: number = 5;
  let total = 1;
  for (let i = 1; i <= angkaMasuk3; i++) {
    console.log(i);
    total *= i;
  }
  let hasilnya = `Jadi jumlah totalnya adalah ${total}`;
  console.log(hasilnya);
}
