{
  //1. Check odd and even number
  //Formula: Apakah bilangan itu habis dibagi dua? true : false
  let num: number | null = null;
  const isEven: boolean = num === null ? false : num % 2 === 0;

  if (isEven === true && num !== undefined) {
    console.log(`${num} is even`);
  } else if (isEven === false && num !== undefined) {
    console.log(`${num} is odd`);
  } else {
    console.log("Please input a number");
  }
}

{
  //2. Check prime number
  const num: number = 10;
  let isPrime: boolean = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (num <= 1) {
    isPrime = false;
  }

  if (isPrime === true) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }
}

{
  //3. Find the sum the number, 1 to N
  const num: number = 5;
  let result: number = 0;

  for (let i = 0; i <= num; i++) {
    result = result + i;
  }

  console.log(result);
  /*
  Loop 1:
  i = 0
  result = 0
  nextResult = 0 + 0 = 0

  Loop 2:
  i = 1
  result = 0
  nextResult = 1 + 1 = 1

  Loop 3:
  i = 2
  result = 1
  nextResult = 1 + 2 = 3

  Loop 4:
  i = 3
  result = 3
  nextResult = 3 + 3 = 6

  Loop 5:
  i = 4
  result = 6
  nextResult = 4 + 6 = 10
  
  Loop 6:
  i = 5
  result = 10
  nextResult = 5 + 10 = 15
  */
}

{
  //4. Find the factorial of number
  //Formula: 5! = 1 * 2 * 3 * 4 * 5
  const num: number = 5;
  let result: number = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  console.log(result);
}

{
  //5. Fibonacci
  const row: number = 15;
  let a: number = 0;
  let b: number = 1;
  let c: number | null = null;
  for (let i = 2; i <= row; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  console.log(c);
}
