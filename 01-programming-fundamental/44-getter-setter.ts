// Fungsi special untuk ngambil property dari sebuah objek

class BankAccount {
  //List property
  owner: string;
  balance: number;
  _accountNumber: number;

  //Fungsi untuk mengisi property class
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  //Regular method
  greetings() {
    return `Welcome, ${this.owner}`;
  }

  //Setter method
  set accountNumber(value: number) {
    if (typeof value !== "number") {
      throw new Error("Account member must be a member");
    }
    this._accountNumber = value;
  }

  //Getter method
  //   get accountNumber() {
  //     return `${this.owner} account number is: ${this._accountNumber}`;
  //   }
}

const rafifAccount = new BankAccount("Rafif", 500_000_000);
const zakyAccount = new BankAccount("Zaky", 500_000_000);

console.log(rafifAccount);
console.log(zakyAccount);

/* ------------------------------- Setter Call ------------------------------ */
console.log(rafifAccount.greetings());
// rafifAccount.accountNumber(121212121212);
rafifAccount.accountNumber = 121212121212;
console.log(rafifAccount);

// zakyAccount.accountNumber = "ABCD";
console.log(zakyAccount);

/* ------------------------------- Getter Call ------------------------------ */
console.log(rafifAccount.accountNumber);
