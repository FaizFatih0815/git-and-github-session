{
  //Recursive -> Suatu hal/fungsi yang memanggil dirinya sendiri
  //Pastikan ada KONDISI STOP nya, atau nggak dia bakal jalan terus

  function countDown(timer) {
    if (timer <= 0) {
      return;
    }
    console.log(timer);
    countDown(timer - 1);
  }

  countDown(10);
}
