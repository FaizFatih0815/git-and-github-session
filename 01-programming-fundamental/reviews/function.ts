{
  const angle1 = 30;
  const angle2 = 50;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}

{
  const angle1 = 20;
  const angle2 = 40;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}

{
  const angle1 = 40;
  const angle2 = 60;
  const angle3 = 180 - (angle1 + angle2);
  console.log(angle3);
}

{
  function calculateThridAngle(angle1: number, angle2: number): number {
    // const angle1 = 40;
    // const angle2 = 60;
    const angle3 = 180 - (angle1 + angle2);
    return angle3;
  }
  console.log(calculateThridAngle(30, 50));
  console.log(calculateThridAngle(20, 40));
  console.log(calculateThridAngle(40, 60));
}
