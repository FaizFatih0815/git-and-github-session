/*
FUNCTION STRUCTURE
paremeter : itu tempat untuk value nya
argument : itu nilai yang harus dimasukkan kalau udah buat parameter

function [function_name] ([parameter?] : [ts_types]) : [ts_types]{
    [function_logic]
    return [return_value]
}

FUCNTION EXECUTION
[function_name](argument)
*/

/* ------------------------------- FUNCTION 1 ------------------------------- */

function squareArea(side: number): number {
  const result = side * side;
  return result;
}

console.log(squareArea(5));
console.log(squareArea(10));

/* ------------------------------- FUNCTION 2 ------------------------------- */
function greetings(name: string): void {
  console.log(`Hi, ${name}!`);
  console.log("Apa kabar?");
  console.log("Kamu sehat?");
}

console.log(greetings("Zaky"));

/* ------------------------------- FUNCTION 3 ------------------------------- */

function palindromeCek(words: string): boolean {
  let reverseText: string = "";

  for (let i = 0; i < words.length; i++) {
    reverseText = words[i] + reverseText;
  }

  console.log(words);
  console.log(reverseText);

  if (words.toLowerCase() === reverseText.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeCek("Madam"));
console.log(palindromeCek("Kasur"));
console.log(palindromeCek("RacECar"));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */

// {
// 2. Check palindrome
//   const text: string = "MadAm";
//   let reverseText: string = "";

//   for (let i = 0; i < text.length; i++) {
//     reverseText = text[i] + reverseText;
//     console.log(reverseText);
//   }

//   if (text.toLowerCase === reverseText.toLowerCase) {
//     console.log(`${text} is palindrome`);
//   } else {
//     console.log(`${text} is not palindrome`);
//   }
// }
