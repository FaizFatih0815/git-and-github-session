// const carBrand :string = "BMW";
// const carModel :string = "E36";
// const carPrice :number = 50_000_000;

const car = {
  brand: "BMW",
  model: "E36",
  price: 50_000_000,
};

console.log(car.brand);

/* ------------------------------ Create Object ----------------------------- */
//1.
let object1 = { id: 1, name: "Bambang" };
console.log(object1);

//2.
let object2 = new Object({ id: 1, name: "Bambang" });
console.log(object2);

/* ---------------------------- Object Types inTS --------------------------- */
//interface || type

interface MotorcycleType {
  brand: string;
  model: string;
  price: number;
  color: string;
}

const motorcycle: MotorcycleType = {
  brand: "Honda",
  model: "X-max",
  price: 50_000_000,
  color: "black",
};

console.log(motorcycle);

/* --------------------------------- Methods -------------------------------- */
//Object property yang value nya berupa fungsi (Methods adalah sebuah fungsi yang dipakai di dalam objek)
//Tambahin "this...." jangan lupa. Pake "this" karena lebih flexible
const user = {
  nama: "Jonathan",
  age: 500,
  greet: () => {
    return `My name is ${this.nama} and my age is ${this.age}`;
  },
};

console.log(user.nama);
console.log(user["age"]);
console.log(user.greet());

/* -------------------- ADD, Update, and Delete Property -------------------- */
interface Persontype {
  name: string;
  age?: number;
  hobby?: string;
}

const person: Persontype = {
  name: "Frengky",
  age: 29,
};
console.log(person);

//Add
person.hobby = "Memancing";
console.log(person);

//Update
person.name = "Andrew";
console.log(person);

//Delete
delete person.age;
console.log(person);

/* ---------------------------- Optional Chaining --------------------------- */
let people = {};

console.log(people);
console.log(people.address);
console.log(people.address?.street);
console.log(people.address?.street.houseNumber);
