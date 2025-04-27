/* ---------------------------- SHORT CIRCUIT AND --------------------------- */
//Kalau dua dua nya false, false yang paling awal yang di tampilin (false1 && false 2 -> false1)
//Kalau dua dua nya true, true yang paling akhir yang di tampilin (true1 && true2 -> true2)
//Kalau ada false dan true, yang di tampilin yang false, ga peduli diawal atau di akhir (true1 && false1 -> false1)

// console.log(0 && "");
// console.log("" && 0);
console.log(0 && 1);
// console.log("Satu" && 1);

/* ---------------------------- SHORT CIRCUIT OR --------------------------- */
//Kalau dua dua nya false, false yang paling awal yang di tampilin (false1 && false 2 -> false2)
//Kalau dua dua nya true, true yang paling akhir yang di tampilin (true1 && true2 -> true1)
//Kalau ada false dan true, yang di tampilin yang false, ga peduli diawal atau di akhir (true1 && false1 -> true1)

// console.log(0 || "");
// console.log("" || 0);
console.log(0 || 1);
// console.log("Satu" || 1);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// {
//   isUserLogin && <SignInButton />;
// }
