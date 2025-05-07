{
  // import data from "./data.json";

  const age = 10;
  const studentProfile = {
    name: "David",
    age: 17,
  };
  console.log(studentProfile);

  /* --------------------------- Javascript to JSON --------------------------- */
  const studentProfileJSON = JSON.stringify(studentProfile);
  console.log(studentProfileJSON);

  /* --------------------------- JSON to Javascript --------------------------- */
  const studentProfileJS = JSON.parse(studentProfileJSON);
  console.log(studentProfileJS);
}
