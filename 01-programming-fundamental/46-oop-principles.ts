/* ----------------------------- OOP Principles ----------------------------- */
//1. Encapsulation
//2. Abstraction
//3. Polymorphism
//4. Inheritance

/* ------------------------------ Encapsulation ----------------------------- */
//Menyatukan berbagai macam data/variable/fungsi yang saling berkaitan di satu tempat

class Product {
  name: string;
  price: number;
  expiredDate: Date;

  constructor(name: string, price: number, expiredDate: Date) {
    this.name = name;
    this.price = price;
    this.expiredDate = expiredDate;
  }

  isExpired() {
    if (this.expiredDate.getTime() <= new Date().getTime()) {
      return `${this.name} already expired`;
    } else {
      return `${this.name} is not expired yet`;
    }
  }
}

const biscuit = new Product("Biscuit", 50000, new Date("2025-04-29"));

console.log(biscuit.name);
console.log(biscuit.price);
console.log(biscuit.isExpired());

/* ------------------------------- Abstraction ------------------------------ */
//Mengabstraksi sesuatu yang kompleks agar TERLIHAT SEDERHANA
class CoffeMachine {
  grindBeans() {
    return "Grinding coffe beans...";
  }

  boilWater() {
    return "Boiling water...";
  }

  brew() {
    return "Brewing coffe...";
  }
  pour() {
    return "Pouring coffe into the cup";
  }

  serve() {
    return "Serving the coffe. Enjoy!";
  }
  makeCoffe() {
    return `
    ${this.grindBeans()}
    ${this.boilWater()}
    ${this.brew()}
    ${this.pour()}
    ${this.serve()}
    `;
  }
}

const machine = new CoffeMachine();
console.log(machine.makeCoffe());

/* ------------------------------ Polymorphism ------------------------------ */
//Sebuah fungsi /object yang memiliki banyak bentuk
//Di skip dulu karena di javascript itu gaada

/* ------------------------------- Inheritance ------------------------------ */
//Sebuah class / object bisa mewarisi class / object yang lain

class Sale {
  discount: number;
  promoStartDate: Date;
  promoEndDate: Date;

  constructor(discount: number, promoStartDate: Date, promoEndDate: Date) {
    this.discount = discount;
    this.promoStartDate = promoStartDate;
    this.promoEndDate = promoEndDate;
  }

  isOnPromotion() {
    if (new Date() >= this.promoStartDate && new Date() <= this.promoEndDate) {
      return `Still on sale!`;
    } else {
      return `Not on sale!`;
    }
  }
}

class BookSale extends Sale {
  name: string;
  price: number;

  constructor(
    discount: number,
    promoStartDate: Date,
    promoEndDate: Date,
    name: string,
    price: number
  ) {
    super(discount, promoStartDate, promoEndDate);
    this.name = name;
    this.price = price;
  }
}

const harryPotter = new BookSale(
  20,
  new Date("2025-04-30"),
  new Date("2025-05-30"),
  "harryPotter",
  500000
);

console.log(harryPotter.name);
console.log(harryPotter.price);
console.log(harryPotter.discount);
console.log(harryPotter.promoStartDate);
console.log(harryPotter.promoEndDate);
console.log(harryPotter.isOnPromotion());
