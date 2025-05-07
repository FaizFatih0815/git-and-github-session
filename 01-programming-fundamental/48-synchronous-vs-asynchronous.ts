/* --------------------------- SYNCHRONOUS EXAMPLE -------------------------- */

// console.log(1);
// console.log(2);

// for (let i = 0; i < 1000; i++) {}

// console.log(3);
// console.log(4);
// console.log(5);

/* -------------------------- ASYNVHRONOUS EXAMPLE -------------------------- */
///Yang depannya set... pasti asynchronous

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);
