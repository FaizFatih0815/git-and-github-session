/* -------------------------------- EXERCISE1 -------------------------------- */
//Slide1. NO 1. Write a function to get lowest, highest, and average value
{
  interface GetArrayStatusResult {
    lowest: number;
    highest: number;
    average: number;
  }

  function getArrayStatus(arrayOfNum: number[]): GetArrayStatusResult {
    const sortedArray = arrayOfNum.sort((a, b) => a - b);
    let total = 0;

    // for (const el of sortedArray) {
    //   total = total + el;
    // }

    total = sortedArray.reduce((acc, curr) => acc + curr, 0);

    return {
      lowest: sortedArray[0],
      highest: sortedArray[sortedArray.length - 1],
      average: Number((total / sortedArray.length).toFixed(2)),
    };
  }
  console.log(getArrayStatus([12, 5, 23, 18, 4, 45, 32]));
}

//Slide 1. NO 2. Write a function that takes an array of words and return a string
{
  function arrayFruitToString(fruits: string[]): string {
    fruits.splice(-1, 1, `and ${fruits[fruits.length - 1]}`);
    return fruits.join(", ");
  }

  console.log(
    arrayFruitToString(["apple", "banana", "cherry", "date", "Mango"])
  );
}

//Slide1. NO 3. Write a function a given array of numbers, and return the second smallest number
{
  function getSecondSmallest(arrayOfNum: number[]): number {
    return arrayOfNum.sort((a, b) => a - b)[1];
  }

  console.log(getSecondSmallest([5, 3, 1, 7, 2, 6]));
}

//Slide1. NO 4. Write a function to calculate each element in the same position from two arrays
{
  function calculateArray(array1: number[], array2: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i] + array2[i]);
    }

    return result;
  }
  console.log(calculateArray([1, 2, 3, 4], [4, 3, 2, 1]));
}

//Slide1. NO 5. Write a function that adds an element to the end of array
{
  function addUniqueElement(
    arrayOfNum: number[],
    newElement: number
  ): number[] {
    const ifNumExist = Boolean(arrayOfNum.find((num) => num === newElement));

    if (!ifNumExist) {
      arrayOfNum.push(newElement);
    }
    return arrayOfNum;
  }

  console.log(addUniqueElement([1, 2, 3, 4], 4));
  console.log(addUniqueElement([1, 2, 3, 4], 7));
}

//Slide2. No 1
{
  function sumOfAllNums(array: any[]): number {
    let result: number = 0;

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        result = result + array[i];
      }
    }
    return result;
  }
  console.log(sumOfAllNums([null, 10, undefined, {}, [], "Hello", 1]));
}

//Slide2, NO 2

{
  function arrayFromInts(maxSize: number, ...restParams: number[]): number[] {
    // const result = restParams.slice(0, maxSize);
    const result = restParams.splice(0, maxSize);
    return result;
  }
}
console.log(arrayFromInts(3, 4, 5, 6, 7, 8, 9));
console.log(arrayFromInts(7, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14));
console.log(arrayFromInts(4, 4, 5, 6, 7, 8, 9));
/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
//
//Kalau di contoh, accumulator itu 10
//current, index nya

{
  const array = [10, 20, 30, 40];
  const total = array.reduce((accumulator, current) => {
    return current + accumulator;
  }, 0);
  console.log(total);
}
{
  const userData = [
    { name: "John", expense: 1000 },
    { name: "Jane", expense: 5000 },
    { name: "Angel", expense: 2000 },
  ];

  const totalExpense = userData.reduce((acc, curr) => {
    return acc + curr.expense;
  }, 0);

  console.log(totalExpense);
}

{
  const arrayofnumber = [1, 2, 3, 4, 5];
}
