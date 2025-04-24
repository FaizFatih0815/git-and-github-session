{
  /* --------------------------------- POSTFIX -------------------------------- */
  //Operator increment / decrement ada SESUDAH variable
  //Nilai dia berubah di baris selanjutnya setelah di panggil lagi dengan console.log
  let score: number = 10;
  score++;
  console.log(score);
  console.log(score++);
  console.log(score);

  let finalScore = score++;
  console.log(score);
  console.log(finalScore);

  /* --------------------------------- PREFIX --------------------------------- */
  //Operator increment / decrement ada SEBELUM variable
  //Nilai dia langsung berubah, di baris tempat dimana dia ngasih syntax
  let point: number = 10;
  ++point;
  console.log(point);
  console.log(++point);
  console.log(point);

  let finalPoint = ++point;
  console.log(finalPoint);
}
