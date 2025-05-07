/* ---------------------------- Default parameter --------------------------- */
function rectangleArea(width: number = 2, length: number = 5): number {
  const result = width * length;
  return result;
}

console.log(rectangleArea(10, 50));
console.log(rectangleArea(10));
console.log(rectangleArea());

/* ----------------------------- Rest Parameter ----------------------------- */
function summAllParameters(
  param1: number,
  param2: number,
  param3: number
): number {
  const result = param1 + param2 + param3;
  return result;
}

console.log(summAllParameters(1, 2, 3));
console.log(summAllParameters(10, 20, 30));

function summAllParametersFixed(
  param1: number,
  param2: number,
  ...restParam: number[]
) {
  let result = param1 + param2;

  if (restParam.length > 0) {
    for (const el of restParam) {
      result = result + el;
    }
  }
  return result;
}

console.log(summAllParametersFixed(1, 2, 3, 4, 5));
console.log(summAllParametersFixed(1, 2, 3, 4, 5, 6, 7, 8));
