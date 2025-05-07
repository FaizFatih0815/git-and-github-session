/* ----------------------------- ARRAY FUNCTION ----------------------------- */
//1. Triangle
{
  function printTriangle(height: number): string {
    let result: string = "";
    let counter = 1;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j <= i; j++) {
        if (counter < 10) {
          result = result + "0" + counter + " ";
        } else {
          result = result + counter + "";
        }
        counter++;
      }
      result = result + "\n";
    }
    return result;
  }

  console.log(printTriangle(4));
}

//2. 3 = Fizz, 5 = Buzz, 3&5 = FizzBuzz
{
  function fizzBuzz(num: number): string {
    let result: (string | number)[] = [];

    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else {
        result.push(i);
      }
    }
    return result.join(",");
  }
  console.log(fizzBuzz(15));
}

//3. Create function to calculate Body Mass Index (BMI)
{
  function calculateBMI(weight: number, height: number): string {
    const BMI = weight / (height / 100) ** 2;

    if (BMI < 18.5) {
      return `Less Weight`;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      return `Ideal`;
    } else if (BMI >= 25.0 && BMI <= 29.9) {
      return `Overweight`;
    } else if (BMI >= 30.0 && BMI <= 39.9) {
      return `Very overweigth`;
    } else {
      return `Obesity`;
    }
  }
}

console.log(calculateBMI(65, 165));

// {
//   const weight: number = 65;
//   const height: number = 160;
//   const bodymassindex: number = weight / (height / 100) ** 2;
//   console.log(bodymassindex.toFixed(2));

//   if (bodymassindex < 18.5) {
//     console.log(`Less Weight`);
//   } else if (bodymassindex <= 24.9) {
//     console.log(`Ideal`);
//   } else if (bodymassindex <= 29.9) {
//     console.log(`Overweight`);
//   } else if (bodymassindex <= 39.9) {
//     console.log(`Very overweigth`);
//   } else if (bodymassindex > 39.9) {
//     console.log(`Obesity`);
//   }
// }

//4. Write a function to remove all odd numbers in array and return a new array that contains even numbers only
{
  function removeOddNumber(arrayOfNum: number[]): number[] {
    const result = arrayOfNum.filter((num) => num % 2 === 0);
    return result;
  }
  console.log(removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

//5. Write a function to split a string and convert it into an array of words

{
  function convertStringToArray(sentence: string): string[] {
    const result = sentence.split(" ");
    return result;
  }
  console.log(convertStringToArray("Halo, apa kabar?"));
}

/* -------------------------------- EXERCISE2 ------------------------------- */
//1. Write a function from a given array of mixed data types and return the sum all the number
{
  const mixedArray = ["3", 1, "string", null, false, undefined, 2];
  console.log(Number(mixedArray));
}

/* ----------------------- OBJECT ORIENTED PROGRAMMING ---------------------- */
//1. Create a function to calculate array student data

class studentData {
  name: string;
  email: string;
  age: Date;
  score: number;

  constructor(name: string, email: string, age: Date, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const student1 = new studentData(
  "Faiz",
  "faiz@gmail.com",
  new Date("2025-05-05"),
  90
);

const student2 = new studentData(
  "Asep",
  "asep@gmail.com",
  new Date("2025-05-05"),
  80
);

console.log(student1.name);
console.log(student1.email);
console.log(student1.age);
console.log(student1.score);

console.log(student2.name);
console.log(student2.email);
console.log(student2.age);
console.log(student2.score);
