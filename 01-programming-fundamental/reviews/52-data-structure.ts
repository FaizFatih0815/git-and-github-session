/* -------------------------------------------------------------------------- */
/*                                    STACK                                   */
/* -------------------------------------------------------------------------- */
class Stack {
  #maxSize: number; //# itu private, jadi cuma bisa di akses di dalam kelas itu doang, kalo diluar gabisa
  #container: any[] = [];

  constructor(maxSize: number) {
    //Constructor Ngasih nilai inisial dari sebuah objek
    this.#maxSize = maxSize;
  }

  pushData(newData: any) {
    if (this.#container.length >= this.#maxSize) {
      return "stack Overflow!";
    }

    this.#container.push(newData);
  }
  popData() {
    if (this.#container.length <= 0) {
      return "Stack Underflow";
    }
    this.#container.pop();
  }

  getMaxSize() {
    return this.#maxSize;
  }

  getStack() {
    return this.#container;
  }
}
const browserStack = new Stack(10);
const playlistStack = new Stack(3);

console.log(browserStack.getMaxSize());
console.log(playlistStack.getMaxSize());

console.log(browserStack.getStack());
console.log(playlistStack.getStack());

browserStack.pushData("http://google.com");
browserStack.pushData("http://twitter.com");
browserStack.pushData("http://meta.com");

console.log(browserStack.getStack());
console.log(playlistStack.getStack());

browserStack.popData();
browserStack.popData();

console.log(browserStack.getStack());

playlistStack.pushData("Dia dia dia");
playlistStack.pushData("Somewhere we know");
playlistStack.pushData("Indonesia Raya");
playlistStack.pushData("Garuda Pancasila");

console.log(playlistStack.getStack());

console.log(playlistStack.popData());
console.log(playlistStack.popData());
console.log(playlistStack.popData());

console.log(playlistStack.getStack());

console.log(playlistStack.popData());

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const fruits: string[] = ["apple", "banana", "banana", "grape", "Watermelon"];
const setFruits = new Set(fruits);

console.log(setFruits.size);

setFruits.add("Papaya");

console.log(setFruits);

console.log(setFruits.size);

console.log(setFruits.has("apple"));

setFruits.clear();

console.log(setFruits.has("apple"));
console.log(setFruits.size);

//new itu pasti disandingkan dengan class
//Diatas kenapa kok gaada kelas nya? Karena Set itu adalah object yang udah dibuat sama javascript nya
//Jadi class Profile, baru bisa ada new Profile

const number = [10, 1, 1, 1, 2, 2, 4, 3, 2, 3, 5, 6, 7, 10, 10, 5];
const setNumber = new Set(number);
console.log(setNumber);

const uniqueNumber = Array.from(setNumber);
console.log(uniqueNumber);

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const myMap = new Map();
myMap.set("Name", "Alice");
myMap.set(10, "Number");
myMap.set({}, "Object");
console.log(myMap);

const myObj = {};
// myObj.name = "Alice";
myObj[10] = "Number";
// myObj[{}] = "Object";
console.log(myObj);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
{
  function sumTwo1(num) {
    console.log(num + 2);
  }

  function sumThree(num) {
    return num + 3;
  }

  console.log(sumTwo1(10));
  console.log(sumThree(10));
}
