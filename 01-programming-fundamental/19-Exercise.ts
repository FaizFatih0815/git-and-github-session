// Pertanyaany yang ingin diajukan
//Exercise 1 soal 3 = Keliling lingkaran, gimana cara biar ambil 2 koma di belakang, kalau to fixed kan jadi string
// Exercise 2 soal 4 = Factorial, kan hasilnya ribuan, gimana cara biar tulisan nya ada koma, 10.000, bukan 10000

/* -------------------------------------------------------------------------- */
/*                                 EXERCISE 1                                 */
/* -------------------------------------------------------------------------- */

//Soal 1 = Write a code to find area of rectangle
{
  const width: number = 5;
  const height: number = 3;

  console.log(`Jadi luas area nya adalah ${width * height}`);
}

//Soal 2 = Write a code to find perimeter of rectangle
{
  const width: number = 5;
  const height: number = 3;

  console.log(`Jadi luas area nya adalah ${width * 2 + height * 2}`);
}

//Soal 3 = Write a code to find diameter, circumference, and area of a circle
{
  const radius: number = 5;
  console.log(`Jadi panjang diameter lingkaran nya adalah ${2 * radius} cm`);

  console.log(
    `Jadi panjang keliling lingkaran nya adalah ${Math.round(
      2 * 3.14 * radius
    )} cm`
  );

  console.log(`Jadi lingkaran nya adalah ${3.14 * radius ** 2} cm persegi`);
}

//Soal 4 = Write a code to find angles of triangle if two angles are given
{
  const angle1: number = 80;
  const angle2: number = 65;

  console.log(
    `Sudut ketiga dari segitiga tersebut sebesar ${
      180 - (angle1 + angle2)
    } derajat`
  );
}

// Soal 5 = Write a code to convert days to years, months and  days
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

//Soal 6 = Write a code to get difference between dates in days
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

//Soal 1 = Write a code to check wether the number is odd or even
{
  const angka: number = 30;
  const angkaSisa: number = angka % 2;

  if (angkaSisa === 0) {
    console.log("The number is even");
  } else if (angkaSisa === 1) {
    console.log("The number is odd");
  } else {
    console.log("Please input the number");
  }
}

//Soal 2 = Write a code to check wether the number is prime number or not
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

//Soal 3 = Write a code to find the sum of the numbers 1 to N
{
  const angkaMasuk2: number = 10;
  let total = 0;
  for (let i = 5; i <= angkaMasuk2; i++) {
    console.log(i);
    total += i;
  }
  console.log(`Jadi jumlah totalnya adalah ${total}`);
}

//Soal 4 = Write a code to find factorial of a number
{
  const angkaMasuk3: number = 8;
  let total = 1;
  for (let i = 1; i <= angkaMasuk3; i++) {
    console.log(i);
    total *= i;
  }
  let hasilnya = `Jadi jumlah totalnya adalah ${total}`;
  console.log(hasilnya);
}

//Soal 5 = Write a code to print the first N fibonancci numbers
// {
//   function generatefibonancci(inputNumber: number): number[] {
//     const fibonancci: Number[] = new Array(inputNumber);

//     for (let i = 0; i <= inputNumber; i++) {
//       if (i === 0) {
//         fibonancci[i] = 0;
//       } else if (i === 1) {
//         fibonancci[i] = 1;
//       } else {
//         fibonancci[i] = fibonancci[i - 1] + fibonancci[i - 2];
//       }
//       return fibonancci;
//     }
//     const inputNumber: Number = 8;
//     console.log(generatefibonancci);
//   }
// }

// {
//   const inputNumber: Number = 10;
//   let fibonancci = 0
//   for (let i = 0; i <= inputNumber; i++) {
//     let fibonancci[i] = fibonancci[i - 1] + fibonancci[i - 2];
//   }
// }

/* -------------------------------------------------------------------------- */
/*                                 EXERCISE 3                                 */
/* -------------------------------------------------------------------------- */

// Soal 1 = Write a code to display the multiplication table of giver integer
{
  const numberInput: number = 9;
  for (let i = 1; i <= 10; i++) {
    const perkalian = numberInput * i;
    console.log(perkalian);
  }
}

//Soal 2 = Check palindrome
{
  const word = "kasur";
  let reverseWord = "";

  for (let i = 0; i < word.length; i++) {
    reverseWord = word[i] + reverseWord;
    console.log(reverseWord);
  }
  console.log(reverseWord === word);
}

//Soal 3 = Write a code to convert centimeter to kilometer
{
  const centimeter: number = 100000;
  const kilometer = centimeter / 100000;

  let hasilnya = `Jadi hasil nya adalah ${kilometer} km`;
  console.log(hasilnya);
}

//Soal 4 = Write a code to format number as currency (IDR)
//1000 jadi Rp 1.000,00
{
  const inputAngka: Number = 1000;
  const tambahKoma = inputAngka.toFixed(2);

  let hasilnya = `Nilai rupiah nya adalah Rp ${tambahKoma}`;

  console.log(hasilnya);
}

//Soal 5 = Write a code to remove the first occurance of a given "Search string" from a string

{
  let message1: string = "Hello World";
  let replaceMessage1 = message1.replace("ell", "");

  console.log(replaceMessage1);
}

//Soal 6 = Write a code to capitalize the first letter of each word in a string
{
  const word = "hello world";
  const upperCase = word.charAt(0).toUpperCase() + word.slice(1);
  console.log(upperCase);
}

//Soal 7 = Write a code to swap the case of each character from string
{
  function ubahKapital(str: string): string {
    let result = "";

    for (let char of str) {
      if (char >= "A" && char <= "Z") {
        result += char.toLowerCase();
      } else if (char >= "a" && char <= "z") {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }
    return result;
  }

  console.log(ubahKapital("The QuiCk BrOwN Fox"));
}

//Soal 8 = Write a code to find the largest of two given integers
{
  const num1: number = 42;
  const num2: number = 27;

  if (num1 > num2) {
    console.log(`Nilai yang lebih besar adalah ${num1}`);
  } else if (num1 < num2) {
    console.log(`Nilai yang lebih besar adalah ${num2}`);
  } else {
    console.log(`Angka ini sama besar`);
  }
}

// Soal 9 = Write a conditional statement to sort three numbers
{
  const angkaAcak = [42, 27, 18];
  const urutAngka = angkaAcak.sort((a, b) => a - b);
  console.log(urutAngka);
}

// Soal 10 = Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
{
  const dataInput = "Hello";
  // const data2: Number = 10;
  // const data3 = true;
  console.log(typeof dataInput);

  // if ((console.log(typeof dataInput) = "string")) {
  //   console.log("Data ini adalah string");
  // }
}
