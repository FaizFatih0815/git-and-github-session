/* -------------------------------------------------------------------------- */
/*                            PRIMITIVE DATA TYPES                            */
/* -------------------------------------------------------------------------- */

/* --------------------------------- STRING --------------------------------- */
let message = "aosifhaoif"; //Pakai tanda kutip dua
let anotherMessage = "asiaoeraoe"; //Pakai single kutip, tapi nanti di save juga bakal jadi dua
let messageAgain = `adkashofiy`; //pakai backtick ``````
let phoneNumber = "+6298989898";

/* --------------------------------- NUMBER --------------------------------- */
let age = 70;
let score = 100;
let points = 50;

/* --------------------------------- BOOLEAN -------------------------------- */
let isLoading = true; //huruf t nya gaboleh gede (T)
let isLogin = false; //huruf f nya gaboleh gede (F)

/* ---------------------------------- NULL ---------------------------------- */
let addres = null; //huruf n nya gaboleh gede (N)
let gender = null;

/* -------------------------------- UNDEFINED ------------------------------- */
let fullName; //Otomatis akan muncul undefined

/* -------------------------------------------------------------------------- */
/*                                NON PRIMITIVE                               */
/* -------------------------------------------------------------------------- */

/* --------------------------------- OBJECT --------------------------------- */
// 1. Menyimpan banyak data yang saling berkaitan
// 2. Harus dibungkus dengan {}, baris di dalem nya di akhiri dengan koma/tiap property dipisahkan dengan koma
// 3. Setiap property nya harus terdiri dari key: Value pair

// let name = "John";
// console.log(name);
// let street = "Jl. Setiabudi";
// console.log(street);
// let city = "Jakarta Selatan";
// let email = "john@mail.com";

let userProfile = {
  name: "John", //Masing masing ini disebut properti, terdiri dari 'Key' dan 'Value'. key : value
  street: "Jl. Setiabudi", //Property street
  city: "Jakarta Selatan", //Property city
  email: "john@mail.com", //Property email
};
console.log(userProfile);
console.log(userProfile.street);
console.log(userProfile.email);

/* ---------------------------------- ARRAY --------------------------------- */
// 1. Menyimpan banyak datayang berurutan
// 2. Harus dibungkus dengan []

let playList = ["Stelan Cuek", "Nenekku Pahlawanku", "Indonesia Raya"];
console.log(playList);
console.log(playList[2]);
console.log(playList[3]);

let scores = [10, 20, 50, 100, 30];
console.log(scores[2]);
console.log(scores[4]);

let randomArray = ["Nadhif", 50, null, undefined, [1, 2, 3]];
console.log(randomArray[4]);
console.log(randomArray[4][1]);

let userList = [{ name: "john" }, { name: "jane" }, { name: "sutomo" }];
console.log(userList.length);
