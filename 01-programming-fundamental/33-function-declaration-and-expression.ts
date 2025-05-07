/* --------------------------- Function Expression -------------------------- */
{
  const sumTwo = function (num: number): number {
    return num + 3;
  };
  console.log(sumTwo(10));
}

{
  const sumFour = (num: number): number => {
    return num + 4;
  };
  console.log(sumFour(2));
}

/* ------------------------------- Declaration ------------------------------ */
{
  function sumTwo(num: number): number {
    return num + 2;
  }
  console.log(sumTwo(10));
}

/* ------------------- Hoisting(Declaration vs Expression) ------------------ */
{
  //Declaration
  console.log(sumFour(10));
  function sumFour(num: number): number {
    return num + 4;
  }

  //Expression
  //   console.log(sumFive(6));

  const sumFive = function (num: number): number {
    return num + 5;
  };
  console.log(sumFive(6));
}
