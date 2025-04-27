{
  //1. Find the area of a rectangle
  //Formula: rectangle area = length * width
  const length: number = 5;
  const width: number = 3;
  const result: number = length * width;

  console.log(result);
}

{
  //2. Find the perimeter of a rectangle
  //Formula: rectangle perimeter = 2*(length + width)
  const length: number = 5;
  const width: number = 3;
  const result: number = 2 * (width + length);

  console.log(result);
}

{
  //3. Find diameter, area, and circumference of a circle
  //Forumula:
  // - Diameter = 2 * radius
  // - Circumference = 2 * PI * radius
  // - Area = PI * (radius ** 2)

  const radius: number = 5;
  const diameter: number = 2 * radius;
  const circumference: number = 2 * Math.PI * radius;
  const area: number = Math.PI * radius ** 2;

  console.log(diameter);
  console.log(circumference.toFixed(2));
  console.log(area.toFixed(2));
}

{
  //4. Find the third angle of a triangles
  //Formula : 3rd angle = 180 - (1st angle + 2nd angle)
  const firstAngle: number = 80;
  const secondAngle: number = 65;
  const thirdAngle: number = 180 - (firstAngle + secondAngle);

  console.log(thirdAngle);
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
console.log(Math.PI);
