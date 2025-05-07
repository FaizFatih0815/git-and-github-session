// import { address } from "./b.ts";
import balance from "./b.ts"; // ./itu di folder saat itu, kalo titik nya dua, jadi back satu kali ../
import { address, sumTwo, sumThree } from "./b.ts";

console.log(address);
console.log(balance);

console.log(sumTwo(2));
console.log(sumThree(3));

/* -------------------------------------------------------------------------- */
/*                                    NOTEs                                   */
/* -------------------------------------------------------------------------- */
//1. Named Import - import {[module_name]} from "[module_path]"
//- Harus pakai kurung kurawal
//- Namanya tidak boleh diganti

//2. Default Import - import [module_name from "[module_path]"
//- Tidak boleh pakai kurung kurawal
//- Nama boleh diganti
