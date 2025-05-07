{
  function countDown1(start: number): void {
    if (start < 0) {
      return;
    }
    console.log(start);

    countDown1(start - 1);
  }

  console.log(countDown1(3));
}
