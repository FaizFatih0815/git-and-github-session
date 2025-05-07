//Callback function example
//Inti nya callback function itu adalah, fungsi yang ada di dalem fungsi
[1, 2, 3].filter(function () {});
[1, 2, 3].filter(() => {});

//Reguler function
function someFunc() {
  someFunc();
}

//Method -> reguler function yang ada di dalam sebuah object
const obj = {
  someMethod() {},
};
obj.someMethod;
