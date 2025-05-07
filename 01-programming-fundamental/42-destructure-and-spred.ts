/* ------------------------------- Destructure ------------------------------ */
//In Object
//Biasa dipakai untuk mengambil sebagian isi dari object/array
//Urutan ga penting, yang penting nama nya, harus sesuai
//Nama nya harus sesuai dengan yang dibuat di awal
{
  const studentProfile = {
    name: "Angga",
    age: 17,
    gender: "male",
  };

  // const name = studentProfile.name;
  // const age = studentProfile.age;
  // const gender = studentProfile.gender;

  const { name, age, gender } = studentProfile;

  console.log(name);
  console.log(age);
  console.log(gender);
  console.log(address);
}

//In an array
//Nama nya ga penting, yang penting urutan nya (Jadi nama nya baru dibuat pas di bawah nya)
{
  const favoriteSongs = [
    "Indonesia Raya",
    "Somewhere We Know",
    "Nenek Pahlawanku",
  ];

  //   const song1 = favoriteSongs[0];
  //   const song2 = favoriteSongs[1];
  //   const song3 = favoriteSongs[2];

  const [song1, song2, song3] = favoriteSongs;

  console.log(song1);
  console.log(song2);
  console.log(song3);
}

/* --------------------------------- Spread --------------------------------- */
//Biasa dipakai untuk :
// - Dupllikasi array/object
// - Update object
// - Join/menggabungkan array atau object

//Duplikasi object {}
{
  const person = { name: "Anto", age: 25 };
  const newPerson = { ...person };
  person.name = "Handoko";

  console.log(person);
  console.log(newPerson);
}

//Duplikasi array []
{
  const scores = [50, 60, 90, 35];
  const newScores = [...scores];
  scores[0] = 100;

  console.log(scores);
  console.log(newScores);
}

//Update Object
{
  const personData = { name: "Anto", age: 25 };
  const newpersonData = { name: "faisal", address: "Jakarta" };
  const latestPersonData = { ...personData, ...newpersonData };

  console.log(latestPersonData);
}

//Join object {}
{
  const data1 = { name: "Satrio", age: 25 };
  const data2 = { gender: "Male" };
  const data3 = {
    country: "Indonesia",
    province: "DKI",
    city: "Jakarta Barat",
  };
  const allData = { ...data1, ...data2, ...data3 };

  console.log(allData);
}

//Join array []
{
  const array1 = [1, 2, 3];
  const array2 = [4, 5];
  const array3 = [6, 7, 8, 9];

  const allArray = [...array1, ...array2, ...array3];

  console.log(allArray);
}
