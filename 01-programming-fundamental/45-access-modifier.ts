/* ----------------------------- Access Modifier ---------------------------- */
//1. Public - Semua orang bisa akses
//2. Private - Hanya bisa diakses dari dalam kelas, symbolnya adalah (#) di syntax kelas di awal, dan seterusnya
//3. Protected - Belum diimplementasikan di JS

class User {
  username: string;
  #password: string;

  //Constructor buat ngisi kelas-kelas yang ada diatas
  constructor(username: string, password: string) {
    this.username = username;
    this.#password = password;
  }

  showPassword() {
    return this.#password;
  }
}

const anton = new User("Antonmania", "secure123");

//Public
console.log(anton);

//Private
console.log(anton.showPassword());
